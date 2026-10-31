import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Link,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaGooglePlay, FaApple, FaGithub } from 'react-icons/fa6';
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Project } from '../types/projectTypes';
import { useLocale } from '../localization';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const PROJECT_TONES = [
  { background: '#111111', foreground: '#f1efe9', accent: '#a78bfa', stage: '#0a0a0a', border: 'rgba(167,139,250,0.22)' },
  { background: '#171424', foreground: '#f1efe9', accent: '#c4b5fd', stage: '#0f0c18', border: 'rgba(196,181,253,0.24)' },
  { background: '#0e1916', foreground: '#f1efe9', accent: '#34d399', stage: '#091210', border: 'rgba(52,211,153,0.24)' },
  { background: '#0d1822', foreground: '#f1efe9', accent: '#38bdf8', stage: '#091118', border: 'rgba(56,189,248,0.24)' },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t, list } = useLocale();
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const sources = project.images ?? (project.image ? [project.image] : []);
  const images = sources
    .map((source) => (typeof source === 'string' ? { src: source, alt: `${project.name} application screen` } : source))
    .filter((image) => Boolean(image.src));

  const tone = PROJECT_TONES[index % PROJECT_TONES.length];
  const projectNumber = String(index + 1).padStart(2, '0');
  const features = list(`projects.${project.id}.features`, project.features ?? []);
  const currentImage = images[activeScreenIndex] ?? images[0];
  const isDraggingRef = useRef(false);

  const handleDragStart = () => {
    isDraggingRef.current = false;
  };

  const handleDrag = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 6 || Math.abs(info.offset.y) > 6) {
      isDraggingRef.current = true;
    }
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 45;
    const velocity = 300;
    if (info.offset.x < -threshold || info.velocity.x < -velocity) {
      handleNextScreen();
    } else if (info.offset.x > threshold || info.velocity.x > velocity) {
      handlePrevScreen();
    }
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  const handlePreviewClick = () => {
    if (!isDraggingRef.current) {
      setIsLightboxOpen(true);
    }
  };

  const handleNextScreen = useCallback(() => {
    setActiveScreenIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevScreen = useCallback(() => {
    setActiveScreenIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNextScreen();
      if (e.key === 'ArrowLeft') handlePrevScreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleNextScreen, handlePrevScreen]);

  return (
    <Box borderTop="1px solid" borderColor="line" py={{ base: 14, md: 20, lg: 24 }}>
      {/* Eyebrow strip */}
      <Flex justify="space-between" align="center" mb={{ base: 8, md: 12 }}>
        <Text color="accent" fontFamily="mono" fontSize="11px" letterSpacing="0.1em">
          {projectNumber} / {t(`projects.${project.id}.category`, project.category).toUpperCase()}
        </Text>
        <Text color="text.muted" fontFamily="mono" fontSize="10px" letterSpacing="0.08em" textTransform="uppercase">
          {t('portfolio.production')}
        </Text>
      </Flex>

      {/* Main Grid: Left Case Study vs Right Interactive Device Stage */}
      <Grid templateColumns={{ base: '1fr', lg: 'minmax(320px, 0.76fr) minmax(0, 1.24fr)' }} gap={{ base: 10, lg: 14, xl: 20 }}>
        {/* Left Column: Engineering Narrative */}
        <GridItem minW={0}>
          <Box
            as="h3"
            m={0}
            color="text.primary"
            fontFamily="heading"
            fontSize={{ base: '34px', sm: '46px', md: '74px', lg: '82px' }}
            fontWeight="800"
            letterSpacing="-0.025em"
            lineHeight={{ base: '1.04', md: '0.88' }}
            wordBreak="break-word"
            textTransform="uppercase"
          >
            {project.name}
          </Box>

          <Text color="accent" fontFamily="mono" fontSize="11px" letterSpacing="0.08em" mt={5} textTransform="uppercase">
            {t(`projects.${project.id}.role`, project.role ?? '')}
          </Text>
          <Text color="text.secondary" fontSize={{ base: '16px', md: '18px' }} lineHeight="1.65" mt={5}>
            {t(`projects.${project.id}.description`, project.description)}
          </Text>

          {/* Engineering Specification Grid */}
          <Box mt={7} pt={6} borderTop="1px solid" borderColor="line">
            <Text color="accent" fontFamily="mono" fontSize="10px" letterSpacing="0.1em" mb={4} textTransform="uppercase" fontWeight="600">
              // {t('project.spec')}
            </Text>

            <VStack align="stretch" spacing={3}>
              {project.role ? (
                <Grid templateColumns={{ base: '1fr', sm: '124px 1fr' }} gap={2} alignItems="baseline">
                  <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" textTransform="uppercase">
                    {t('project.roleLabel')}
                  </Text>
                  <Text color="text.primary" fontFamily="mono" fontSize="11px" fontWeight="600">
                    {t(`projects.${project.id}.role`, project.role)}
                  </Text>
                </Grid>
              ) : null}

              {project.architecture ? (
                <Grid templateColumns={{ base: '1fr', sm: '124px 1fr' }} gap={2} alignItems="baseline">
                  <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" textTransform="uppercase">
                    {t('project.architectureLabel')}
                  </Text>
                  <Text color="text.primary" fontFamily="mono" fontSize="11px">
                    {project.architecture}
                  </Text>
                </Grid>
              ) : null}

              {project.stateManagement ? (
                <Grid templateColumns={{ base: '1fr', sm: '124px 1fr' }} gap={2} alignItems="baseline">
                  <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" textTransform="uppercase">
                    {t('project.stateLabel')}
                  </Text>
                  <Text color="text.primary" fontFamily="mono" fontSize="11px">
                    {project.stateManagement}
                  </Text>
                </Grid>
              ) : null}

              {project.impact ? (
                <Grid templateColumns={{ base: '1fr', sm: '124px 1fr' }} gap={2} alignItems="baseline">
                  <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" textTransform="uppercase">
                    {t('project.impactLabel')}
                  </Text>
                  <Text color="text.primary" fontSize="13px" lineHeight="1.5">
                    {t(`projects.${project.id}.impact`, project.impact)}
                  </Text>
                </Grid>
              ) : null}

              {project.delivery ? (
                <Grid templateColumns={{ base: '1fr', sm: '124px 1fr' }} gap={2} alignItems="baseline">
                  <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" textTransform="uppercase">
                    {t('project.deliveryLabel')}
                  </Text>
                  <Text color="text.primary" fontFamily="mono" fontSize="11px">
                    {project.delivery}
                  </Text>
                </Grid>
              ) : null}
            </VStack>
          </Box>

          {/* Engineering Highlights */}
          {features.length ? (
            <Box mt={7} pt={6} borderTop="1px solid" borderColor="line">
              <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" mb={3} textTransform="uppercase">
                {t('project.engineering')}
              </Text>
              <VStack align="stretch" spacing={2.5}>
                {features.map((feature) => (
                  <Text key={feature} color="text.secondary" fontSize="13px" lineHeight="1.5">
                    — {feature}
                  </Text>
                ))}
              </VStack>
            </Box>
          ) : null}

          {/* Architecture & Tech Stack */}
          <Box mt={8} pt={7} borderTop="1px solid" borderColor="line">
            <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" mb={3} textTransform="uppercase">
              {t('project.stack')}
            </Text>
            <Flex wrap="wrap" gap={2}>
              {project.techStack?.map((tech) => (
                <Box
                  key={tech}
                  px={2.5}
                  py={1}
                  bg="rgba(255, 255, 255, 0.04)"
                  border="1px solid"
                  borderColor="line"
                  borderRadius="sm"
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.03em"
                  color="text.primary"
                >
                  {tech}
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Store & Repository Badges */}
          <HStack spacing={3} mt={8} flexWrap="wrap">
            {project.playStoreLink ? (
              <Button
                as={Link}
                href={project.playStoreLink}
                isExternal
                h="40px"
                px={4}
                bg="transparent"
                border="1px solid"
                borderColor="line"
                borderRadius="md"
                color="text.primary"
                fontFamily="mono"
                fontSize="11px"
                letterSpacing="0.04em"
                leftIcon={<FaGooglePlay size={13} color="#4ade80" />}
                _hover={{
                  borderColor: 'accent',
                  color: 'accent',
                  textDecoration: 'none',
                  bg: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                GOOGLE PLAY
              </Button>
            ) : null}
            {project.appStoreLink ? (
              <Button
                as={Link}
                href={project.appStoreLink}
                isExternal
                h="40px"
                px={4}
                bg="transparent"
                border="1px solid"
                borderColor="line"
                borderRadius="md"
                color="text.primary"
                fontFamily="mono"
                fontSize="11px"
                letterSpacing="0.04em"
                leftIcon={<FaApple size={15} />}
                _hover={{
                  borderColor: 'accent',
                  color: 'accent',
                  textDecoration: 'none',
                  bg: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                APP STORE
              </Button>
            ) : null}
            {project.githubLink ? (
              <Button
                as={Link}
                href={project.githubLink}
                isExternal
                h="40px"
                px={4}
                bg="transparent"
                border="1px solid"
                borderColor="line"
                borderRadius="md"
                color="text.primary"
                fontFamily="mono"
                fontSize="11px"
                letterSpacing="0.04em"
                leftIcon={<FaGithub size={14} />}
                _hover={{
                  borderColor: 'accent',
                  color: 'accent',
                  textDecoration: 'none',
                  bg: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                SOURCE CODE
              </Button>
            ) : null}
          </HStack>
        </GridItem>

        {/* Right Column: Interactive Mobile Device Stage */}
        <GridItem minW={0}>
          <Box
            position="relative"
            h={{ base: '580px', sm: '640px', md: '720px', lg: '780px' }}
            bg={tone.background}
            color={tone.foreground}
            overflow="hidden"
            border="1px solid"
            borderColor={tone.border}
            borderRadius="sm"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={{ base: 4, sm: 6, md: 8 }}
          >
            {/* Top Stage Bar: Telemetry & Inspect CTA */}
            <Flex justify="space-between" align="center" zIndex={4} w="full">
              <Text
                color={tone.accent}
                fontFamily="mono"
                fontSize="9px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontWeight="500"
              >
                {project.metrics?.toUpperCase()}
              </Text>
              <Button
                size="xs"
                variant="unstyled"
                display="inline-flex"
                alignItems="center"
                gap={1.5}
                color="text.muted"
                fontFamily="mono"
                fontSize="9px"
                letterSpacing="0.08em"
                px={2.5}
                py={1}
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.12)"
                borderRadius="full"
                _hover={{ color: tone.accent, borderColor: tone.accent, bg: 'rgba(255, 255, 255, 0.04)' }}
                onClick={() => setIsLightboxOpen(true)}
              >
                <FiMaximize2 size={11} />
                <span>INSPECT</span>
              </Button>
            </Flex>

            {/* Giant Background Watermark Number */}
            <Text
              position="absolute"
              right="-10px"
              bottom="-30px"
              color={tone.accent}
              opacity={0.12}
              fontFamily="heading"
              fontSize={{ base: '120px', sm: '160px', md: '230px' }}
              fontWeight="900"
              letterSpacing="-0.05em"
              lineHeight="0.8"
              pointerEvents="none"
              userSelect="none"
              zIndex={1}
            >
              {projectNumber}
            </Text>

            {/* Centered Showcase Viewport (Contain display with scoped touch swipe) */}
            <Flex flex="1" align="center" justify="center" position="relative" zIndex={2} my={2} minH={0}>
              <motion.div
                drag={images.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onClick={handlePreviewClick}
                style={{
                  touchAction: 'pan-y',
                  cursor: images.length > 1 ? 'grab' : 'pointer',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                whileTap={{ cursor: images.length > 1 ? 'grabbing' : 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsLightboxOpen(true);
                  }
                }}
                aria-label={`Inspect ${currentImage?.alt ?? project.name} in fullscreen lightbox, or swipe horizontally to change screen`}
              >
                <Box
                  position="relative"
                  maxH="full"
                  h={{ base: '420px', sm: '470px', md: '520px', lg: '570px' }}
                  aspectRatio="1290 / 2796"
                  borderRadius={{ base: '26px', md: '34px' }}
                  p={{ base: '6px', md: '8px' }}
                  bg="rgba(0, 0, 0, 0.45)"
                  border="2.5px solid rgba(255, 255, 255, 0.16)"
                  boxShadow="0 24px 60px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08)"
                  transition="transform 280ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 280ms ease, border-color 280ms ease"
                  _hover={{
                    transform: 'translateY(-6px)',
                    borderColor: tone.accent,
                    boxShadow: `0 36px 72px -12px rgba(0, 0, 0, 0.95), 0 0 20px -4px ${tone.accent}40`,
                  }}
                >
                  {/* Native Dynamic Island Bar */}
                  <Box
                    position="absolute"
                    top={{ base: '12px', md: '16px' }}
                    left="50%"
                    transform="translateX(-50%)"
                    w={{ base: '56px', md: '72px' }}
                    h={{ base: '14px', md: '17px' }}
                    bg="rgba(0, 0, 0, 0.95)"
                    borderRadius="full"
                    border="1px solid rgba(255, 255, 255, 0.12)"
                    zIndex={3}
                    pointerEvents="none"
                  />
                  {/* Home Indicator Bar */}
                  <Box
                    position="absolute"
                    bottom={{ base: '10px', md: '14px' }}
                    left="50%"
                    transform="translateX(-50%)"
                    w={{ base: '70px', md: '96px' }}
                    h="3.5px"
                    bg="rgba(255, 255, 255, 0.45)"
                    borderRadius="full"
                    zIndex={3}
                    pointerEvents="none"
                  />

                  {/* Rounded Inner Screen Surface */}
                  <Box
                    w="full"
                    h="full"
                    borderRadius={{ base: '20px', md: '26px' }}
                    overflow="hidden"
                    bg="#000000"
                  >
                    {currentImage ? (
                      <Image
                        key={currentImage.src}
                        src={currentImage.src}
                        srcSet={currentImage.srcSet}
                        sizes={currentImage.sizes}
                        alt={currentImage.alt ?? `${project.name} screen ${activeScreenIndex + 1}`}
                        w="full"
                        h="full"
                        objectFit="contain"
                        objectPosition="center"
                        loading="lazy"
                        draggable={false}
                        userSelect="none"
                        pointerEvents="none"
                      />
                    ) : null}
                  </Box>
                </Box>
              </motion.div>
            </Flex>

            {/* Bottom Flow Stepper Bar */}
            {images.length > 1 ? (
              <Flex
                position="relative"
                zIndex={4}
                align="center"
                justify="center"
                gap={2}
                py={2}
                flexWrap="wrap"
              >
                <IconButton
                  aria-label="Previous screen"
                  icon={<FiChevronLeft size={14} />}
                  size="xs"
                  variant="unstyled"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="28px"
                  h="28px"
                  color="text.muted"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.12)"
                  borderRadius="full"
                  _hover={{ color: tone.accent, borderColor: tone.accent, bg: 'rgba(255, 255, 255, 0.05)' }}
                  onClick={handlePrevScreen}
                />
                <HStack spacing={1.5} flexWrap="wrap" justify="center">
                  {images.map((_, i) => {
                    const label = project.screenLabels?.[i];
                    const isActive = activeScreenIndex === i;
                    return (
                      <Button
                        key={i}
                        size="xs"
                        variant="unstyled"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        px={label ? 3 : 2.5}
                        h="28px"
                        fontFamily="mono"
                        fontSize="9px"
                        letterSpacing="0.05em"
                        borderRadius="full"
                        bg={isActive ? tone.accent : 'rgba(255, 255, 255, 0.06)'}
                        color={isActive ? '#000000' : 'text.muted'}
                        border="1px solid"
                        borderColor={isActive ? tone.accent : 'rgba(255, 255, 255, 0.12)'}
                        fontWeight={isActive ? '700' : '500'}
                        _hover={{
                          bg: isActive ? tone.accent : 'rgba(255, 255, 255, 0.12)',
                          color: isActive ? '#000000' : 'text.primary',
                        }}
                        onClick={() => setActiveScreenIndex(i)}
                      >
                        {label ? (
                          <>
                            {isActive ? '● ' : ''}
                            {label}
                          </>
                        ) : (
                          String(i + 1).padStart(2, '0')
                        )}
                      </Button>
                    );
                  })}
                </HStack>
                <IconButton
                  aria-label="Next screen"
                  icon={<FiChevronRight size={14} />}
                  size="xs"
                  variant="unstyled"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="28px"
                  h="28px"
                  color="text.muted"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.12)"
                  borderRadius="full"
                  _hover={{ color: tone.accent, borderColor: tone.accent, bg: 'rgba(255, 255, 255, 0.05)' }}
                  onClick={handleNextScreen}
                />
              </Flex>
            ) : (
              <Box h="28px" />
            )}
          </Box>
        </GridItem>
      </Grid>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && currentImage ? (
        <Portal>
          <Box
            position="fixed"
            inset={0}
            zIndex={2000}
            bg="rgba(0, 0, 0, 0.94)"
            backdropFilter="blur(18px)"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={{ base: 4, md: 8 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Lightbox Header */}
            <Flex justify="space-between" align="center" w="full" onClick={(e) => e.stopPropagation()}>
              <HStack spacing={3}>
                <Text color="accent" fontFamily="mono" fontSize="12px" letterSpacing="0.08em" textTransform="uppercase">
                  {project.name}
                </Text>
                <Text color="text.muted" fontFamily="mono" fontSize="11px">
                  / Screen {activeScreenIndex + 1} of {images.length}
                </Text>
              </HStack>
              <IconButton
                aria-label="Close Lightbox"
                icon={<FiX size={20} />}
                variant="unstyled"
                color="text.primary"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="40px"
                h="40px"
                borderRadius="full"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.16)"
                _hover={{ color: 'accent', borderColor: 'accent', bg: 'rgba(255, 255, 255, 0.05)' }}
                onClick={() => setIsLightboxOpen(false)}
              />
            </Flex>

            {/* Lightbox Main Stage with Chevrons */}
            <Flex flex="1" align="center" justify="center" position="relative" my={4} onClick={(e) => e.stopPropagation()}>
              {images.length > 1 ? (
                <IconButton
                  aria-label="Previous screen"
                  icon={<FiChevronLeft size={24} />}
                  position="absolute"
                  left={{ base: 0, md: 4 }}
                  zIndex={10}
                  variant="unstyled"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="48px"
                  h="48px"
                  color="text.primary"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.18)"
                  borderRadius="full"
                  bg="rgba(0, 0, 0, 0.6)"
                  _hover={{ color: 'accent', borderColor: 'accent', bg: 'rgba(0, 0, 0, 0.85)' }}
                  onClick={handlePrevScreen}
                />
              ) : null}

              <Image
                src={currentImage.src}
                alt={currentImage.alt ?? `${project.name} full screenshot`}
                maxH="82vh"
                maxW="88vw"
                objectFit="contain"
                borderRadius="lg"
                boxShadow="0 32px 80px rgba(0, 0, 0, 0.95)"
              />

              {images.length > 1 ? (
                <IconButton
                  aria-label="Next screen"
                  icon={<FiChevronRight size={24} />}
                  position="absolute"
                  right={{ base: 0, md: 4 }}
                  zIndex={10}
                  variant="unstyled"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="48px"
                  h="48px"
                  color="text.primary"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.18)"
                  borderRadius="full"
                  bg="rgba(0, 0, 0, 0.6)"
                  _hover={{ color: 'accent', borderColor: 'accent', bg: 'rgba(0, 0, 0, 0.85)' }}
                  onClick={handleNextScreen}
                />
              ) : null}
            </Flex>

            {/* Lightbox Caption */}
            <Box textAlign="center" onClick={(e) => e.stopPropagation()}>
              <Text color="text.secondary" fontFamily="mono" fontSize="12px" letterSpacing="0.04em">
                {currentImage.alt}
              </Text>
            </Box>
          </Box>
        </Portal>
      ) : null}
    </Box>
  );
};

export default ProjectCard;
