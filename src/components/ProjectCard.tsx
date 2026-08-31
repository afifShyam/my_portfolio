import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Project } from '../types/projectTypes';
import { useLocale } from '../localization';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const PROJECT_TONES = [
  { background: '#151515', foreground: '#f1efe9', accent: '#c4b5fd', frame: 'rgba(241,239,233,0.24)', stage: '#090909' },
  { background: '#6d28d9', foreground: '#f1efe9', accent: '#ddd6fe', frame: 'rgba(241,239,233,0.32)', stage: '#ffffff' },
  { background: '#ddd6fe', foreground: '#090909', accent: '#6d28d9', frame: 'rgba(9,9,9,0.2)', stage: '#ffffff' },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t, list } = useLocale();
  const sources = project.images ?? (project.image ? [project.image] : []);
  const images = sources
    .map((source) => (typeof source === 'string' ? { src: source, alt: `${project.name} application screen` } : source))
    .filter((image) => Boolean(image.src))
    .slice(0, 3);
  const tone = PROJECT_TONES[index % PROJECT_TONES.length];
  const projectNumber = String(index + 1).padStart(2, '0');
  const features = list(`projects.${project.id}.features`, project.features ?? []);

  return (
    <Box borderTop="1px solid" borderColor="line" py={{ base: 14, md: 20, lg: 24 }}>
      <Flex justify="space-between" align="center" mb={{ base: 8, md: 12 }}>
        <Text color="accent" fontFamily="mono" fontSize="11px" letterSpacing="0.1em">
          {projectNumber} / {t(`projects.${project.id}.category`, project.category).toUpperCase()}
        </Text>
        <Text color="text.muted" fontFamily="mono" fontSize="10px" letterSpacing="0.08em" textTransform="uppercase">
          {t('portfolio.production')}
        </Text>
      </Flex>

      <Grid templateColumns={{ base: '1fr', lg: 'minmax(320px, 0.72fr) minmax(0, 1.28fr)' }} gap={{ base: 10, lg: 14, xl: 20 }}>
        <GridItem minW={0}>
          <Box
            as="h3"
            m={0}
            color="text.primary"
            fontFamily="heading"
            fontSize={{ base: '58px', md: '78px', lg: '84px' }}
            fontWeight="800"
            letterSpacing="-0.025em"
            lineHeight="0.88"
            textTransform="uppercase"
          >
            {project.name}
          </Box>

          <Text color="accent" fontFamily="mono" fontSize="10px" letterSpacing="0.07em" mt={6} textTransform="uppercase">
            {t(`projects.${project.id}.role`, project.role ?? '')}
          </Text>
          <Text color="text.secondary" fontSize={{ base: '16px', md: '18px' }} lineHeight="1.65" mt={5}>
            {t(`projects.${project.id}.description`, project.description)}
          </Text>

          <Grid templateColumns={{ base: '1fr', sm: '112px 1fr' }} gap={{ base: 3, sm: 6 }} mt={9} pt={7} borderTop="1px solid" borderColor="line">
            <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" textTransform="uppercase">
              {t('project.ownership')}
            </Text>
            <Text color="text.primary" fontSize="14px" lineHeight="1.6">
              {t(`projects.${project.id}.impact`, project.impact ?? '')}
            </Text>
          </Grid>

          {features.length ? (
            <Grid templateColumns={{ base: '1fr', sm: '112px 1fr' }} gap={{ base: 3, sm: 6 }} mt={7}>
              <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" textTransform="uppercase">
                {t('project.engineering')}
              </Text>
              <VStack align="stretch" spacing={2}>
                {features.slice(0, 3).map((feature) => (
                  <Text key={feature} color="text.secondary" fontSize="13px" lineHeight="1.5">
                    — {feature}
                  </Text>
                ))}
              </VStack>
            </Grid>
          ) : null}

          <Box mt={9} pt={7} borderTop="1px solid" borderColor="line">
            <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.08em" mb={3} textTransform="uppercase">
              {t('project.stack')}
            </Text>
            <Text color="text.primary" fontFamily="mono" fontSize="10px" lineHeight="1.8" letterSpacing="0.03em">
              {project.techStack?.join(' / ')}
            </Text>
          </Box>

          <HStack spacing={5} mt={8} flexWrap="wrap">
            {project.playStoreLink ? (
              <Button
                as={Link}
                href={project.playStoreLink}
                isExternal
                variant="unstyled"
                h="auto"
                color="text.primary"
                fontFamily="mono"
                fontSize="10px"
                borderBottom="1px solid"
                borderColor="accent"
                borderRadius={0}
                pb={1}
                _hover={{ color: 'accent', textDecoration: 'none' }}
              >
                {t('project.googlePlay').toUpperCase()}
              </Button>
            ) : null}
            {project.appStoreLink ? (
              <Button
                as={Link}
                href={project.appStoreLink}
                isExternal
                variant="unstyled"
                h="auto"
                color="text.primary"
                fontFamily="mono"
                fontSize="10px"
                borderBottom="1px solid"
                borderColor="accent"
                borderRadius={0}
                pb={1}
                _hover={{ color: 'accent', textDecoration: 'none' }}
              >
                {t('project.appStore').toUpperCase()}
              </Button>
            ) : null}
            {project.githubLink ? (
              <Button
                as={Link}
                href={project.githubLink}
                isExternal
                variant="unstyled"
                h="auto"
                color="text.primary"
                fontFamily="mono"
                fontSize="10px"
                borderBottom="1px solid"
                borderColor="accent"
                borderRadius={0}
                pb={1}
                _hover={{ color: 'accent', textDecoration: 'none' }}
              >
                {t('project.github').toUpperCase()}
              </Button>
            ) : null}
          </HStack>
        </GridItem>

        <GridItem minW={0}>
          <Box
            position="relative"
            h={{ base: '520px', md: '680px', lg: '760px' }}
            bg={tone.background}
            color={tone.foreground}
            overflow="hidden"
            border="1px solid"
            borderColor={index === 1 ? 'accent.soft' : 'line'}
          >
            <Text
              position="absolute"
              top={5}
              left={5}
              zIndex={3}
              color={tone.foreground}
              fontFamily="mono"
              fontSize="9px"
              letterSpacing="0.09em"
            >
              {project.metrics?.toUpperCase()}
            </Text>
            <Text
              position="absolute"
              right="-8px"
              bottom="-26px"
              color={tone.accent}
              opacity={index === 2 ? 0.32 : 0.16}
              fontFamily="heading"
              fontSize={{ base: '160px', md: '230px' }}
              fontWeight="900"
              letterSpacing="-0.05em"
              lineHeight="0.72"
            >
              {projectNumber}
            </Text>

            <Flex
              position="absolute"
              inset={{ base: '62px 18px 30px', md: '76px 42px 42px' }}
              align="center"
              justify="center"
              gap={{ base: 3, md: 5 }}
            >
              {images.map((image, imageIndex) => (
                <Image
                  key={`${image.src}-${imageIndex}`}
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  alt={image.alt ?? `${project.name} mobile interface`}
                  w={images.length === 1 ? '72%' : images.length === 2 ? '46%' : '31%'}
                  maxH={imageIndex === 0 ? '92%' : '82%'}
                  objectFit="contain"
                  bg={tone.stage}
                  border="1px solid"
                  borderColor={tone.frame}
                  boxShadow="18px 24px 52px rgba(0,0,0,0.32)"
                  animation={`editorial-float ${6.2 + imageIndex * 0.8}s ease-in-out ${imageIndex * -1.1}s infinite`}
                  willChange="transform"
                  transition="filter 180ms ease"
                  _hover={{ filter: 'brightness(1.06)' }}
                />
              ))}
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
