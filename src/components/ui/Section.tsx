import { ReactNode } from 'react';
import { Box, BoxProps, Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface SectionProps extends BoxProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  delay?: number;
}

const MotionBox = motion(Box);

const Section = ({ 
  children, 
  title, 
  subtitle,
  id, 
  delay = 0.2,
  // Extract conflicting props
  transition: _,
  onAnimationStart: __,
  onAnimationEnd: ___,
  onAnimationIteration: ____,
  onDragStart: ______,
  onDragEnd: ________,
  onDrag: _________,
  ...rest 
}: SectionProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <MotionBox
      as="section"
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      mb={16}
      px={{ base: 4, md: 8 }}
      py={8}
      borderRadius="xl"
      boxShadow="md"
      bg={bgColor}
      borderColor={borderColor}
      borderWidth="1px"
      {...rest}
    >
      {title && (
        <Heading 
          as="h2" 
          size="xl" 
          mb={subtitle ? 2 : 6}
          textAlign="center"
          bgGradient="linear(to-r, brand.500, accent.500)"
          bgClip="text"
        >
          {title}
        </Heading>
      )}
      
      {subtitle && (
        <Heading 
          as="h3" 
          size="md" 
          mb={6} 
          textAlign="center"
          fontWeight="normal"
          opacity={0.8}
        >
          {subtitle}
        </Heading>
      )}
      
      {children}
    </MotionBox>
  );
};

Section.displayName = 'Section';

export default Section;