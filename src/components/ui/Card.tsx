import { memo, ReactNode } from 'react';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { type Transition } from 'framer-motion';
import { motionChakra } from '../../utils/motion';

interface CardProps extends BoxProps {
  children: ReactNode;
  hoverEffect?: boolean;
  delay?: number;
}

const MotionBox = motionChakra(Box);

const Card = memo(({
  children,
  hoverEffect = true,
  delay = 0.1,
  ...rest
}: CardProps) => {
  const bgColor = useColorModeValue('white', 'rgba(15, 23, 42, 0.9)');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const transition: Transition = { duration: 0.4, delay };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition }}
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
