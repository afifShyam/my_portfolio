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
  Stack,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaInfoCircle } from 'react-icons/fa';
import { Project } from '../types/projectTypes';

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const imageSources = project.images ?? (project.image ? [project.image] : []);
  const images = imageSources
    .map((source) => (typeof source === 'string' ? { src: source } : source))
    .filter((img) => Boolean(img?.src));
  const [currentImage, setCurrentImage] = useState(0);

  const hasGithub = !!project.githubLink;
  const hasPlayStore = !!project.playStoreLink;
  const hasAppStore = !!project.appStoreLink;
  const containerBg = useColorModeValue('rgba(255, 255, 255, 0.92)', 'rgba(15, 23, 42, 0.88)');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const textColor = useColorModeValue('neutral.900', 'white');
  const descriptionColor = useColorModeValue('neutral.600', 'neutral.200');
  const badgeBg = useColorModeValue('brand.50', 'whiteAlpha.200');
  const badgeColor = useColorModeValue('brand.700', 'cyan.300');
  const tagColor = useColorModeValue('neutral.700', 'neutral.100');
  const tagBorder = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const featureBg = useColorModeValue('neutral.50', 'whiteAlpha.100');
  const previewBg = useColorModeValue('brand.50', 'whiteAlpha.50');
  const activeImage = images[currentImage];
  const hasCarousel = images.length > 1;

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      bg={containerBg}
      borderRadius="2xl"
      borderWidth="1px"
      borderColor={borderColor}
      p={5}
      transition="transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"
      boxShadow={useColorModeValue('0 14px 32px rgba(15, 23, 42, 0.08)', '0 18px 38px rgba(0, 0, 0, 0.34)')}
      _hover={{
        transform: 'translateY(-6px)',
        boxShadow: useColorModeValue('0 24px 48px rgba(15, 23, 42, 0.14)', '0 24px 48px rgba(6, 182, 212, 0.25)'),
        borderColor: badgeColor,
      }}
      h="100%"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <VStack align="stretch" spacing={4} h="100%">
        <Flex justify="space-between" align="center" gap={3} wrap="wrap">
          <Badge
            bg={badgeBg}
            color={badgeColor}
            px={3}
            py={1}
            borderRadius="full"
            fontWeight="bold"
            fontSize="xs"
            letterSpacing="wide"
          >
            {project.category}
          </Badge>
          {project.role ? (
            <Text fontSize="xs" fontWeight="semibold" color="purple.400">
              {project.role}
            </Text>
          ) : null}
        </Flex>

        {images.length ? (
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            minH={{ base: '10rem', md: '11rem' }}
            aspectRatio={{ base: 4 / 3, md: 16 / 10 }}
            bg={previewBg}
            cursor={onSelectProject ? 'pointer' : 'default'}
            onClick={() => onSelectProject?.(project)}
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
              transition="transform 0.35s ease"
              _hover={{ transform: 'scale(1.04)' }}
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
                  bg="blackAlpha.600"
                  color="white"
                  _hover={{ bg: 'blackAlpha.800' }}
                  borderRadius="full"
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
                  bg="blackAlpha.600"
                  color="white"
                  _hover={{ bg: 'blackAlpha.800' }}
                  borderRadius="full"
                />
                <HStack
                  spacing={1}
                  position="absolute"
                  bottom={2}
                  left="50%"
                  transform="translateX(-50%)"
                  bg="blackAlpha.600"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {images.map((_, idx) => (
                    <Box
                      key={idx}
                      w={idx === currentImage ? 2.5 : 1.5}
                      h={idx === currentImage ? 2.5 : 1.5}
                      borderRadius="full"
                      bg={idx === currentImage ? 'cyan.400' : 'whiteAlpha.600'}
                    />
                  ))}
                </HStack>
              </>
            )}
          </Box>
        ) : (
          <Box
            borderRadius="xl"
            minH={{ base: '10rem', md: '11rem' }}
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

        <Heading size="md" color={textColor} fontWeight="bold">
          {project.name}
        </Heading>

        <Text color={descriptionColor} fontSize="sm" lineHeight="tall" noOfLines={3}>
          {project.description}
        </Text>

        <Divider borderColor={borderColor} />

        <Stack spacing={3}>
          {project.features?.length ? (
            <Box>
              <Text
                color={descriptionColor}
                fontSize="xs"
                mb={2}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Key features
              </Text>
              <Stack spacing={1.5}>
                {project.features.slice(0, 3).map((feature) => (
                  <HStack
                    key={feature}
                    spacing={2}
                    align="center"
                    bg={featureBg}
                    borderRadius="md"
                    px={2.5}
                    py={1.5}
                  >
                    <Box w="5px" h="5px" borderRadius="full" bg={badgeColor} flexShrink={0} />
                    <Text color={descriptionColor} fontSize="xs" noOfLines={1}>
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Stack>

        <Box>
          <Text
            color={descriptionColor}
            fontSize="xs"
            mb={2}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Tech stack
          </Text>
          {project.techStack?.length ? (
            <Flex flexWrap="wrap" gap={1.5}>
              {project.techStack.map((tech) => (
                <Tag
                  key={tech}
                  size="sm"
                  borderRadius="md"
                  px={2}
                  py={0.5}
                  borderWidth="1px"
                  borderColor={tagBorder}
                  bg="transparent"
                  color={tagColor}
                  fontSize="xs"
                >
                  {tech}
                </Tag>
              ))}
            </Flex>
          ) : null}
        </Box>

        <Box flex="1" />

        <Divider borderColor={borderColor} />

        <HStack spacing={2} justifyContent="space-between" flexWrap="wrap" pt={1}>
          {onSelectProject && (
            <Button
              leftIcon={<Icon as={FaInfoCircle} />}
              size="sm"
              colorScheme="cyan"
              variant="solid"
              borderRadius="xl"
              onClick={() => onSelectProject(project)}
            >
              Details
            </Button>
          )}

          <HStack spacing={2}>
            {hasGithub && (
              <Link href={project.githubLink} isExternal aria-label="GitHub Repository" onClick={(e) => e.stopPropagation()}>
                <IconButton aria-label="GitHub" icon={<Icon as={FaGithub} />} size="sm" variant="outline" colorScheme="gray" borderRadius="xl" />
              </Link>
            )}

            {hasPlayStore && (
              <Link href={project.playStoreLink} isExternal aria-label="Play Store Link" onClick={(e) => e.stopPropagation()}>
                <Button size="sm" colorScheme="brand" variant="outline" borderRadius="xl">
                  Play Store
                </Button>
              </Link>
            )}

            {hasAppStore && (
              <Link href={project.appStoreLink} isExternal aria-label="App Store Link" onClick={(e) => e.stopPropagation()}>
                <IconButton aria-label="App Store" icon={<Icon as={FaExternalLinkAlt} />} size="sm" variant="outline" colorScheme="purple" borderRadius="xl" />
              </Link>
            )}
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;

