import { Box, Image, Heading, Text, Tag, Flex, Button, Icon, Link, Badge, HStack, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaGooglePlay, FaVideo, FaApple, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types/projectTypes';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const hasImage = !!project.image;
  const hasVideo = !!project.video;
  const hasGithub = !!project.githubLink;
  const hasPlayStore = !!project.playStoreLink;
  const hasAppStore = !!project.appStoreLink;
  const hasDemoUrl = !!project.demoUrl;
  
  // Define color variables
  const textColor = useColorModeValue('gray.800', 'white');
  const descriptionColor = useColorModeValue('gray.600', 'gray.300');

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
      {/* Project Category Badge */}
      <Badge
        position="absolute"
        top={3}
        right={3}
        colorScheme="blue"
        variant="solid"
        fontSize="xs"
        px={2}
        py={1}
        borderRadius="md"
        zIndex={1}
      >
        {project.category}
      </Badge>

      {/* Image or Placeholder */}
      {hasImage ? (
        <Box mb={6} position="relative" overflow="hidden" borderRadius="lg">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            objectFit="cover"
            w="full"
            h="12rem"
            bg="gray.800"
            transition="transform 0.5s ease"
            _hover={{ transform: 'scale(1.05)' }}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/assets/placeholder.png';
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
        >
          No Preview Available
        </Box>
      )}

      {/* Project Title */}
      <Heading size="md" mb={3} color={textColor} fontWeight="bold">
        {project.name}
      </Heading>

      {/* Project Description */}
      <Text color={descriptionColor} mb={4} fontSize="sm" flex="1">
        {project.description}
      </Text>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 ? (
        <Box mb={5}>
          <Text color={descriptionColor} fontSize="xs" mb={2} fontWeight="medium">
            Tech Stack:
          </Text>
          <Flex flexWrap="wrap" gap={2}>
            {project.techStack.map((tech) => (
              <Tag 
                key={tech} 
                size="sm" 
                colorScheme="blue" 
                variant="subtle"
                borderRadius="full"
              >
                {tech}
              </Tag>
            ))}
          </Flex>
        </Box>
      ) : (
        <Text color="gray.500" fontSize="sm">
          No tech stack listed
        </Text>
      )}

      {/* Links */}
      <HStack spacing={4} mt={4} justifyContent="flex-start">
        {hasGithub && (
          <Link 
            href={project.githubLink} 
            isExternal
            aria-label="GitHub Repository"
          >
            <Button 
              leftIcon={<Icon as={FaGithub} />} 
              size="sm" 
              variant="outline" 
              colorScheme="blue"
              fontSize="xs"
            >
              Code
            </Button>
          </Link>
        )}
        
        {hasDemoUrl && (
          <Link 
            href={project.demoUrl} 
            isExternal
            aria-label="Live Demo"
          >
            <Button 
              leftIcon={<Icon as={FaExternalLinkAlt} />} 
              size="sm" 
              colorScheme="blue"
              fontSize="xs"
            >
              Demo
            </Button>
          </Link>
        )}
        
        {hasVideo && (
          <Link 
            href={project.video} 
            isExternal
            aria-label="Video Demo"
          >
            <Button 
              leftIcon={<Icon as={FaVideo} />} 
              size="sm" 
              variant="ghost" 
              colorScheme="blue"
              fontSize="xs"
            >
              Video
            </Button>
          </Link>
        )}
      </HStack>
      
      {/* Mobile App Links */}
      {(hasPlayStore || hasAppStore) && (
        <HStack spacing={4} mt={3} justifyContent="flex-start">
          {hasPlayStore && (
            <Link 
              href={project.playStoreLink} 
              isExternal
              aria-label="Google Play Store"
            >
              <Button 
                leftIcon={<Icon as={FaGooglePlay} />} 
                size="sm" 
                variant="outline" 
                colorScheme="green"
                fontSize="xs"
              >
                Play Store
              </Button>
            </Link>
          )}
          
          {hasAppStore && (
            <Link 
              href={project.appStoreLink} 
              isExternal
              aria-label="Apple App Store"
            >
              <Button 
                leftIcon={<Icon as={FaApple} />} 
                size="sm" 
                variant="outline" 
                colorScheme="gray"
                fontSize="xs"
              >
                App Store
              </Button>
            </Link>
          )}
        </HStack>
      )}
    </Box>
  );
};

export default ProjectCard;
