import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  ink: {
    900: '#090909',
    800: '#141414',
    700: '#1c1c1b',
    600: '#2a2a28',
  },
  paper: {
    50: '#f1efe9',
    100: '#dedbd3',
    400: '#9b9891',
  },
  electric: {
    400: '#c4b5fd',
    500: '#8b5cf6',
    600: '#6d28d9',
  },
};
const semanticTokens = {
  colors: {
    canvas: { default: '#f4f1ea', _dark: '#090909' },
    surface: { default: '#ffffff', _dark: '#141414' },
    'surface.subtle': { default: '#ebe6dd', _dark: '#1c1c1b' },
    'text.primary': { default: '#111111', _dark: '#f1efe9' },
    'text.secondary': { default: '#35322e', _dark: '#dedbd3' },
    'text.muted': { default: '#68645e', _dark: '#9b9891' },
    line: { default: '#c9c2b7', _dark: '#2a2a28' },
    accent: { default: '#6d28d9', _dark: '#8b5cf6' },
    'accent.soft': { default: '#ddd6fe', _dark: '#c4b5fd' },
    'accent.strong': { default: '#5b21b6', _dark: '#6d28d9' },
    'accent.contrast': { default: '#ffffff', _dark: '#f1efe9' },
    band: { default: '#131313', _dark: '#f1efe9' },
    'band.text': { default: '#f1efe9', _dark: '#111111' },
    'band.muted': { default: '#a19d96', _dark: '#5f5c55' },
    'band.line': { default: '#333331', _dark: '#bdb8ae' },
    'band.accent': { default: '#c4b5fd', _dark: '#6d28d9' },
  },
};

const styles = {
  global: (props: { colorMode: string }) => ({
    html: {
      bg: 'canvas',
      colorScheme: props.colorMode,
    },
    body: {
      bg: 'canvas',
      color: 'text.primary',
      fontFamily: 'body',
      transition: 'background-color 180ms ease, color 180ms ease',
    },
  }),
};

export const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  styles,
  fonts: {
    heading: '"Barlow Condensed", "Arial Narrow", sans-serif',
    body: '"Instrument Sans", system-ui, sans-serif',
    mono: '"IBM Plex Mono", monospace',
  },
});

export default theme;
