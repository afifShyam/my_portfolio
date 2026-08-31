import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { LocaleProvider } from './LocaleProvider';
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <LocaleProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </LocaleProvider>
    </ChakraProvider>
  </StrictMode>
);
