import { memo } from 'react';
import { Box, BoxProps, Spinner, useColorModeValue } from '@chakra-ui/react';

interface LoadingSpinnerProps extends BoxProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  thickness?: string;
}

const LoadingSpinner = memo(({ 
  size = 'md', 
  text, 
  thickness = '4px',
  ...rest 
}: LoadingSpinnerProps) => {
  const color = useColorModeValue('brand.500', 'brand.300');
  
  return (
    <Box 
      textAlign="center" 
      py={8} 
      display="flex" 
      flexDirection="column" 
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      <Spinner
        thickness={thickness}
        speed="0.65s"
        emptyColor="gray.200"
        color={color}
        size={size}
      />
      {text && (
        <Box mt={4} fontWeight="medium" color={color}>
          {text}
        </Box>
      )}
    </Box>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;