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
      50: '#eefbf8',
      100: '#d5f4ef',
      200: '#ace8df',
      300: '#7ad6c9',
      400: '#42bdae',
      500: '#239f91',
      600: '#178277',
      700: '#14685f',
      800: '#14544e',
      900: '#104641',
    },
    accent: {
      50: '#fff1f3',
      100: '#ffe1e7',
      200: '#ffc8d4',
      300: '#ffa1b7',
      400: '#ff7197',
      500: '#ee4d79',
      600: '#d72c61',
      700: '#b6194d',
      800: '#981743',
      900: '#82173d',
    },
    neutral: {
      50: '#f7fbfa',
      100: '#e7f0ef',
      200: '#cddcda',
      300: '#9fb8b5',
      400: '#6d8b88',
      500: '#4f6f6c',
      600: '#395653',
      700: '#263e3c',
      800: '#142927',
      900: '#071817',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#f7fbfa', '#071817')(props),
        color: mode('#071817', 'whiteAlpha.900')(props),
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
            boxShadow: mode('0 12px 26px rgba(23, 130, 119, 0.22)', '0 12px 26px rgba(122, 214, 201, 0.16)')(props),
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
