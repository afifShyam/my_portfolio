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
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaInfoCircle, FaStar, FaMobileAlt } from 'react-icons/fa';
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
  const containerBg = useColorModeValue('rgba(255, 255, 255, 0.94)', 'rgba(15, 23, 42, 0.88)');
  const borderColor = useColorModeValue(project.featured ? 'rgba(6, 182, 212, 0.4)' : 'rgba(148, 163, 184, 0.28)', project.featured ? 'rgba(6, 182, 212, 0.4)' : 'whiteAlpha.200');
  const textColor = useColorModeValue('neutral.900', 'white');
  const descriptionColor = useColorModeValue('neutral.600', 'neutral.200');
  const badgeBg = useColorModeValue('cyan.50', 'whiteAlpha.200');
  const badgeColor = useColorModeValue('cyan.700', 'cyan.300');
  const tagColor = useColorModeValue('neutral.700', 'neutral.100');
  const tagBorder = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const featureBg = useColorModeValue('neutral.50', 'whiteAlpha.100');
  const previewBg = useColorModeValue('gray.900', 'gray.950');
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
        boxShadow: useColorModeValue('0 24px 48px rgba(6, 182, 212, 0.18)', '0 24px 48px rgba(6, 182, 212, 0.25)'),
        borderColor: 'cyan.400',
      }}
      h="100%"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      {/* Featured Ribbon Badge */}
      {project.featured && (
        <Box
          position="absolute"
          top={-2.5}
          right={4}
          zIndex={2}
        >
          <HStack
            bgGradient="linear(to-r, cyan.500, brand.600)"
            color="white"
            px={3}
            py={0.5}
            borderRadius="full"
            spacing={1.5}
            boxShadow="0 4px 12px rgba(6, 182, 212, 0.4)"
          >
            <Icon as={FaStar} boxSize={3} />
            <Text fontSize="2xs" fontWeight="extrabold" letterSpacing="wider" textTransform="uppercase">
              Featured Lead
            </Text>
          </HStack>
        </Box>
      )}

      <VStack align="stretch" spacing={4} h="100%">
        <Flex justify="space-between" align="center" gap={2} wrap="wrap">
          <HStack spacing={2}>
            <Badge
              bg={badgeBg}
              color={badgeColor}
              px={2.5}
              py={0.5}
              borderRadius="full"
              fontWeight="bold"
              fontSize="2xs"
              letterSpacing="wide"
            >
              {project.category}
            </Badge>
            {project.metrics && (
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={2}
                py={0.5}
                borderRadius="md"
                fontSize="2xs"
                fontWeight="medium"
              >
                {project.metrics}
              </Badge>
            )}
          </HStack>
          {project.role && (
            <Text fontSize="xs" fontWeight="bold" color="cyan.400">
              {project.role}
            </Text>
          )}
        </Flex>

        {images.length ? (
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            minH={{ base: '11rem', md: '12rem' }}
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
                  size="xs"
                  variant="ghost"
                  position="absolute"
                  top="50%"
                  left={2}
                  transform="translateY(-50%)"
                  onClick={goToPrev}
                  bg="blackAlpha.700"
                  color="white"
                  _hover={{ bg: 'blackAlpha.900' }}
                  borderRadius="full"
                />
                <IconButton
                  aria-label="Next image"
                  icon={<FaChevronRight />}
                  size="xs"
                  variant="ghost"
                  position="absolute"
                  top="50%"
                  right={2}
                  transform="translateY(-50%)"
                  onClick={goToNext}
                  bg="blackAlpha.700"
                  color="white"
                  _hover={{ bg: 'blackAlpha.900' }}
                  borderRadius="full"
                />
                <HStack
                  spacing={1}
                  position="absolute"
                  bottom={2}
                  left="50%"
                  transform="translateX(-50%)"
                  bg="blackAlpha.700"
                  borderRadius="full"
                  px={2.5}
                  py={1}
                  backdropFilter="blur(6px)"
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
            minH={{ base: '11rem', md: '12rem' }}
            bgGradient="linear(to-br, #0f172a, #1e293b)"
            borderWidth="1px"
            borderColor={tagBorder}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            textAlign="center"
            cursor={onSelectProject ? 'pointer' : 'default'}
            onClick={() => onSelectProject?.(project)}
          >
            <Icon as={FaMobileAlt} boxSize={8} color="cyan.400" mb={2} />
            <Text fontSize="sm" fontWeight="bold" color="white">
              {project.name}
            </Text>
            <Text fontSize="xs" color="gray.400" mt={1}>
              Flutter Mobile Application
            </Text>
          </Box>
        )}

        <Heading size="md" color={textColor} fontWeight="bold">
          {project.name}
        </Heading>

        <Text color={descriptionColor} fontSize="sm" lineHeight="tall" noOfLines={3}>
          {project.description}
        </Text>

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
