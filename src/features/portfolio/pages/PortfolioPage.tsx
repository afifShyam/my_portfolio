import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from '../../../components/ProjectCard';
import { Box, Grid, Heading, Skeleton } from '@chakra-ui/react';

const PortfolioPage: React.FC = () => {
  const { projects, loading } = usePortfolio();

  return (
    <Box minH="100vh" bgGradient="linear(to-br, #0a192f, #15314b)" color="white" py={20} px={6}>
      {/* Page Title */}
      <Heading as="h2" size="2xl" fontWeight="extrabold" textAlign="center" mb={16}>
        My Projects
      </Heading>

      {loading ? (
        // Skeleton Loading State
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={12}
        >
          {[1, 2, 3].map((_, index) => (
            <Skeleton
              key={index}
              height="200px"
              borderRadius="xl"
              startColor="#112240"
              endColor="#1c2e4a"
            />
          ))}
        </Grid>
      ) : (
        // Projects Grid
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={12}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default PortfolioPage;
