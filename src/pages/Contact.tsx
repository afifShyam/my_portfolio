import { Box, Container, Flex, Grid, Link, Text } from '@chakra-ui/react';
import { useLocale } from '../localization';

const CONTACT_LINKS = [
  { index: '01', key: 'contact.email', detail: 'contact.emailDetail', href: 'mailto:Afifshyamsul00@gmail.com' },
  { index: '02', key: 'contact.linkedin', detail: 'contact.linkedinDetail', href: 'https://www.linkedin.com/in/afif-shyamsul-1333bb279/' },
  { index: '03', key: 'contact.github', detail: 'contact.githubDetail', href: 'https://github.com/afifShyam' },
  { index: '04', key: 'contact.resume', detail: 'contact.resumeDetail', href: '/Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf' },
];

const Contact: React.FC = () => {
  const { t } = useLocale();

  return (
    <Box bg="accent.strong" color="#f1efe9" py={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 8 }}>
        <Flex justify="space-between" align="center" pb={5} borderBottom="1px solid" borderColor="rgba(241,239,233,0.36)">
          <Text fontFamily="mono" fontSize="11px" letterSpacing="0.1em" textTransform="uppercase">
            {t('contact.label')}
          </Text>
          <Text fontFamily="mono" fontSize="10px" letterSpacing="0.08em" textTransform="uppercase">
            {t('contact.availability')}
          </Text>
        </Flex>

        <Grid templateColumns={{ base: '1fr', lg: '1.18fr 0.82fr' }} gap={{ base: 14, lg: 20 }} py={{ base: 12, md: 18 }}>
          <Box>
            <Box
              as="h2"
              m={0}
              fontFamily="heading"
              fontSize={{ base: '64px', sm: '80px', md: '106px', xl: '126px' }}
              fontWeight="800"
              letterSpacing="-0.04em"
              lineHeight="0.78"
              textTransform="uppercase"
            >
              {t('contact.heading.1')}
              <br />
              {t('contact.heading.2')}
              <br />
              {t('contact.heading.3')}
            </Box>
            <Text fontSize={{ base: '16px', md: '19px' }} lineHeight="1.7" maxW="620px" mt={9} color="rgba(241,239,233,0.82)">
              {t('contact.description')}
            </Text>
          </Box>

          <Box alignSelf="end">
            {CONTACT_LINKS.map((item) => (
              <Link
                key={item.index}
                href={item.href}
                isExternal={item.href.startsWith('http') || item.href.endsWith('.pdf')}
                display="grid"
                gridTemplateColumns={{ base: '42px 1fr auto', md: '56px 1fr auto' }}
                gap={4}
                alignItems="center"
                py={5}
                borderTop="1px solid"
                borderColor="rgba(241,239,233,0.36)"
                _hover={{ color: '#0d0d0d', textDecoration: 'none', borderColor: '#0d0d0d' }}
              >
                <Text fontFamily="mono" fontSize="9px">
                  {item.index}
                </Text>
                <Box>
                  <Text fontFamily="heading" fontSize={{ base: '26px', md: '32px' }} fontWeight="700" lineHeight="1">
                    {t(item.key)}
                  </Text>
                  <Text fontSize="12px" mt={1} opacity={0.82}>
                    {t(item.detail)}
                  </Text>
                </Box>
                <Text fontFamily="mono" fontSize="16px">
                  ↗
                </Text>
              </Link>
            ))}
            <Box borderTop="1px solid" borderColor="rgba(241,239,233,0.36)" />
          </Box>
        </Grid>

        <Flex
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          gap={3}
          pt={5}
          borderTop="1px solid"
          borderColor="rgba(241,239,233,0.36)"
          fontFamily="mono"
          fontSize="9px"
          letterSpacing="0.07em"
          textTransform="uppercase"
        >
          <Text>© {new Date().getFullYear()} Afif Shyamsul Syahiran</Text>
          <Text>{t('contact.footer')}</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
