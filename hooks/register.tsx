import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { CLARO, CRISTAL, OSCURO, ROLES } from './paleta.js'
import { SCENE } from './scene.js'

const ESCENA = 'atardecer-dubai'

// Paleta cálida para los dos modos: ciruela oscura con texto crema (oscuro)
// y crema dorada con texto marrón (claro). Acentos naranja y dorado.
const { theme, problems } = makeColors({
  label: 'Atardecer en Dubái',
  roles: ROLES,
  dark: { gray: { anchors: OSCURO } },
  light: { gray: { anchors: CLARO } },
})

// Sin `tint`: los paneles toman el color de superficie del modo activo, así el
// texto siempre contrasta (crema sobre ciruela en oscuro, marrón sobre crema en claro).
const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: ESCENA, glass: { blur: CRISTAL.blur, opacity: CRISTAL.opacity } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if ((e.surface !== 'desktop' && e.surface !== 'mobile') || e.props.scene !== ESCENA) {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)

    return (
      <Svg
        source={SCENE}
        alt="Atardecer sobre Dubái con la silueta del Burj Khalifa a contraluz"
        isInteractive
      />
    )
  })
}
