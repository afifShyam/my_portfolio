import React from 'react';
import { Box } from '@chakra-ui/react';

interface RollingLabelProps {
  children: string;
  className?: string;
}

/**
 * High-craft duplicate-label roll for interactive nav items & CTA buttons.
 * On hover or keyboard :focus-visible, the visible text slides up (-100%)
 * while a duplicate (aria-hidden) enters seamlessly from below (+100%).
 *
 * Scoped strictly to (hover: hover) so touch devices stay calm.
 * Fully suppressed under prefers-reduced-motion.
 */
export const RollingLabel: React.FC<RollingLabelProps> = ({ children, className }) => {
  return (
    <Box
      as="span"
      className={`rolling-label-root ${className ?? ''}`}
      display="inline-block"
      position="relative"
      overflow="hidden"
      lineHeight="1.15"
      verticalAlign="middle"
      sx={{
        '@media (hover: hover)': {
          '& .rolling-primary': {
            display: 'block',
            transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 180ms ease',
          },
          '& .rolling-clone': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'block',
            transform: 'translate3d(0, 100%, 0)',
            opacity: 0.85,
            transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 180ms ease',
          },
          '*:hover > &, *:focus-visible > &': {
            '& .rolling-primary': {
              transform: 'translate3d(0, -100%, 0)',
              opacity: 0,
            },
            '& .rolling-clone': {
              transform: 'translate3d(0, 0, 0)',
              opacity: 1,
            },
          },
        },
        '@media (prefers-reduced-motion: reduce)': {
          '& .rolling-primary': {
            transform: 'none !important',
            opacity: '1 !important',
            transition: 'none !important',
          },
          '& .rolling-clone': {
            display: 'none !important',
          },
        },
      }}
    >
      <Box as="span" className="rolling-primary">
        {children}
      </Box>
      <Box as="span" className="rolling-clone" aria-hidden="true">
        {children}
      </Box>
    </Box>
  );
};

export default RollingLabel;
