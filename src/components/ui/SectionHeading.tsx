import { memo } from 'react';
import { Box, Heading, HeadingProps, Text, useColorModeValue } from '@chakra-ui/react';
import { type Transition } from 'framer-motion';
import { motionChakra } from '../../utils/motion';

interface SectionHeadingProps extends HeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  withGradient?: boolean;
}

const MotionHeading = motionChakra(Heading);
const MotionText = motionChakra(Text);
const MotionBox = motionChakra(Box);

const SectionHeading = memo(({
  title,
  subtitle,
  align = 'center',
  withGradient = true,
  ...rest
}: SectionHeadingProps) => {
  const textAlign = align;
  const subtitleColor = useColorModeValue('gray.600', 'gray.300');
  const glassBg = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(15, 23, 42, 0.55)');
  const glassBorder = useColorModeValue('rgba(255, 255, 255, 0.65)', 'rgba(255, 255, 255, 0.14)');
  const accentGlow = useColorModeValue('rgba(99, 102, 241, 0.38)', 'rgba(99, 102, 241, 0.24)');
  const headingTransition: Transition = { duration: 0.6, ease: 'easeOut' };
  const subtitleTransition: Transition = { duration: 0.6, delay: 0.15, ease: 'easeOut' };
  const shimmerTransition: Transition = { duration: 6, repeat: Infinity, ease: 'linear' };
  
  return (
    <Box position="relative" mb={subtitle ? 8 : 12} textAlign={textAlign}>
      <MotionBox
        position="relative"
        px={{ base: 4, md: 6 }}
        py={{ base: 4, md: 6 }}
        borderRadius="2xl"
        bg={glassBg}
        border="1px solid"
        borderColor={glassBorder}
        backdropFilter="blur(16px)"
        boxShadow="0 25px 80px rgba(0, 0, 0, 0.12)"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          inset: '-30%',
          bg: `radial-gradient(circle at 30% 20%, ${accentGlow} 0, transparent 45%)`,
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      >
        <MotionBox
          position="absolute"
          inset="0"
          bgGradient="linear(to-r, brand.500, accent.500, brand.400, accent.400)"
          opacity={withGradient ? 0.18 : 0.08}
          backgroundSize="300% 300%"
          zIndex={0}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], transition: shimmerTransition }}
        />

        <MotionHeading
          as="h2"
          size="2xl"
          mb={subtitle ? 3 : 0}
          position="relative"
          zIndex={1}
          bgGradient={withGradient ? 'linear(to-r, brand.500, accent.400, brand.300)' : undefined}
          bgClip={withGradient ? 'text' : undefined}
          letterSpacing="-0.02em"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: headingTransition }}
          {...rest}
        >
          {title}
        </MotionHeading>
        
        {subtitle && (
          <MotionText
            fontSize={{ base: 'md', md: 'lg' }}
            color={subtitleColor}
            position="relative"
            zIndex={1}
            maxW="3xl"
            mx="auto"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: subtitleTransition }}
          >
            {subtitle}
          </MotionText>
        )}
      </MotionBox>
    </Box>
  );
});

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;
