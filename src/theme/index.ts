import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

// Color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// Custom theme
const theme = extendTheme({
  config,
  fonts: {
    heading: '"Inter", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  colors: {
    brand: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    accent: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    neutral: {
      50: '#f6f8fb',
      100: '#e2e8f0',
      200: '#cbd5f5',
      300: '#94a3b8',
      400: '#64748b',
      500: '#475569',
      600: '#334155',
      700: '#1e293b',
      800: '#0f172a',
      900: '#020617',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#f6f8fb', '#0f172a')(props),
        color: mode('#0b1220', 'whiteAlpha.900')(props),
        lineHeight: 'base',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
        fontSmooth: 'always',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, *::after': {
        borderColor: mode('gray.200', 'whiteAlpha.200')(props),
        wordWrap: 'break-word',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
        transition: 'all 0.2s ease',
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorScheme === 'brand' ? 'brand.600' : undefined,
          _hover: {
            boxShadow: 'md',
            bg: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          },
          _active: {
            bg: props.colorScheme === 'brand' ? 'brand.700' : undefined,
            boxShadow: 'none',
          },
        }),
        outline: (props: StyleFunctionProps) => ({
          borderColor: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          color: mode('brand.600', 'brand.300')(props),
          _hover: {
            bg: mode('brand.50', 'rgba(99, 102, 241, 0.12)')(props),
            borderColor: props.colorScheme === 'brand' ? 'brand.600' : undefined,
          },
        }),
        ghost: (props: StyleFunctionProps) => ({
          _hover: {
            bg: mode('gray.100', 'whiteAlpha.200')(props),
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
    Card: {
      baseStyle: (props: StyleFunctionProps) => ({
        container: {
          bg: mode('white', 'rgba(15, 23, 42, 0.85)')(props),
          borderRadius: 'lg',
          boxShadow: mode('sm', 'none')(props),
          borderWidth: mode('1px', '1px')(props),
          borderColor: mode('gray.100', 'whiteAlpha.200')(props),
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: mode('md', '0 10px 30px rgba(15, 23, 42, 0.35)')(props),
          },
        },
        header: {
          py: 4,
          px: 6,
        },
        body: {
          py: 4,
          px: 6,
        },
        footer: {
          py: 4,
          px: 6,
        },
      }),
    },
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode('brand.600', 'brand.300')(props),
        _hover: {
          textDecoration: 'none',
          color: mode('brand.700', 'brand.200')(props),
        },
      }),
    },
  },
});

export default theme;
