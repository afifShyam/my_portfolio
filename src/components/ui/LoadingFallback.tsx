import { memo } from 'react';
import { Box, BoxProps, Flex, Skeleton, useColorModeValue } from '@chakra-ui/react';
import { LoadingSpinner } from '.';

interface LoadingFallbackProps extends BoxProps {
  type?: 'spinner' | 'skeleton';
  count?: number;
}

const LoadingFallback = memo(({
  type = 'spinner',
  count = 3,
  ...rest
}: LoadingFallbackProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const skeletonStartColor = useColorModeValue('gray.100', 'gray.700');
  const skeletonEndColor = useColorModeValue('gray.300', 'gray.600');
  
  if (type === 'spinner') {
    return <LoadingSpinner text="Loading..." {...rest} />;
  }
  
  return (
    <Box py={8} {...rest}>
      <Flex direction="column" gap={4}>
        {Array.from({ length: count }).map((_, i) => (
          <Skeleton 
            key={i}
            height="200px"
            borderRadius="xl"
            startColor={skeletonStartColor}
            endColor={skeletonEndColor}
            bg={bgColor}
            fadeDuration={1}
          />
        ))}
      </Flex>
    </Box>
  );
});

LoadingFallback.displayName = 'LoadingFallback';

export default LoadingFallback;
