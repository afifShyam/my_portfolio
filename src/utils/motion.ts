import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import type { ComponentType } from 'react';

/**
 * Wrap a Chakra component with framer-motion while keeping style props and motion props type-safe.
 */
export const motionChakra = <P extends object>(component: ComponentType<P>) =>
  chakra(motion(component), {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
