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
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Project } from '../types/projectTypes';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
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
  const badgeColor = useColorModeValue('brand.700', 'brand.200');
  const tagColor = useColorModeValue('neutral.700', 'neutral.100');
  const tagBorder = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const featureBg = useColorModeValue('neutral.50', 'whiteAlpha.100');
  const previewBg = useColorModeValue('brand.50', 'whiteAlpha.50');
  const activeImage = images[currentImage];
  const hasCarousel = images.length > 1;

  const goToPrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      bg={containerBg}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      p={5}
      transition="transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
      boxShadow={useColorModeValue('0 14px 32px rgba(15, 23, 42, 0.08)', '0 18px 38px rgba(0, 0, 0, 0.24)')}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: useColorModeValue('0 22px 46px rgba(15, 23, 42, 0.12)', '0 22px 46px rgba(0, 0, 0, 0.34)'),
        borderColor: badgeColor,
      }}
      h="100%"
      display="flex"
      flexDirection="column"
    >
      <VStack align="stretch" spacing={4} h="100%">
        <Flex justify="space-between" align="flex-start" gap={3} wrap="wrap">
          <Badge
            bg={badgeBg}
            color={badgeColor}
            px={3}
            py={1}
            borderRadius="full"
            fontWeight="semibold"
          >
            {project.category}
          </Badge>
          {project.role ? (
            <Text fontSize="sm" color={descriptionColor}>
              {project.role}
            </Text>
          ) : null}
        </Flex>

        {images.length ? (
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="lg"
            minH={{ base: '10rem', md: '11rem' }}
            aspectRatio={{ base: 4 / 3, md: 16 / 10 }}
            bg={previewBg}
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
                  bg="blackAlpha.500"
                  color="white"
                  _hover={{ bg: 'blackAlpha.600' }}
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
                  bg="blackAlpha.500"
                  color="white"
                  _hover={{ bg: 'blackAlpha.600' }}
                />
                <HStack
                  spacing={1}
                  position="absolute"
                  bottom={2}
                  left="50%"
                  transform="translateX(-50%)"
                  bg="blackAlpha.500"
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
                      bg={idx === currentImage ? 'white' : 'whiteAlpha.600'}
                    />
                  ))}
                </HStack>
              </>
            )}
          </Box>
        ) : (
          <Box
            borderRadius="lg"
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

        <Heading size="md" color={textColor} fontWeight="semibold">
          {project.name}
        </Heading>

        <Text color={descriptionColor} fontSize="sm" lineHeight="tall">
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
              <Stack spacing={2}>
                {project.features.map((feature) => (
                  <HStack
                    key={feature}
                    spacing={2}
                    align="flex-start"
                    bg={featureBg}
                    borderRadius="md"
                    px={3}
                    py={2}
                  >
                    <Box mt={1} w="6px" h="6px" borderRadius="full" bg={badgeColor} flexShrink={0} />
                    <Text color={descriptionColor} fontSize="sm">
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </Stack>
            </Box>
          ) : null}

          {project.impact ? (
            <Box>
              <Text
                color={descriptionColor}
                fontSize="xs"
                mb={2}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Result
              </Text>
              <Text color={descriptionColor} fontSize="sm" lineHeight="tall">
                {project.impact}
              </Text>
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
            <Text color={descriptionColor} fontSize="sm">
              No tech stack listed
            </Text>
          )}
        </Box>

        <Box flex="1" />

        <HStack spacing={3} justifyContent="flex-start" flexWrap="wrap" pt={2}>
          {hasGithub && (
            <Link href={project.githubLink} isExternal aria-label="GitHub Repository">
              <Button leftIcon={<Icon as={FaGithub} />} size="sm" variant="outline" colorScheme="brand">
                GitHub
              </Button>
            </Link>
          )}

          {hasPlayStore && (
            <Link href={project.playStoreLink} isExternal aria-label="Play Store Link">
              <Button leftIcon={<Icon as={FaExternalLinkAlt} />} size="sm" colorScheme="brand">
                Demo
              </Button>
            </Link>
          )}

          {hasAppStore && (
            <Link href={project.appStoreLink} isExternal aria-label="App Store Link">
              <Button leftIcon={<Icon as={FaExternalLinkAlt} />} size="sm" variant="outline" colorScheme="brand">
                App Store
              </Button>
            </Link>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
