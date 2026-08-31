import { memo } from 'react';
import { Box, Container, Flex, Grid, Link, Text } from '@chakra-ui/react';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from '../../../components/ProjectCard';
import { useLocale } from '../../../localization';

const PortfolioPage: React.FC = () => {
  const { projects, loading, error } = usePortfolio();
  const { t } = useLocale();
  const selectedProjects = projects.slice(0, 3);
  const additionalProjects = projects.slice(3);

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
              fontSize={{ base: '64px', md: '92px', lg: '116px' }}
              fontWeight="800"
              letterSpacing="-0.035em"
              lineHeight="0.82"
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
                <Text color="text.primary" fontFamily="heading" fontSize={{ base: '44px', md: '58px' }} fontWeight="700" lineHeight="1">
                  {t('portfolio.additional')}
                </Text>
              </Box>
              <Text color="text.muted" fontSize="14px" maxW="420px" lineHeight="1.6">
                {t('portfolio.additionalDescription')}
              </Text>
            </Flex>

            {additionalProjects.map((project, index) => (
              <Grid
                key={project.id}
                templateColumns={{ base: '48px 1fr', md: '80px minmax(220px, 0.8fr) minmax(260px, 1.2fr) auto' }}
                gap={{ base: 4, md: 8 }}
                alignItems="center"
                py={{ base: 6, md: 7 }}
                borderTop="1px solid"
                borderColor="line"
              >
                <Text color="text.muted" fontFamily="mono" fontSize="10px">
                  {String(index + 4).padStart(2, '0')}
                </Text>
                <Text color="text.primary" fontFamily="heading" fontSize={{ base: '25px', md: '32px' }} fontWeight="700" lineHeight="1">
                  {project.name}
                </Text>
                <Text display={{ base: 'none', md: 'block' }} color="text.muted" fontSize="13px" lineHeight="1.5">
                  {t(`projects.${project.id}.impact`, project.impact ?? '')}
                </Text>
                <Flex display={{ base: 'none', md: 'flex' }} gap={4} justify="flex-end">
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
