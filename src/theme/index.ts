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
      50: '#e6f7ff',
      100: '#b3e0ff',
      200: '#80caff',
      300: '#4db3ff',
      400: '#1a9dff',
      500: '#0080ff', // Primary brand color
      600: '#0066cc',
      700: '#004d99',
      800: '#003366',
      900: '#001a33',
    },
    accent: {
      50: '#e6fff9',
      100: '#b3ffed',
      200: '#80ffe2',
      300: '#4dffd6',
      400: '#1affca',
      500: '#00e6b5',
      600: '#00b38e',
      700: '#008066',
      800: '#004d3d',
      900: '#001a14',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('gray.50', '#0a192f')(props),
        color: mode('gray.800', 'whiteAlpha.900')(props),
        lineHeight: 'base',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: props.colorScheme === 'brand' ? 'brand.600' : undefined,
          },
        }),
        outline: (props: StyleFunctionProps) => ({
          borderColor: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          color: mode('brand.500', 'brand.300')(props),
          _hover: {
            bg: mode('brand.50', 'rgba(0, 128, 255, 0.12)')(props),
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
          bg: mode('white', 'gray.800')(props),
          borderRadius: 'xl',
          boxShadow: mode('md', 'dark-lg')(props),
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: mode('lg', 'dark-xl')(props),
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