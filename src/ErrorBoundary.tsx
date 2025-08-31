import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Box, Heading, Text, Button, Code, VStack } from '@chakra-ui/react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

// Custom fallback component with better UI
const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box 
      p={6} 
      m={4} 
      bg="red.50" 
      color="red.900" 
      borderRadius="md" 
      borderWidth="1px" 
      borderColor="red.200"
    >
      <VStack align="flex-start" spacing={4}>
        <Heading size="lg">Something went wrong</Heading>
        
        <Text>
          <strong>Error:</strong> {error.message}
        </Text>
        
        <Box w="100%" overflowX="auto">
          <Text mb={2}><strong>Stack Trace:</strong></Text>
          <Code p={3} borderRadius="md" variant="subtle" w="100%" display="block" whiteSpace="pre-wrap">
            {error.stack}
          </Code>
        </Box>
        
        <Button 
          colorScheme="red" 
          onClick={resetErrorBoundary}
          size="md"
        >
          Try again
        </Button>
      </VStack>
    </Box>
  );
};

// Modern functional component using react-error-boundary
const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const handleError = (error: Error) => {
    // Log error details or send to a monitoring service
    console.error('Error caught by Error Boundary:', error);
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={() => {
        // Reset application state here if needed
        console.log('Error boundary reset');
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
