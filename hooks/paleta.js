// Colores del tema "Atardecer en Dubái". Se usan en el mod y en la vista previa.
// Todos en hexadecimal de seis cifras.

export const ROLES = {
  accent: '#ff8a2a', // naranja del sol: botones, enlaces, palabras clave del código
  warning: '#f2b53c', // dorado: avisos y variables
  danger: '#e5534b', // rojo: errores
  success: '#86c06c', // verde: éxito y cadenas de texto
  pro: '#d48ab8', // rosa del cielo
}

// Modo oscuro: el principal. Marrones-ciruela cálidos y texto crema.
export const OSCURO = {
  'surface-0': '#1a1114',
  'surface-1': '#22171a',
  'surface-2': '#2a1d1f',
  'surface-3': '#2d201f',
  'text-primary': '#fff7ee',
  'text-secondary': '#f3e4d3',
  'text-muted': '#e3d0bd',
}

// Modo claro: la misma hora dorada en crema, por si la app está en claro.
export const CLARO = {
  'surface-0': '#f2e2cf',
  'surface-1': '#f7ebdc',
  'surface-2': '#fcf4ea',
  'surface-3': '#fcf4ea',
  'text-primary': '#2a1912',
  'text-secondary': '#55382a',
  'text-muted': '#6d4f3f',
}

// Cristal de los paneles sobre el fondo: desenfoque en puntos y opacidad (0–1).
// Más opacidad = texto más legible y fondo más tenue.
export const CRISTAL = { blur: 4, opacity: 0.5 }
