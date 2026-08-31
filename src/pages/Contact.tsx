import { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useLocale } from '../localization';

const EMAIL_ADDRESS = 'Afifshyamsul00@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/afif-shyamsul-1333bb279/';
const GITHUB_URL = 'https://github.com/afifShyam';
const RESUME_URL = '/Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf';

interface InquiryTemplate {
  key: string;
  subject: string;
  body: string;
}

const INQUIRY_TEMPLATES: InquiryTemplate[] = [
  {
    key: 'contact.inquiry.fulltime',
    subject: 'Mobile Software Engineer Role - Inquiry for Afif Shyamsul',
    body: 'Hi Afif,\n\nWe came across your mobile engineering portfolio and are interested in discussing a Mobile Software Engineer opportunity with our team.\n\nRole details:\n- Company:\n- Location / Remote policy:\n- Key requirements:\n\nLooking forward to connecting!',
  },
  {
    key: 'contact.inquiry.project',
    subject: 'Flutter Mobile App Project - Consultation Request',
    body: 'Hi Afif,\n\nI have a mobile app project and would like to discuss engineering delivery / architecture with you.\n\nProject scope:\n- Target platform (iOS / Android / Flutter):\n- Key features / timeline:\n\nBest regards,',
  },
  {
    key: 'contact.inquiry.consult',
    subject: 'Codebase Audit / Flutter Native Migration Inquiry',
    body: 'Hi Afif,\n\nWe are looking to review/migrate our existing mobile architecture and would like to consult on performance tuning and Clean Architecture implementation.\n\nBest regards,',
  },
];

export const Contact: React.FC = () => {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
      } else {
        const input = document.createElement('input');
        input.value = EMAIL_ADDRESS;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box id="contact" as="section" bg="accent.strong" color="#f1efe9" py={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 8 }}>
        {/* Top Header Rail */}
        <Flex
          justify="space-between"
          align={{ base: 'flex-start', sm: 'center' }}
          direction={{ base: 'column', sm: 'row' }}
          gap={3}
          pb={6}
          borderBottom="1px solid"
          borderColor="rgba(241, 239, 233, 0.32)"
        >
          <Text fontFamily="mono" fontSize="11px" letterSpacing="0.1em" textTransform="uppercase">
            {t('contact.label')}
          </Text>
          <HStack
            spacing={2}
            bg="rgba(0, 0, 0, 0.22)"
            px={3.5}
            py={1.5}
            borderRadius="full"
            border="1px solid"
            borderColor="rgba(241, 239, 233, 0.2)"
          >
            <Box position="relative" w="8px" h="8px">
              <Box
                position="absolute"
                inset={0}
                borderRadius="full"
                bg="#4ade80"
                animation="radar-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite"
              />
              <Box
                position="relative"
                w="8px"
                h="8px"
                borderRadius="full"
                bg="#4ade80"
                boxShadow="0 0 8px rgba(74, 222, 128, 0.8)"
              />
            </Box>
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="#f1efe9"
            >
              {t('contact.availability')}
            </Text>
          </HStack>
        </Flex>

        {/* Main Grid */}
        <Grid
          templateColumns={{ base: '1fr', lg: '1.15fr 0.85fr' }}
          gap={{ base: 12, lg: 16 }}
          py={{ base: 12, md: 16 }}
        >
          {/* Left Column: Heading + Description + Quick Inquiries + Logistics */}
          <VStack align="flex-start" spacing={{ base: 8, md: 10 }}>
            <Box>
              <Box
                as="h2"
                m={0}
                fontFamily="heading"
                fontSize={{ base: '56px', sm: '76px', md: '96px', xl: '116px' }}
                fontWeight="800"
                letterSpacing="-0.04em"
                lineHeight="0.82"
                textTransform="uppercase"
              >
                {t('contact.heading.1')}
                <br />
                {t('contact.heading.2')}
                <br />
                <Box as="span" color="rgba(241, 239, 233, 0.65)">
                  {t('contact.heading.3')}
                </Box>
              </Box>
              <Text
                fontSize={{ base: '16px', md: '18px' }}
                lineHeight="1.7"
                maxW="600px"
                mt={6}
                color="rgba(241, 239, 233, 0.88)"
              >
                {t('contact.description')}
              </Text>
            </Box>

            {/* Quick Inquiry Templates */}
            <Box w="full" maxW="600px">
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="rgba(241, 239, 233, 0.6)"
                mb={3}
              >
                {t('contact.inquiry.title')}
              </Text>
              <Flex wrap="wrap" gap={2}>
                {INQUIRY_TEMPLATES.map((item) => (
                  <Link
                    key={item.key}
                    href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(item.subject)}&body=${encodeURIComponent(item.body)}`}
                    bg="rgba(0, 0, 0, 0.2)"
                    color="#f1efe9"
                    px={3.5}
                    py={2}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="rgba(241, 239, 233, 0.22)"
                    fontSize="12px"
                    fontFamily="mono"
                    fontWeight="500"
                    transition="all 160ms ease"
                    _hover={{
                      bg: '#0d0d0d',
                      color: '#ffffff',
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                      transform: 'translateY(-1px)',
                      textDecoration: 'none',
                    }}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </Flex>
            </Box>

            {/* Availability & Logistics Dossier Card */}
            <Box
              w="full"
              maxW="600px"
              bg="rgba(0, 0, 0, 0.22)"
              border="1px solid"
              borderColor="rgba(241, 239, 233, 0.24)"
              borderRadius="xl"
              p={{ base: 5, sm: 6 }}
            >
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="rgba(241, 239, 233, 0.6)"
                mb={4}
              >
                {t('contact.status.title')}
              </Text>
              <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
                <Box>
                  <Text fontFamily="mono" fontSize="9px" color="rgba(241, 239, 233, 0.5)" textTransform="uppercase">
                    Location & Timezone
                  </Text>
                  <Text fontSize="13px" fontWeight="600" mt={0.5} color="#f1efe9">
                    {t('contact.status.location')}
                  </Text>
                </Box>
                <Box>
                  <Text fontFamily="mono" fontSize="9px" color="rgba(241, 239, 233, 0.5)" textTransform="uppercase">
                    Turnaround
                  </Text>
                  <Text fontSize="13px" fontWeight="600" mt={0.5} color="#f1efe9">
                    {t('contact.status.response')}
                  </Text>
                </Box>
                <GridItem colSpan={{ base: 1, sm: 2 }}>
                  <Text fontFamily="mono" fontSize="9px" color="rgba(241, 239, 233, 0.5)" textTransform="uppercase">
                    Engagement Scope
                  </Text>
                  <Text fontSize="13px" fontWeight="600" mt={0.5} color="#f1efe9">
                    {t('contact.status.openTo')}
                  </Text>
                </GridItem>
              </Grid>
            </Box>
          </VStack>

          {/* Right Column: Interactive Channel Rows */}
          <Box alignSelf={{ base: 'flex-start', lg: 'center' }} w="full">
            {/* Email Channel Card */}
            <Box
              bg="rgba(0, 0, 0, 0.24)"
              border="1px solid"
              borderColor={copied ? '#4ade80' : 'rgba(241, 239, 233, 0.32)'}
              borderRadius="xl"
              p={{ base: 5, sm: 6 }}
              mb={4}
              transition="all 180ms ease"
            >
              <Flex justify="space-between" align="center" mb={2}>
                <Text fontFamily="mono" fontSize="10px" color="rgba(241, 239, 233, 0.6)" letterSpacing="0.08em">
                  01 / {t('contact.email').toUpperCase()}
                </Text>
                <HStack spacing={2}>
                  <Box
                    as="button"
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    bg={copied ? '#4ade80' : 'rgba(241, 239, 233, 0.15)'}
                    color={copied ? '#090909' : '#f1efe9'}
                    fontSize="11px"
                    fontFamily="mono"
                    fontWeight="600"
                    px={3}
                    py={1}
                    borderRadius="md"
                    border="1px solid"
                    borderColor={copied ? '#4ade80' : 'rgba(241, 239, 233, 0.3)'}
                    transition="all 160ms ease"
                    _hover={{
                      bg: copied ? '#4ade80' : '#ffffff',
                      color: '#090909',
                      borderColor: '#ffffff',
                    }}
                  >
                    {copied ? t('contact.copied') : t('contact.copyEmail')}
                  </Box>
                  <Link
                    href={`mailto:${EMAIL_ADDRESS}`}
                    bg="rgba(241, 239, 233, 0.15)"
                    color="#f1efe9"
                    fontSize="11px"
                    fontFamily="mono"
                    fontWeight="600"
                    px={3}
                    py={1}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="rgba(241, 239, 233, 0.3)"
                    _hover={{
                      bg: '#ffffff',
                      color: '#090909',
                      borderColor: '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    {t('contact.compose')}
                  </Link>
                </HStack>
              </Flex>
              <Text
                fontFamily="heading"
                fontSize={{ base: '22px', sm: '28px', md: '32px' }}
                fontWeight="700"
                lineHeight="1.1"
                wordBreak="break-word"
              >
                {EMAIL_ADDRESS}
              </Text>
            </Box>

            {/* LinkedIn Channel */}
            <Link
              href={LINKEDIN_URL}
              isExternal
              display="block"
              bg="rgba(0, 0, 0, 0.18)"
              border="1px solid"
              borderColor="rgba(241, 239, 233, 0.24)"
              borderRadius="xl"
              p={{ base: 5, sm: 6 }}
              mb={4}
              transition="all 180ms ease"
              _hover={{
                bg: '#0d0d0d',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.6)',
                transform: 'translateY(-2px)',
                textDecoration: 'none',
              }}
            >
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontFamily="mono" fontSize="10px" opacity={0.65} letterSpacing="0.08em">
                    02 / LINKEDIN
                  </Text>
                  <Text fontFamily="heading" fontSize={{ base: '24px', sm: '28px' }} fontWeight="700" mt={1}>
                    {t('contact.linkedin')}
                  </Text>
                  <Text fontSize="12px" opacity={0.8} mt={1}>
                    {t('contact.linkedinDetail')}
                  </Text>
                </Box>
                <Text fontFamily="mono" fontSize="22px" opacity={0.8} pr={2}>
                  ↗
                </Text>
              </Flex>
            </Link>

            {/* GitHub Channel */}
            <Link
              href={GITHUB_URL}
              isExternal
              display="block"
              bg="rgba(0, 0, 0, 0.18)"
              border="1px solid"
              borderColor="rgba(241, 239, 233, 0.24)"
              borderRadius="xl"
              p={{ base: 5, sm: 6 }}
              mb={4}
              transition="all 180ms ease"
              _hover={{
                bg: '#0d0d0d',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.6)',
                transform: 'translateY(-2px)',
                textDecoration: 'none',
              }}
            >
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontFamily="mono" fontSize="10px" opacity={0.65} letterSpacing="0.08em">
                    03 / GITHUB
                  </Text>
                  <Text fontFamily="heading" fontSize={{ base: '24px', sm: '28px' }} fontWeight="700" mt={1}>
                    {t('contact.github')}
                  </Text>
                  <Text fontSize="12px" opacity={0.8} mt={1}>
                    {t('contact.githubDetail')}
                  </Text>
                </Box>
                <Text fontFamily="mono" fontSize="22px" opacity={0.8} pr={2}>
                  ↗
                </Text>
              </Flex>
            </Link>

            {/* Résumé Channel */}
            <Link
              href={RESUME_URL}
              isExternal
              display="block"
              bg="rgba(0, 0, 0, 0.18)"
              border="1px solid"
              borderColor="rgba(241, 239, 233, 0.24)"
              borderRadius="xl"
              p={{ base: 5, sm: 6 }}
              transition="all 180ms ease"
              _hover={{
                bg: '#0d0d0d',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.6)',
                transform: 'translateY(-2px)',
                textDecoration: 'none',
              }}
            >
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontFamily="mono" fontSize="10px" opacity={0.65} letterSpacing="0.08em">
                    04 / RÉSUMÉ
                  </Text>
                  <Text fontFamily="heading" fontSize={{ base: '24px', sm: '28px' }} fontWeight="700" mt={1}>
                    {t('contact.resume')}
                  </Text>
                  <Text fontSize="12px" opacity={0.8} mt={1}>
                    {t('contact.resumeDetail')}
                  </Text>
                </Box>
                <Text fontFamily="mono" fontSize="22px" opacity={0.8} pr={2}>
                  ↗
                </Text>
              </Flex>
            </Link>
          </Box>
        </Grid>

        {/* Bottom Footer Rail */}
        <Flex
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          gap={3}
          pt={6}
          borderTop="1px solid"
          borderColor="rgba(241, 239, 233, 0.32)"
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.07em"
          textTransform="uppercase"
        >
          <Text>© {new Date().getFullYear()} Afif Shyamsul Syahiran</Text>
          <Text color="rgba(241, 239, 233, 0.75)">{t('contact.footer')}</Text>
          <Box
            as="button"
            onClick={scrollToTop}
            color="rgba(241, 239, 233, 0.85)"
            _hover={{ color: '#ffffff', textDecoration: 'underline' }}
          >
            {t('contact.backToTop')}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
