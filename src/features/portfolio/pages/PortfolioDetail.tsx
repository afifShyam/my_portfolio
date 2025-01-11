import { Box, Image, Heading, Text, Tag, Flex, Button, Icon, Link } from '@chakra-ui/react';
import { FaGithub, FaGooglePlay, FaVideo, FaApple } from 'react-icons/fa';
import { Project } from '../../../types/projectTypes';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const hasImage = !!project.image;
  const hasVideo = !!project.video;
  const hasGithub = !!project.githubLink;
  const hasPlayStore = !!project.playStoreLink;
  const hasAppStore = !!project.appStoreLink;

  return (
    <Box
      bg="#112240"
      p={6}
      borderRadius="lg"
      shadow="lg"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.03)',
        shadow: '2xl',
      }}
      cursor="pointer"
    >
      {/* Image or Placeholder */}
      {hasImage ? (
        <Box mb={6}>
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            borderRadius="lg"
            objectFit="cover"
            w="full"
            h="12rem"
            bg="gray.800"
            onError={(e: any) => {
              e.target.src = '/assets/placeholder.png';
            }}
          />
        </Box>
      ) : (
        <Box
          bg="gray.700"
          color="whiteAlpha.700"
          borderRadius="lg"
          w="full"
          h="12rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={6}
          textAlign="center"
        >
          <Text>No Preview Available</Text>
        </Box>
      )}

      {/* Project Name */}
      <Heading as="h3" size="lg" mb={4}>
        {project.name}
      </Heading>

      {/* Project Description */}
      <Text color="gray.400" mb={4}>
        {project.description}
      </Text>

      {/* Tech Stack */}
      <Flex wrap="wrap" gap={2} mt={4}>
        {project.techStack?.length ? (
          project.techStack.map((tech) => (
            <Tag key={tech} bg="blue.600" color="white" size="sm" borderRadius="md">
              {tech}
            </Tag>
          ))
        ) : (
          <Text color="gray.500" fontSize="sm">
            No tech stack listed
          </Text>
        )}
      </Flex>

      {/* Actions: GitHub, Play Store, App Store, Video Demo */}
      <Flex justifyContent="space-between" alignItems="center" mt={6}>
        <Flex gap={4}>
          {hasGithub && (
            <Link href={project.githubLink} isExternal aria-label="GitHub Repository">
              <Button
                leftIcon={<Icon as={FaGithub} />}
                colorScheme="blue"
                variant="outline"
                size="sm"
              >
                GitHub
              </Button>
            </Link>
          )}

          {hasPlayStore && (
            <Link href={project.playStoreLink} isExternal aria-label="Play Store Link">
              <Button
                leftIcon={<Icon as={FaGooglePlay} />}
                colorScheme="green"
                variant="solid"
                size="sm"
              >
                Play Store
              </Button>
            </Link>
          )}

          {hasAppStore && (
            <Link href={project.appStoreLink} isExternal aria-label="App Store Link">
              <Button leftIcon={<Icon as={FaApple} />} colorScheme="gray" variant="solid" size="sm">
                App Store
              </Button>
            </Link>
          )}
        </Flex>

        {hasVideo && (
          <Link href={project.video} isExternal aria-label="Watch Demo Video">
            <Button leftIcon={<Icon as={FaVideo} />} colorScheme="red" variant="solid" size="sm">
              Watch Demo
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default ProjectCard;
