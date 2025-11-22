import { ReactNode } from 'react';
import { type Transition } from 'framer-motion';
import { Box, BoxProps } from '@chakra-ui/react';
import { motionChakra } from '../../utils/motion';

interface PageTransitionProps extends BoxProps {
  children: ReactNode;
  delay?: number;
}

const MotionBox = motionChakra(Box);

const PageTransition = ({
  children,
  delay = 0.2,
  ...rest
}: PageTransitionProps) => {
  const transition: Transition = { duration: 0.5, delay };

  return (
    <MotionBox
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition }}
      exit={{ y: -20, opacity: 0, transition }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

PageTransition.displayName = 'PageTransition';

export default PageTransition;
