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
  const headingTransition: Transition = { duration: 0.6, ease: 'easeOut' };
  const subtitleTransition: Transition = { duration: 0.6, delay: 0.15, ease: 'easeOut' };
  const lineBg = useColorModeValue(
    'linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)',
    'linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)'
  );
  
  return (
    <Box
      position="relative"
      mb={subtitle ? 8 : 12}
      textAlign={textAlign}
      maxW={align === 'center' ? '4xl' : 'full'}
      mx={align === 'center' ? 'auto' : 0}
    >
      <MotionBox
        position="relative"
        px={0}
        py={0}
        overflow="hidden"
      >
        <MotionBox
          h="4px"
          w={align === 'center' ? '72px' : '56px'}
          borderRadius="full"
          bg={lineBg}
          mx={align === 'center' ? 'auto' : 0}
          mb={4}
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1, transition: headingTransition }}
          style={{ transformOrigin: 'left center' }}
        />

        <MotionHeading
          as="h2"
          size={{ base: 'xl', md: '3xl' }}
          mb={subtitle ? 4 : 0}
          position="relative"
          zIndex={1}
          bgGradient={withGradient ? 'linear(to-r, brand.500, accent.400, brand.300)' : undefined}
          bgClip={withGradient ? 'text' : undefined}
          letterSpacing="-0.02em"
          lineHeight="1.1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: headingTransition }}
          {...rest}
        >
          {title}
        </MotionHeading>
        
        {subtitle && (
          <MotionText
            fontSize={{ base: 'md', md: 'xl' }}
            color={subtitleColor}
            position="relative"
            zIndex={1}
            maxW="3xl"
            mx={align === 'center' ? 'auto' : 0}
            textAlign={textAlign}
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
