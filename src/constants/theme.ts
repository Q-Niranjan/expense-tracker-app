// Mirrors the tokens in global.css for props that need raw values instead of a className.
export const colors = {
  primary: '#2A7C76',
  primary400: '#63B5AF',
  primary600: '#2F7E79',
  primary700: '#29756F',
  primary800: '#1B5C58',
  primary100: '#D0E5E4',
  primary50: '#F0F6F5',

  success: '#25A969',
  danger: '#F95B51',

  ink: '#000000',
  heading: '#222222',
  neutral90: '#424242',
  secondary: '#666666',
  onPrimary: '#FFFFFF',
  onPrimaryMuted: '#EEEEEE',

  background: '#FFFFFF',
  surface: '#FBFBFB',
  border: '#DDDDDD',
  overlayLight: 'rgba(255, 255, 255, 0.15)',
  overlaySubtle: 'rgba(255, 255, 255, 0.06)',
} as const;

export const gradients = {
  splash: [colors.primary400, colors.primary],
} as const;

// Must match --font-* values in global.css and useFonts keys in _layout.tsx.
export const fonts = {
  inter: 'Inter',
  interMedium: 'InterMedium',
  interSemiBold: 'InterSemiBold',
  interBold: 'InterBold',
} as const;
