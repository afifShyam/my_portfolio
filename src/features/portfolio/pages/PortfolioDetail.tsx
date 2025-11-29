import type { SyntheticEvent } from 'react';
import { Box, Image, Heading, Text, Tag, Flex, Button, Icon, Link, useColorModeValue, Divider, VStack, HStack, Badge } from '@chakra-ui/react';
import { FaGithub, FaGooglePlay, FaVideo, FaApple } from 'react-icons/fa';
import { Project } from '../../../types/projectTypes';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const primaryImage = project.image ?? project.images?.[0];
  const normalizedImage =
    typeof primaryImage === 'string'
      ? { src: primaryImage }
      : primaryImage;
  const hasImage = !!normalizedImage?.src;
  const hasVideo = !!project.video;
  const hasGithub = !!project.githubLink;
  const hasPlayStore = !!project.playStoreLink;
  const hasAppStore = !!project.appStoreLink;
  const surfaceColor = useColorModeValue('white', 'rgba(15, 23, 42, 0.9)');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const descriptionColor = useColorModeValue('neutral.500', 'neutral.200');
  const badgeBg = useColorModeValue('brand.50', 'whiteAlpha.200');
  const badgeColor = useColorModeValue('brand.600', 'brand.200');

  return (
    <Box
      bg={surfaceColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      p={{ base: 6, md: 8 }}
    >
      <VStack align="stretch" spacing={5}>
        {/* Image or Placeholder */}
        {hasImage ? (
          <Box borderRadius="lg" overflow="hidden">
            <Image
              src={normalizedImage?.src}
              srcSet={normalizedImage?.srcSet}
              sizes={normalizedImage?.sizes}
              alt={normalizedImage?.alt ?? `${project.name} preview`}
              loading="lazy"
              decoding="async"
              objectFit="cover"
              w="full"
              h="12rem"
              onError={(event: SyntheticEvent<HTMLImageElement>) => {
                const target = event.currentTarget;
                target.onerror = null;
                target.srcset = '';
                target.src = '/assets/placeholder.png';
              }}
            />
          </Box>
        ) : (
          <Box
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
            w="full"
            h="12rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Text color={descriptionColor}>No preview available</Text>
          </Box>
        )}

        <Badge
          alignSelf="flex-start"
          bg={badgeBg}
          color={badgeColor}
          px={3}
          py={1}
          borderRadius="full"
          fontWeight="medium"
        >
          {project.category}
        </Badge>

        {/* Project Name */}
        <Heading as="h3" size="lg">
          {project.name}
        </Heading>

        {/* Project Description */}
        <Text color={descriptionColor}>{project.description}</Text>

        <Divider borderColor={borderColor} />

        {/* Tech Stack */}
        <VStack align="flex-start" spacing={3}>
          <Text fontSize="sm" fontWeight="semibold" color={badgeColor} textTransform="uppercase">
            Tech stack
          </Text>
          <Flex wrap="wrap" gap={2}>
            {project.techStack?.length ? (
              project.techStack.map((tech) => (
                <Tag key={tech} size="sm" borderRadius="md" borderWidth="1px" borderColor={borderColor}>
                  {tech}
                </Tag>
              ))
            ) : (
              <Text color={descriptionColor} fontSize="sm">
                No tech stack listed
              </Text>
            )}
          </Flex>
        </VStack>

        {/* Actions: GitHub, Play Store, App Store, Video Demo */}
        <HStack spacing={3} pt={2} justifyContent="flex-start" flexWrap="wrap">
          {hasGithub && (
            <Link href={project.githubLink} isExternal aria-label="GitHub Repository">
              <Button leftIcon={<Icon as={FaGithub} />} variant="outline" colorScheme="brand" size="sm">
                GitHub
              </Button>
            </Link>
          )}

          {hasPlayStore && (
            <Link href={project.playStoreLink} isExternal aria-label="Play Store Link">
              <Button leftIcon={<Icon as={FaGooglePlay} />} colorScheme="green" variant="solid" size="sm">
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

          {hasVideo && (
            <Link href={project.video} isExternal aria-label="Watch Demo Video">
              <Button leftIcon={<Icon as={FaVideo} />} colorScheme="red" variant="solid" size="sm">
                Watch Demo
              </Button>
            </Link>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
