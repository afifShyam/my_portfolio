import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import theme from './theme';


// Get the root element
const rootElement = document.getElementById('root');

// Create root and render app
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ChakraProvider>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
