# Atardecer en Dubái

Tema para la app de escritorio de Claude Code: un cielo de atardecer animado muy despacio (nubes finas, sol que respira, balizas que parpadean) con la silueta del Burj Khalifa a contraluz. Paneles de cristal cálido, acentos naranja y dorado, y texto claro pensado para leerse bien.

Está pensado para el **modo oscuro** de la app. En modo claro funciona, pero el cristal crema apaga el atardecer.

## Instalación

En la app de escritorio: pulsa **+** junto a la caja de mensajes, luego **Plugins**, **Add marketplace** con `ayaasartan/atardecer-dubai` y después **Add plugin**.

Desde una sesión de Claude Code en la terminal:

```
/plugin install atardecer-dubai --marketplace ayaasartan/atardecer-dubai
```

O desde la línea de comandos:

```bash
claude plugin install atardecer-dubai --marketplace ayaasartan/atardecer-dubai
```

Responde `y` para añadir el marketplace y elige el ámbito de usuario para tenerlo en todas las sesiones.

## Ajustes

Los colores y el cristal de los paneles están en `hooks/paleta.js`. La escena está en `hooks/scene.js`.
