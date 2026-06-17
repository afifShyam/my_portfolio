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
  const sectionBg = useColorModeValue(
    'linear-gradient(180deg, #eefbf8 0%, #fff8fa 100%)',
    'linear-gradient(180deg, #102622 0%, #241526 100%)'
  );
  const textColor = useColorModeValue('neutral.900', 'whiteAlpha.900');
  const subtitleColor = useColorModeValue('neutral.500', 'neutral.200');
  const skeletonStartColor = useColorModeValue('gray.100', 'whiteAlpha.200');
  const skeletonEndColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const iconAccentColor = useColorModeValue('brand.600', 'brand.300');
  const borderColor = useColorModeValue('rgba(159, 184, 181, 0.45)', 'whiteAlpha.200');
  const errorBg = useColorModeValue('red.50', 'rgba(244, 63, 94, 0.12)');
  const errorColor = useColorModeValue('red.600', 'red.300');
  const panelBg = useColorModeValue('rgba(255, 255, 255, 0.82)', 'rgba(20, 41, 39, 0.82)');
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
        color={textColor}
        py={{ base: 16, md: 24 }}
        px={{ base: 4, md: 6 }}
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: defaultTransition() }}
      >
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <MotionBox
            bg={panelBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="lg"
            boxShadow={useColorModeValue('0 24px 60px rgba(20, 104, 95, 0.1)', '0 24px 60px rgba(0, 0, 0, 0.24)')}
            backdropFilter="blur(18px)"
            px={{ base: 5, md: 8 }}
            py={{ base: 6, md: 10 }}
            position="relative"
            overflow="hidden"
          >
          {/* Page Title */}
          <Flex justify="center" align="center" mb={6}>
            <Icon as={FiCode} mr={3} boxSize={6} color={iconAccentColor} />
            <MotionHeading 
              as="h2" 
              size="2xl" 
              fontWeight="extrabold" 
              textAlign="center"
              letterSpacing="normal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: defaultTransition(0.5, 0.2) }}
            >
              Selected Work
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
            Resume-backed work across fintech, e-commerce, health, machine learning, and Android architecture.
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
