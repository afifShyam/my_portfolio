import { memo, ReactNode } from 'react';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface CardProps extends BoxProps {
  children: ReactNode;
  hoverEffect?: boolean;
  delay?: number;
}

const MotionBox = motion(Box);

const Card = memo(({ 
  children, 
  hoverEffect = true,
  delay = 0.1,
  ...rest 
}: CardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      borderRadius="xl"
      overflow="hidden"
      bg={bgColor}
      borderColor={borderColor}
      borderWidth="1px"
      boxShadow="md"
      p={4}
      _hover={hoverEffect ? {
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      } : undefined}
      style={{ transition: 'all 0.3s ease' }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
});

Card.displayName = 'Card';

export default Card;