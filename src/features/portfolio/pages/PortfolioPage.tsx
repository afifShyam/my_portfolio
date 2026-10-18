import { memo } from 'react';
import { Box, Container, Flex, Grid, Link, Text } from '@chakra-ui/react';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from '../../../components/ProjectCard';
import { useLocale } from '../../../localization';

const PortfolioPage: React.FC = () => {
  const { projects, loading, error } = usePortfolio();
  const { t } = useLocale();
  const selectedProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <Box bg="canvas" color="text.primary" py={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 8 }}>
        <Grid templateColumns={{ base: '1fr', md: '0.45fr 1fr' }} gap={{ base: 6, md: 16 }} pb={{ base: 14, md: 20 }}>
          <Text color="accent" fontFamily="mono" fontSize="11px" letterSpacing="0.1em" textTransform="uppercase">
            {t('portfolio.label')}
          </Text>
          <Box>
            <Box
              as="h2"
              m={0}
              color="text.primary"
              fontFamily="heading"
              fontSize={{ base: '42px', sm: '58px', md: '92px', lg: '116px' }}
              fontWeight="800"
              letterSpacing="-0.03em"
              lineHeight={{ base: '1.04', md: '0.84' }}
              textTransform="uppercase"
            >
              {t('portfolio.heading.1')}
              <br />
              <Box as="span" color="accent">
                {t('portfolio.heading.2')}
              </Box>
            </Box>
            <Text color="text.secondary" fontSize={{ base: '16px', md: '18px' }} lineHeight="1.7" maxW="660px" mt={8}>
              {t('portfolio.description')}
            </Text>
          </Box>
        </Grid>

        {error ? (
          <Box borderTop="1px solid" borderColor="line" py={16}>
            <Text color="text.muted">{t('portfolio.error')}</Text>
          </Box>
        ) : loading ? (
          <Box borderTop="1px solid" borderColor="line" py={16}>
            <Text color="text.muted" fontFamily="mono" fontSize="11px" letterSpacing="0.08em" textTransform="uppercase">
              {t('portfolio.loading')}
            </Text>
          </Box>
        ) : (
          selectedProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)
        )}

        {!loading && !error && additionalProjects.length ? (
          <Box borderTop="1px solid" borderColor="line" pt={{ base: 12, md: 16 }}>
            <Flex justify="space-between" align={{ base: 'flex-start', md: 'flex-end' }} direction={{ base: 'column', md: 'row' }} gap={5} mb={8}>
              <Box>
                <Text color="accent" fontFamily="mono" fontSize="10px" letterSpacing="0.1em" mb={3} textTransform="uppercase">
                  {t('portfolio.other')}
                </Text>
                <Text color="text.primary" fontFamily="heading" fontSize={{ base: '32px', sm: '42px', md: '58px' }} fontWeight="700" lineHeight={{ base: '1.05', md: '1' }}>
                  {t('portfolio.additional')}
                </Text>
              </Box>
              <Text color="text.muted" fontSize="14px" maxW="420px" lineHeight="1.6">
                {t('portfolio.additionalDescription')}
              </Text>
            </Flex>

            {additionalProjects.map((project, index) => (
              <Grid
                templateColumns={{ base: '36px 1fr', md: '80px minmax(220px, 0.8fr) minmax(260px, 1.2fr) auto' }}
                gap={{ base: 3, md: 8 }}
                alignItems="start"
                py={{ base: 5, md: 7 }}
                borderTop="1px solid"
                borderColor="line"
              >
                <Text color="text.muted" fontFamily="mono" fontSize="10px" pt={1}>
                  {String(index + selectedProjects.length + 1).padStart(2, '0')}
                </Text>
                <Box minW={0}>
                  <Text color="text.primary" fontFamily="heading" fontSize={{ base: '24px', md: '32px' }} fontWeight="700" lineHeight="1.05">
                    {project.name}
                  </Text>
                  <Text display={{ base: 'block', md: 'none' }} color="text.muted" fontSize="12px" lineHeight="1.5" mt={2}>
                    {t(`projects.${project.id}.impact`, project.impact ?? '')}
                  </Text>
                  <Flex display={{ base: 'flex', md: 'none' }} gap={2.5} mt={3.5} wrap="wrap">
                    {project.playStoreLink ? (
                      <Link
                        href={project.playStoreLink}
                        isExternal
                        display="inline-flex"
                        alignItems="center"
                        minH="40px"
                        px={3.5}
                        py={2}
                        color="accent"
                        fontFamily="mono"
                        fontSize="10px"
                        letterSpacing="0.06em"
                        border="1px solid"
                        borderColor="line"
                        borderRadius="md"
                        bg="rgba(255, 255, 255, 0.03)"
                        _hover={{ borderColor: 'accent', textDecoration: 'none' }}
                      >
                        PLAY ↗
                      </Link>
                    ) : null}
                    {project.appStoreLink ? (
                      <Link
                        href={project.appStoreLink}
                        isExternal
                        display="inline-flex"
                        alignItems="center"
                        minH="40px"
                        px={3.5}
                        py={2}
                        color="accent"
                        fontFamily="mono"
                        fontSize="10px"
                        letterSpacing="0.06em"
                        border="1px solid"
                        borderColor="line"
                        borderRadius="md"
                        bg="rgba(255, 255, 255, 0.03)"
                        _hover={{ borderColor: 'accent', textDecoration: 'none' }}
                      >
                        APP STORE ↗
                      </Link>
                    ) : null}
                    {project.githubLink ? (
                      <Link
                        href={project.githubLink}
                        isExternal
                        display="inline-flex"
                        alignItems="center"
                        minH="40px"
                        px={3.5}
                        py={2}
                        color="accent"
                        fontFamily="mono"
                        fontSize="10px"
                        letterSpacing="0.06em"
                        border="1px solid"
                        borderColor="line"
                        borderRadius="md"
                        bg="rgba(255, 255, 255, 0.03)"
                        _hover={{ borderColor: 'accent', textDecoration: 'none' }}
                      >
                        GITHUB ↗
                      </Link>
                    ) : null}
                  </Flex>
                </Box>
                <Text display={{ base: 'none', md: 'block' }} color="text.muted" fontSize="13px" lineHeight="1.5">
                  {t(`projects.${project.id}.impact`, project.impact ?? '')}
                </Text>
                <Flex display={{ base: 'none', md: 'flex' }} gap={4} justify="flex-end" pt={1}>
                  {project.playStoreLink ? (
                    <Link href={project.playStoreLink} isExternal color="text.secondary" fontFamily="mono" fontSize="9px" _hover={{ color: 'accent' }}>
                      PLAY ↗
                    </Link>
                  ) : null}
                  {project.appStoreLink ? (
                    <Link href={project.appStoreLink} isExternal color="text.secondary" fontFamily="mono" fontSize="9px" _hover={{ color: 'accent' }}>
                      APP STORE ↗
                    </Link>
                  ) : null}
                  {project.githubLink ? (
                    <Link href={project.githubLink} isExternal color="text.secondary" fontFamily="mono" fontSize="9px" _hover={{ color: 'accent' }}>
                      GITHUB ↗
                    </Link>
                  ) : null}
                </Flex>
              </Grid>
            ))}
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default memo(PortfolioPage);
