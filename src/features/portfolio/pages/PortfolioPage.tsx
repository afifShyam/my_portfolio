import { memo } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from '../../../components/ProjectCard';
import { 
  Box, 
  Grid, 
  Heading, 
  Skeleton, 
  Container, 
  Text, 
  useColorModeValue,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FiCode } from 'react-icons/fi';
import { type Transition } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { motionChakra } from '../../../utils/motion';

// Motion components
const MotionBox = motionChakra(Box);
const MotionHeading = motionChakra(Heading);
const MotionGrid = motionChakra(Grid);

const PortfolioPage: React.FC = () => {
  const { projects, loading, error } = usePortfolio();
  
  // Dynamic colors based on color mode
  const sectionBg = useColorModeValue('neutral.50', 'neutral.800');
  const textColor = useColorModeValue('neutral.900', 'whiteAlpha.900');
  const subtitleColor = useColorModeValue('neutral.500', 'neutral.200');
  const skeletonStartColor = useColorModeValue('gray.100', 'whiteAlpha.200');
  const skeletonEndColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const iconAccentColor = useColorModeValue('brand.600', 'brand.300');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const errorBg = useColorModeValue('red.50', 'rgba(244, 63, 94, 0.12)');
  const errorColor = useColorModeValue('red.600', 'red.300');
  const gradientBg = useColorModeValue(
    'linear-gradient(135deg, #eef2ff 0%, #e0f2fe 30%, #fdf2f8 60%, #eff6ff 100%)',
    'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.18), transparent 35%), radial-gradient(circle at 80% 10%, rgba(45, 212, 191, 0.16), transparent 30%), linear-gradient(140deg, #0b1220 0%, #0f172a 35%, #0b132b 100%)'
  );
  const glassBg = useColorModeValue('rgba(255, 255, 255, 0.72)', 'rgba(17, 24, 39, 0.58)');
  const glassBorder = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.18)');
  const cardShadow = useColorModeValue('0 25px 70px rgba(99, 102, 241, 0.15)', '0 25px 70px rgba(15, 23, 42, 0.45)');
  const defaultTransition = (duration = 0.5, delay = 0): Transition => ({ duration, delay });

  return (
    <>
      <Helmet>
        <title>My Projects | Portfolio</title>
        <meta name="description" content="Browse my portfolio of web and mobile development projects" />
      </Helmet>
      
      <MotionBox
        minH="100vh"
        bg={sectionBg}
        bgImage={gradientBg}
        color={textColor}
        py={{ base: 16, md: 20 }}
        px={{ base: 4, md: 6 }}
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: defaultTransition() }}
      >
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          opacity={0.6}
          background={`radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.2), transparent 32%), radial-gradient(circle at 80% 40%, rgba(20, 184, 166, 0.18), transparent 35%)`}
          filter="blur(60px)"
        />
        <Box
          position="absolute"
          top="-80px"
          right="-120px"
          w="320px"
          h="320px"
          bg="linear-gradient(135deg, rgba(99, 102, 241, 0.28), rgba(20, 184, 166, 0.24))"
          filter="blur(70px)"
          borderRadius="full"
          opacity={0.7}
        />

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <MotionBox
            bg={glassBg}
            border="1px solid"
            borderColor={glassBorder}
            borderRadius="2xl"
            boxShadow={cardShadow}
            backdropFilter="blur(16px)"
            px={{ base: 5, md: 8 }}
            py={{ base: 6, md: 10 }}
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              inset: '-25%',
              bgGradient: 'linear(to-r, rgba(99, 102, 241, 0.18), rgba(20, 184, 166, 0.12))',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          >
          {/* Page Title */}
          <Flex justify="center" align="center" mb={6}>
            <Icon as={FiCode} mr={3} boxSize={6} color={iconAccentColor} />
            <MotionHeading 
              as="h2" 
              size="2xl" 
              fontWeight="extrabold" 
              textAlign="center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: defaultTransition(0.5, 0.2) }}
            >
              My Projects
            </MotionHeading>
          </Flex>
          
          {/* Subtitle */}
          <Text 
            textAlign="center" 
            fontSize="lg" 
            mb={12}
            color={subtitleColor}
            maxW="2xl"
            mx="auto"
          >
            A collection of my recent web and mobile development projects
            </Text>

            {error ? (
              // Error State
              <MotionBox 
              textAlign="center" 
              p={8} 
              bg={errorBg}
              color={errorColor}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={borderColor}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: defaultTransition(0.3) }}
            >
              <Text fontSize="lg">Failed to load projects. Please try again later.</Text>
            </MotionBox>
          ) : loading ? (
            // Skeleton Loading State
            <MotionGrid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={12}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: defaultTransition(0.3) }}
            >
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Skeleton
                  key={index}
                  height="350px"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor={borderColor}
                  startColor={skeletonStartColor}
                  endColor={skeletonEndColor}
                />
              ))}
            </MotionGrid>
          ) : (
            // Projects Grid
            <MotionGrid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={10}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: defaultTransition(0.5, 0.3) }}
            >
              {projects.map((project, index) => (
                <MotionBox
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: defaultTransition(0.5, 0.1 * (index % 3)) }}
                  whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } }}
                  _hover={{
                    filter: 'drop-shadow(0 15px 35px rgba(99, 102, 241, 0.22))',
                  }}
                >
                  <ProjectCard project={project} />
                </MotionBox>
              ))}
            </MotionGrid>
          )}
          </MotionBox>
        </Container>
      </MotionBox>
    </>
  );
};

export default memo(PortfolioPage);
