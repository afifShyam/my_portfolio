import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Box, BoxProps } from '@chakra-ui/react';

interface PageTransitionProps extends BoxProps {
  children: ReactNode;
  delay?: number;
}

const MotionBox = motion(Box);

const PageTransition = ({
  children,
  delay = 0.2,
  ...rest
}: PageTransitionProps) => {
  return (
    <MotionBox
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

PageTransition.displayName = 'PageTransition';

export default PageTransition;
