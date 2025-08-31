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
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionGrid = motion(Grid);

const PortfolioPage: React.FC = () => {
  const { projects, loading, error } = usePortfolio();
  
  // Dynamic colors based on color mode
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, gray.100)', 
    'linear(to-br, #0a192f, #15314b)'
  );
  const textColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', '#112240');
  const skeletonStartColor = useColorModeValue('gray.100', '#112240');
  const skeletonEndColor = useColorModeValue('gray.300', '#1c2e4a');

  return (
    <>
      <Helmet>
        <title>My Projects | Portfolio</title>
        <meta name="description" content="Browse my portfolio of web and mobile development projects" />
      </Helmet>
      
      <MotionBox 
        minH="100vh" 
        bgGradient={bgGradient} 
        color={textColor} 
        py={20} 
        px={6}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxW="container.xl">
          {/* Page Title */}
          <Flex justify="center" align="center" mb={4}>
            <Icon as={FiCode} mr={3} boxSize={6} color={useColorModeValue('blue.500', 'blue.300')} />
            <MotionHeading 
              as="h2" 
              size="2xl" 
              fontWeight="extrabold" 
              textAlign="center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My Projects
            </MotionHeading>
          </Flex>
          
          {/* Subtitle */}
          <Text 
            textAlign="center" 
            fontSize="lg" 
            mb={16} 
            color={useColorModeValue('gray.600', 'gray.300')}
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
              bg={useColorModeValue('red.50', 'rgba(200, 30, 30, 0.1)')}
              color={useColorModeValue('red.500', 'red.300')}
              borderRadius="xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Text fontSize="lg">Failed to load projects. Please try again later.</Text>
            </MotionBox>
          ) : loading ? (
            // Skeleton Loading State
            <MotionGrid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={12}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Skeleton
                  key={index}
                  height="350px"
                  borderRadius="xl"
                  startColor={skeletonStartColor}
                  endColor={skeletonEndColor}
                />
              ))}
            </MotionGrid>
          ) : (
            // Projects Grid
            <MotionGrid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={12}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {projects.map((project, index) => (
                <MotionBox
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                >
                  <ProjectCard project={project} />
                </MotionBox>
              ))}
            </MotionGrid>
          )}
        </Container>
      </MotionBox>
    </>
  );
};

export default memo(PortfolioPage);
