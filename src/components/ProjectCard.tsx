import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Tag,
  Flex,
  Button,
  Icon,
  IconButton,
  Link,
  Badge,
  HStack,
  useColorModeValue,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { FaGithub, FaGooglePlay, FaVideo, FaApple, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Project } from '../types/projectTypes';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imageSources =
    project.images ?? (project.image ? [project.image] : []);
  const images = imageSources
    .map((source) =>
      typeof source === 'string' ? { src: source } : source
    )
    .filter((img) => Boolean(img?.src));
  const [currentImage, setCurrentImage] = useState(0);
  const hasVideo = !!project.video;
  const hasGithub = !!project.githubLink;
  const hasPlayStore = !!project.playStoreLink;
  const hasAppStore = !!project.appStoreLink;
  const hasDemoUrl = !!project.demoUrl;
  const containerBg = useColorModeValue('white', 'rgba(15, 23, 42, 0.9)');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const textColor = useColorModeValue('neutral.900', 'white');
  const descriptionColor = useColorModeValue('neutral.500', 'neutral.200');
  const badgeBg = useColorModeValue('brand.50', 'whiteAlpha.200');
  const badgeColor = useColorModeValue('brand.600', 'brand.200');
  const tagColor = useColorModeValue('neutral.600', 'neutral.200');
  const tagBorder = useColorModeValue('gray.200', 'whiteAlpha.200');
  const dividerColor = useColorModeValue('gray.100', 'whiteAlpha.200');
  const carouselBg = useColorModeValue('whiteAlpha.900', 'blackAlpha.600');
  const carouselShadow = useColorModeValue('md', 'dark-lg');
  const hasCarousel = images.length > 1;
  const activeImage = images[currentImage];

  const goToPrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      bg={containerBg}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      p={6}
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      boxShadow="sm"
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }}
      h="100%"
      display="flex"
      flexDirection="column"
    >
      <VStack align="stretch" spacing={5} h="100%">
        <Flex justify="space-between" align="flex-start">
          <Badge
            bg={badgeBg}
            color={badgeColor}
            px={3}
            py={1}
            borderRadius="full"
            fontWeight="medium"
          >
            {project.category}
          </Badge>
          {project.techStack?.length ? (
            <Text fontSize="sm" color={descriptionColor}>
              {project.techStack.slice(0, 2).join(' · ')}
              {project.techStack.length > 2 ? ' +' : ''}
            </Text>
          ) : null}
        </Flex>

        {/* Image or Placeholder */}
        {images.length ? (
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="lg"
            minH={{ base: '8rem', md: '9rem' }}
            aspectRatio={{ base: 3 / 4, md: 4 / 5 }}
            bg={useColorModeValue('gray.50', 'whiteAlpha.50')}
          >
            <Image
              src={activeImage?.src}
              srcSet={activeImage?.srcSet}
              sizes={activeImage?.sizes}
              alt={activeImage?.alt ?? `${project.name} preview`}
              loading="lazy"
              decoding="async"
              objectFit="cover"
              w="full"
              h="100%"
              transition="transform 0.4s ease"
              onError={(event: SyntheticEvent<HTMLImageElement>) => {
                const target = event.currentTarget;
                target.onerror = null;
                target.srcset = '';
                target.src = '/assets/placeholder.png';
              }}
            />

            {hasCarousel && (
              <>
                <IconButton
                  aria-label="Previous image"
                  icon={<FaChevronLeft />}
                  size="sm"
                  variant="ghost"
                  position="absolute"
                  top="50%"
                  left={2}
                  transform="translateY(-50%)"
                  onClick={goToPrev}
                  bg={carouselBg}
                  boxShadow={carouselShadow}
                  _hover={{ bg: carouselBg }}
                />
                <IconButton
                  aria-label="Next image"
                  icon={<FaChevronRight />}
                  size="sm"
                  variant="ghost"
                  position="absolute"
                  top="50%"
                  right={2}
                  transform="translateY(-50%)"
                  onClick={goToNext}
                  bg={carouselBg}
                  boxShadow={carouselShadow}
                  _hover={{ bg: carouselBg }}
                />
                <HStack
                  spacing={1}
                  position="absolute"
                  bottom={2}
                  left="50%"
                  transform="translateX(-50%)"
                  bg={carouselBg}
                  borderRadius="full"
                  px={3}
                  py={1}
                  boxShadow={carouselShadow}
                >
                  {images.map((_, idx) => (
                    <Box
                      key={idx}
                      w={idx === currentImage ? 2 : 1.5}
                      h={idx === currentImage ? 2 : 1.5}
                      borderRadius="full"
                      bg={idx === currentImage ? badgeColor : tagBorder}
                    />
                  ))}
                </HStack>
              </>
            )}
          </Box>
        ) : (
          <Box
            borderRadius="lg"
            minH={{ base: '9.5rem', md: '10.5rem' }}
            borderWidth="1px"
            borderColor={tagBorder}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="sm" color={descriptionColor}>
              No preview available
            </Text>
          </Box>
        )}

        {/* Project Title */}
        <Heading size="md" color={textColor} fontWeight="semibold">
          {project.name}
        </Heading>

        {/* Project Description */}
        <Text color={descriptionColor} fontSize="sm">
          {project.description}
        </Text>

        <Divider borderColor={dividerColor} />

        {/* Tech Stack */}
        <Box>
          <Text
            color={descriptionColor}
            fontSize="xs"
            mb={2}
            fontWeight="medium"
            textTransform="uppercase"
          >
            Tech Stack:
          </Text>
          {project.techStack && project.techStack.length > 0 ? (
            <Flex flexWrap="wrap" gap={2}>
              {project.techStack.map((tech) => (
                <Tag
                  key={tech}
                  size="sm"
                  borderRadius="md"
                  px={2}
                  py={1}
                  borderWidth="1px"
                  borderColor={tagBorder}
                  bg="transparent"
                  color={tagColor}
                >
                  {tech}
                </Tag>
              ))}
            </Flex>
          ) : (
            <Text color="gray.500" fontSize="sm">
              No tech stack listed
            </Text>
          )}
        </Box>

        <Box flex="1" />

        {/* Links */}
        <HStack spacing={3} justifyContent="flex-start" flexWrap="wrap">
          {hasGithub && (
            <Link href={project.githubLink} isExternal aria-label="GitHub Repository">
              <Button leftIcon={<Icon as={FaGithub} />} size="sm" variant="outline" colorScheme="brand" fontSize="xs">
                Code
              </Button>
            </Link>
          )}

          {hasDemoUrl && (
            <Link href={project.demoUrl} isExternal aria-label="Live Demo">
              <Button leftIcon={<Icon as={FaExternalLinkAlt} />} size="sm" colorScheme="brand" fontSize="xs">
                Demo
              </Button>
            </Link>
          )}

          {hasVideo && (
            <Link href={project.video} isExternal aria-label="Video Demo">
              <Button leftIcon={<Icon as={FaVideo} />} size="sm" variant="ghost" colorScheme="brand" fontSize="xs">
                Video
              </Button>
            </Link>
          )}
        </HStack>

        {/* Mobile App Links */}
        {(hasPlayStore || hasAppStore) && (
          <HStack spacing={3} mt={2} justifyContent="flex-start" flexWrap="wrap">
            {hasPlayStore && (
              <Link href={project.playStoreLink} isExternal aria-label="Google Play Store">
                <Button leftIcon={<Icon as={FaGooglePlay} />} size="sm" variant="outline" colorScheme="green" fontSize="xs">
                  Play Store
                </Button>
              </Link>
            )}

            {hasAppStore && (
              <Link href={project.appStoreLink} isExternal aria-label="Apple App Store">
                <Button leftIcon={<Icon as={FaApple} />} size="sm" variant="outline" colorScheme="gray" fontSize="xs">
                  App Store
                </Button>
              </Link>
            )}
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default ProjectCard;
