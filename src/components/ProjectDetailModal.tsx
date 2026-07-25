import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Heading,
  Text,
  Badge,
  Flex,
  Button,
  Image,
  HStack,
  VStack,
  Tag,
  Icon,
  Link,
  Divider,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';
import { Project } from '../types/projectTypes';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const modalBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('neutral.900', 'white');
  const mutedColor = useColorModeValue('neutral.600', 'gray.300');
  const highlightBg = useColorModeValue('brand.50', 'whiteAlpha.100');
  const accentColor = useColorModeValue('brand.600', 'cyan.400');
  const featureBg = useColorModeValue('neutral.50', 'whiteAlpha.100');

  if (!project) return null;

  const imageSources = project.images ?? (project.image ? [project.image] : []);
  const images = imageSources
    .map((source) => (typeof source === 'string' ? { src: source } : source))
    .filter((img) => Boolean(img?.src));

  const activeImage = images[currentImageIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.700" />
      <ModalContent bg={modalBg} borderRadius="2xl" border="1px solid" borderColor={borderColor} overflow="hidden" shadow="2xl">
        <ModalHeader pb={2} pt={6} px={6}>
          <Flex justify="space-between" align="center" gap={3} wrap="wrap" pr={8}>
            <HStack spacing={3}>
              <Badge colorScheme="brand" fontSize="xs" px={3} py={1} borderRadius="full" textTransform="uppercase" fontWeight="bold">
                {project.category}
              </Badge>
              {project.role && (
                <Badge colorScheme="purple" fontSize="xs" px={3} py={1} borderRadius="full" variant="subtle">
                  {project.role}
                </Badge>
              )}
            </HStack>
          </Flex>
          <Heading size="lg" color={textColor} mt={3}>
            {project.name}
          </Heading>
        </ModalHeader>
        <ModalCloseButton top={5} right={5} borderRadius="full" size="lg" />

        <ModalBody px={6} py={4}>
          <VStack align="stretch" spacing={6}>
            {/* Gallery Section */}
            {images.length > 0 && (
              <Box position="relative" borderRadius="xl" overflow="hidden" bg="gray.900" border="1px solid" borderColor={borderColor}>
                <Image
                  src={activeImage?.src}
                  alt={activeImage?.alt ?? `${project.name} screenshot`}
                  maxH="380px"
                  w="full"
                  objectFit="contain"
                  bg="black"
                  py={2}
                />
                {images.length > 1 && (
                  <>
                    <IconButton
                      aria-label="Previous screenshot"
                      icon={<FaChevronLeft />}
                      size="sm"
                      position="absolute"
                      top="50%"
                      left={3}
                      transform="translateY(-50%)"
                      onClick={handlePrevImage}
                      colorScheme="blackAlpha"
                      borderRadius="full"
                    />
                    <IconButton
                      aria-label="Next screenshot"
                      icon={<FaChevronRight />}
                      size="sm"
                      position="absolute"
                      top="50%"
                      right={3}
                      transform="translateY(-50%)"
                      onClick={handleNextImage}
                      colorScheme="blackAlpha"
                      borderRadius="full"
                    />
                    <HStack
                      spacing={1.5}
                      position="absolute"
                      bottom={3}
                      left="50%"
                      transform="translateX(-50%)"
                      bg="blackAlpha.700"
                      px={3}
                      py={1}
                      borderRadius="full"
                      backdropFilter="blur(8px)"
                    >
                      {images.map((_, idx) => (
                        <Box
                          key={idx}
                          w={idx === currentImageIndex ? 3 : 1.5}
                          h={1.5}
                          borderRadius="full"
                          bg={idx === currentImageIndex ? 'cyan.400' : 'whiteAlpha.500'}
                          transition="all 0.2s ease"
                        />
                      ))}
                    </HStack>
                  </>
                )}
              </Box>
            )}

            {/* Overview */}
            <Box>
              <Text fontSize="md" color={textColor} lineHeight="relaxed">
                {project.description}
              </Text>
            </Box>

            {/* Impact / Result Banner */}
            {project.impact && (
              <Box bg={highlightBg} borderLeft="4px solid" borderColor={accentColor} p={4} borderRadius="r-xl">
                <HStack spacing={2} mb={1} color={accentColor}>
                  <Icon as={FaMobileAlt} />
                  <Text fontWeight="semibold" fontSize="sm">
                    Key Impact & Delivery
                  </Text>
                </HStack>
                <Text color={textColor} fontSize="sm">
                  {project.impact}
                </Text>
              </Box>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <Box>
                <HStack spacing={2} mb={3} color={accentColor}>
                  <Icon as={FaLayerGroup} />
                  <Heading size="xs" textTransform="uppercase" letterSpacing="wider">
                    Core Capabilities
                  </Heading>
                </HStack>
                <VStack align="stretch" spacing={2}>
                  {project.features.map((feature, i) => (
                    <HStack key={i} bg={featureBg} p={3} borderRadius="lg" spacing={3}>
                      <Box w="6px" h="6px" borderRadius="full" bg={accentColor} flexShrink={0} />
                      <Text fontSize="sm" color={textColor}>
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            )}

            <Divider borderColor={borderColor} />

            {/* Tech Stack */}
            <Box>
              <Heading size="xs" textTransform="uppercase" letterSpacing="wider" color={mutedColor} mb={3}>
                Technologies & Frameworks
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {project.techStack?.map((tech) => (
                  <Tag key={tech} size="md" colorScheme="blue" borderRadius="full" px={3} py={1}>
                    {tech}
                  </Tag>
                ))}
              </Flex>
            </Box>

            {/* Links & CTA */}
            <HStack spacing={4} pt={2} flexWrap="wrap">
              {project.githubLink && (
                <Link href={project.githubLink} isExternal style={{ textDecoration: 'none' }}>
                  <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid" borderRadius="xl">
                    View Code on GitHub
                  </Button>
                </Link>
              )}
              {project.playStoreLink && (
                <Link href={project.playStoreLink} isExternal style={{ textDecoration: 'none' }}>
                  <Button leftIcon={<FaExternalLinkAlt />} colorScheme="brand" borderRadius="xl">
                    Google Play Store
                  </Button>
                </Link>
              )}
              {project.appStoreLink && (
                <Link href={project.appStoreLink} isExternal style={{ textDecoration: 'none' }}>
                  <Button leftIcon={<FaExternalLinkAlt />} colorScheme="purple" variant="outline" borderRadius="xl">
                    Apple App Store
                  </Button>
                </Link>
              )}
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectDetailModal;
