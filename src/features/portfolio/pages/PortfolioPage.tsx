import { memo, useState, useMemo } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from '../../../components/ProjectCard';
import ProjectDetailModal from '../../../components/ProjectDetailModal';
import { Project } from '../../../types/projectTypes';
import {
  Box,
  Grid,
  Skeleton,
  Container,
  Text,
  useColorModeValue,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { FiSearch, FiLayers, FiCheck } from 'react-icons/fi';
import { type Transition } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { motionChakra } from '../../../utils/motion';
import SectionHeading from '../../../components/ui/SectionHeading';

// Motion components
const MotionBox = motionChakra(Box);
const MotionGrid = motionChakra(Grid);

const CATEGORIES = ['All', 'Fintech', 'E-commerce', 'Health', 'Machine Learning'];

const PortfolioPage: React.FC = () => {
  const { projects, loading, error } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Dynamic colors based on color mode
  const sectionBg = useColorModeValue(
    'linear-gradient(180deg, #f8fafc 0%, #eef6ff 100%)',
    'linear-gradient(180deg, #090d16 0%, #0f172a 100%)'
  );
  const textColor = useColorModeValue('neutral.900', 'whiteAlpha.900');
  const skeletonStartColor = useColorModeValue('gray.100', 'whiteAlpha.200');
  const skeletonEndColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const errorBg = useColorModeValue('red.50', 'rgba(244, 63, 94, 0.12)');
  const errorColor = useColorModeValue('red.600', 'red.300');
  const panelBg = useColorModeValue('rgba(255, 255, 255, 0.88)', 'rgba(15, 23, 42, 0.82)');
  const inputBg = useColorModeValue('white', 'rgba(15, 23, 42, 0.6)');
  const activeTabBg = useColorModeValue('brand.600', 'cyan.500');
  const activeTabColor = 'white';
  const inactiveTabBg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const inactiveTabHoverBg = useColorModeValue('gray.200', 'whiteAlpha.200');
  const emptyStateBg = useColorModeValue('gray.50', 'whiteAlpha.50');

  const defaultTransition = (duration = 0.5, delay = 0): Transition => ({ duration, delay });

  // Filter projects based on category & search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack?.some((t) => t.toLowerCase().includes(query)) ||
        project.features?.some((f) => f.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>My Projects | Afif Shyamsul Portfolio</title>
        <meta name="description" content="Browse my mobile application development projects built with Flutter, Dart, Firebase, Riverpod, and BLoC." />
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
            borderRadius="2xl"
            boxShadow={useColorModeValue('0 24px 60px rgba(15, 23, 42, 0.08)', '0 24px 60px rgba(0, 0, 0, 0.35)')}
            backdropFilter="blur(18px)"
            px={{ base: 5, md: 8 }}
            py={{ base: 6, md: 10 }}
            position="relative"
            overflow="hidden"
          >
            {/* Header */}
            <Box mb={8}>
              <SectionHeading
                title="Featured Projects Showcase"
                subtitle="High-impact Flutter mobile applications spanning fintech, e-commerce, healthcare, and machine learning."
                align="left"
              />
            </Box>

            {/* Category Filter & Search Bar Controls */}
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align={{ base: 'stretch', md: 'center' }}
              gap={4}
              mb={10}
            >
              {/* Filter Pills */}
              <Flex wrap="wrap" gap={2}>
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <Button
                      key={cat}
                      size="sm"
                      borderRadius="full"
                      px={4}
                      py={1.5}
                      bg={isActive ? activeTabBg : inactiveTabBg}
                      color={isActive ? activeTabColor : textColor}
                      _hover={{
                        bg: isActive ? activeTabBg : inactiveTabHoverBg,
                        transform: 'translateY(-1px)',
                      }}
                      onClick={() => setSelectedCategory(cat)}
                      leftIcon={isActive ? <Icon as={FiCheck} /> : undefined}
                      fontWeight="semibold"
                      transition="all 0.2s ease"
                    >
                      {cat}
                    </Button>
                  );
                })}
              </Flex>

              {/* Search Bar */}
              <InputGroup maxW={{ base: 'full', md: '300px' }}>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search project or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg={inputBg}
                  borderRadius="full"
                  fontSize="sm"
                  borderColor={borderColor}
                  _focus={{
                    borderColor: 'cyan.400',
                    boxShadow: '0 0 0 1px cyan.400',
                  }}
                />
              </InputGroup>
            </Flex>

            {/* Results count pill */}
            <HStack mb={6} spacing={2}>
              <Icon as={FiLayers} color="cyan.400" />
              <Text fontSize="sm" color="gray.400">
                Showing{' '}
                <Text as="span" fontWeight="bold" color={textColor}>
                  {filteredProjects.length}
                </Text>{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'}
              </Text>
              {selectedCategory !== 'All' && (
                <Badge colorScheme="cyan" borderRadius="full" px={2} py={0.5}>
                  Category: {selectedCategory}
                </Badge>
              )}
              {searchQuery && (
                <Badge colorScheme="purple" borderRadius="full" px={2} py={0.5}>
                  Search: "{searchQuery}"
                </Badge>
              )}
            </HStack>

            {error ? (
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
              <MotionGrid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={8}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: defaultTransition(0.3) }}
              >
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <Skeleton
                    key={index}
                    height="380px"
                    borderRadius="2xl"
                    borderWidth="1px"
                    borderColor={borderColor}
                    startColor={skeletonStartColor}
                    endColor={skeletonEndColor}
                  />
                ))}
              </MotionGrid>
            ) : filteredProjects.length === 0 ? (
              <Box textAlign="center" py={12} bg={emptyStateBg} borderRadius="2xl">
                <Text fontSize="lg" fontWeight="semibold" mb={2}>
                  No projects match your filter.
                </Text>
                <Text fontSize="sm" color="gray.400" mb={4}>
                  Try clearing your search query or selecting a different category.
                </Text>
                <Button
                  size="sm"
                  colorScheme="brand"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </Button>
              </Box>
            ) : (
              <MotionGrid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={8}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: defaultTransition(0.5, 0.2) }}
              >
                {filteredProjects.map((project, index) => (
                  <MotionBox
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: defaultTransition(0.4, 0.08 * (index % 3)) }}
                  >
                    <ProjectCard project={project} onSelectProject={(p) => setActiveProjectModal(p)} />
                  </MotionBox>
                ))}
              </MotionGrid>
            )}
          </MotionBox>
        </Container>
      </MotionBox>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProjectModal}
        isOpen={Boolean(activeProjectModal)}
        onClose={() => setActiveProjectModal(null)}
      />
    </>
  );
};

export default memo(PortfolioPage);

