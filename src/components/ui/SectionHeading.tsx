import { memo } from 'react';
import { Box, Heading, HeadingProps, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface SectionHeadingProps extends HeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  withGradient?: boolean;
}

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const SectionHeading = memo(({ 
  title, 
  subtitle,
  align = 'center',
  withGradient = true,
  transition: _,
  onAnimationStart: __,
  onAnimationEnd: ___,
  onAnimationIteration: ____,
  onDragStart: ______,
  onDragEnd: ________,
  onDrag: _________,
  ...rest 
}: SectionHeadingProps) => {
  const textAlign = align;
  const subtitleColor = useColorModeValue('gray.600', 'gray.400');
  
  return (
    <Box mb={subtitle ? 6 : 10} textAlign={textAlign}>
      <MotionHeading
        as="h2"
        size="xl"
        mb={subtitle ? 2 : 0}
        bgGradient={withGradient ? 'linear(to-r, brand.500, accent.500)' : undefined}
        bgClip={withGradient ? 'text' : undefined}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
        {...rest}
      >
        {title}
      </MotionHeading>
      
      {subtitle && (
        <MotionText
          fontSize="lg"
          color={subtitleColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </MotionText>
      )}
    </Box>
  );
});

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;