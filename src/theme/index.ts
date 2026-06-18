import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

// Color mode config
const config: ThemeConfig = {
  initialColorMode: 'system',
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
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    accent: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#f8fafc', '#0f172a')(props),
        color: mode('#0f172a', 'whiteAlpha.900')(props),
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
        borderRadius: 'xl',
        transition: 'all 0.2s ease',
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorScheme === 'brand' ? 'brand.600' : undefined,
          _hover: {
            boxShadow: mode('0 12px 26px rgba(37, 99, 235, 0.24)', '0 12px 26px rgba(34, 211, 238, 0.18)')(props),
            bg: props.colorScheme === 'brand' ? 'brand.500' : undefined,
            transform: 'translateY(-1px)',
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
            bg: mode('brand.50', 'rgba(59, 130, 246, 0.14)')(props),
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
          borderRadius: 'xl',
          boxShadow: mode('sm', '0 18px 38px rgba(15, 23, 42, 0.28)')(props),
          borderWidth: mode('1px', '1px')(props),
          borderColor: mode('gray.200', 'whiteAlpha.200')(props),
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: mode('md', '0 20px 40px rgba(15, 23, 42, 0.36)')(props),
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
