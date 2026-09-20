import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

interface MaskedTextRevealProps {
  lines: string[];
  accentLineIndex?: number;
  accessibleHeading: string;
}

/**
 * Editorial Staggered Line Masked Reveal.
 *
 * Each line sits inside an `overflow: hidden` baseline container.
 * On mount, lines slide upward with staggered delays and spring easing.
 *
 * Screen reader & HTML phrasing validity:
 * - Rendered strictly as phrasing content (`as="span"`) to avoid invalid <div> inside <h1>.
 * - Semantic heading receives the full static text via visually-hidden span.
 * - Visual animated lines are marked `aria-hidden="true"`.
 * - Immediately resolved without motion under `prefers-reduced-motion`.
 */
export const MaskedTextReveal: React.FC<MaskedTextRevealProps> = ({
  lines,
  accentLineIndex = -1,
  accessibleHeading,
}) => {
  const [revealed, setRevealed] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (revealed) return;
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 60);

    return () => clearTimeout(timer);
  }, [revealed]);

  return (
    <Box as="span" display="block" position="relative">
      <Box
        as="span"
        position="absolute"
        w="1px"
        h="1px"
        p={0}
        m="-1px"
        overflow="hidden"
        clipPath="inset(50%)"
        whiteSpace="nowrap"
        border={0}
      >
        {accessibleHeading}
      </Box>

      {/* Visual Staggered Lines */}
      <Box as="span" display="block" aria-hidden="true">
        {lines.map((line, idx) => (
          <Box as="span" key={line} overflow="hidden" display="block" lineHeight="0.82" py="1px">
            <Box
              as="span"
              display="block"
              color={idx === accentLineIndex ? 'accent' : 'text.primary'}
              style={{
                transform: revealed ? 'translate3d(0, 0, 0)' : 'translate3d(0, 108%, 0)',
                opacity: revealed ? 1 : 0.05,
                transition: `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 90}ms, opacity 500ms ease ${idx * 90}ms`,
                willChange: 'transform, opacity',
              }}
            >
              {line}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MaskedTextReveal;
