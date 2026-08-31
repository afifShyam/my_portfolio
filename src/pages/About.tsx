import { Box, Container, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { useLocale } from '../localization';

const EXPERIENCE = [
  { key: 'experience.1', company: 'Radiant GlobalTech Sdn. Bhd.' },
  { key: 'experience.2', company: 'Coinyex Co. Ltd.' },
  { key: 'experience.3', company: 'RF Infinite Sdn. Bhd.' },
];

const CAPABILITIES = ['capability.1', 'capability.2', 'capability.3', 'capability.4'];

export const About: React.FC = () => {
  const { t } = useLocale();

  return (
    <Box id="about" bg="band" color="band.text" py={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 8 }}>
        <Grid templateColumns={{ base: '1fr', md: '0.45fr 1fr' }} gap={{ base: 7, md: 16 }} pb={{ base: 14, md: 20 }}>
          <Text color="band.accent" fontFamily="mono" fontSize="11px" letterSpacing="0.1em" textTransform="uppercase">
            {t('about.label')}
          </Text>
          <Box>
            <Box
              as="h2"
              m={0}
              fontFamily="heading"
              fontSize={{ base: '58px', md: '82px', lg: '104px' }}
              fontWeight="800"
              letterSpacing="-0.035em"
              lineHeight="0.86"
              textTransform="uppercase"
            >
              {t('about.heading.1')}
              <br />
              <Box as="span" color="band.accent">
                {t('about.heading.2')}
              </Box>
            </Box>
            <Text color="band.muted" fontSize={{ base: '16px', md: '19px' }} lineHeight="1.7" maxW="720px" mt={8}>
              {t('about.description')}
            </Text>
          </Box>
        </Grid>

        <Box borderTop="1px solid" borderColor="band.line">
          {EXPERIENCE.map((item, index) => (
            <Grid
              key={item.company}
              templateColumns={{ base: '1fr', md: '0.45fr 0.55fr 1fr' }}
              gap={{ base: 5, md: 10, lg: 16 }}
              py={{ base: 9, md: 12 }}
              borderBottom="1px solid"
              borderColor="band.line"
            >
              <GridItem>
                <Text color="band.accent" fontFamily="mono" fontSize="10px" letterSpacing="0.07em" textTransform="uppercase">
                  {String(index + 1).padStart(2, '0')} / {t(`${item.key}.period`)}
                </Text>
              </GridItem>
              <GridItem>
                <Text fontFamily="heading" fontSize={{ base: '32px', md: '38px' }} fontWeight="700" lineHeight="1">
                  {t(`${item.key}.role`)}
                </Text>
                <Text color="band.muted" fontSize="13px" mt={2}>
                  {item.company}
                </Text>
              </GridItem>
              <GridItem>
                <VStack align="stretch" spacing={4}>
                  <Text fontSize={{ base: '15px', md: '16px' }} lineHeight="1.65">
                    {t(`${item.key}.summary`)}
                  </Text>
                  <Text color="band.muted" fontSize="14px" lineHeight="1.65">
                    {t(`${item.key}.outcome`)}
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          ))}
        </Box>

        <Grid templateColumns={{ base: '1fr', md: '0.45fr 1fr' }} gap={{ base: 7, md: 16 }} pt={{ base: 16, md: 24 }}>
          <Text color="band.accent" fontFamily="mono" fontSize="11px" letterSpacing="0.1em" textTransform="uppercase">
            {t('about.capabilities')}
          </Text>
          <Box>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} borderTop="1px solid" borderColor="band.line">
              {CAPABILITIES.map((capability, index) => (
                <Box
                  key={capability}
                  py={{ base: 7, md: 9 }}
                  pr={{ base: 0, md: index % 2 === 0 ? 9 : 0 }}
                  pl={{ base: 0, md: index % 2 === 1 ? 9 : 0 }}
                  borderBottom="1px solid"
                  borderLeft={{ base: 'none', md: index % 2 === 1 ? '1px solid' : 'none' }}
                  borderColor="band.line"
                >
                  <Text color="band.accent" fontFamily="mono" fontSize="10px" mb={5}>
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                  <Text fontFamily="heading" fontSize={{ base: '30px', md: '36px' }} fontWeight="700" lineHeight="1">
                    {t(`${capability}.title`)}
                  </Text>
                  <Text color="band.muted" fontSize="14px" lineHeight="1.65" mt={4}>
                    {t(`${capability}.detail`)}
                  </Text>
                </Box>
              ))}
            </Grid>

            <Grid templateColumns={{ base: '1fr', md: '0.45fr 1fr' }} gap={6} mt={12}>
              <Text color="band.accent" fontFamily="mono" fontSize="10px" letterSpacing="0.08em" textTransform="uppercase">
                {t('about.education')}
              </Text>
              <Box>
                <Text fontFamily="heading" fontSize={{ base: '28px', md: '36px' }} fontWeight="700">
                  {t('education.title')}
                </Text>
                <Text color="band.muted" fontSize="14px" mt={1}>
                  {t('education.detail')}
                </Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
