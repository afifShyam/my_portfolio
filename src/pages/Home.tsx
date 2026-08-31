import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import tuxcPreview from '../assets/tuxc_preview.png';
import sigmaPreview from '../assets/sigma_home_preview.png';
import smsPreview from '../assets/sms_tickets_preview.png';
import { useLocale } from '../localization';

const PROOF = [
  { value: '03+', label: 'home.proof.1' },
  { value: '20+', label: 'home.proof.2' },
  { value: '~90%', label: 'home.proof.3' },
  { value: 'END–TO–END', label: 'home.proof.4' },
];

interface HomeProps {
  scrollToPortfolio: () => void;
}

export const Home: React.FC<HomeProps> = ({ scrollToPortfolio }) => {
  const { t } = useLocale();

  return (
    <Box id="home" pt={{ base: '132px', md: '152px' }} pb={{ base: 16, md: 24 }}>
    <Container maxW="1440px" px={{ base: 5, md: 8 }}>
      <Flex
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        gap={3}
        pb={5}
        borderBottom="1px solid"
        borderColor="line"
      >
        <HStack spacing={3} color="text.muted" fontFamily="mono" fontSize="10px" letterSpacing="0.08em">
          <Box w="8px" h="8px" bg="accent" />
          <Text textTransform="uppercase">{t('home.availability')}</Text>
        </HStack>
        <Text color="text.muted" fontFamily="mono" fontSize="10px" letterSpacing="0.08em" textTransform="uppercase">
          {t('home.location')}
        </Text>
      </Flex>

      <Grid
        templateColumns={{ base: '1fr', lg: 'minmax(0, 1.05fr) minmax(420px, 0.95fr)' }}
        gap={{ base: 14, lg: 10, xl: 16 }}
        alignItems="center"
        py={{ base: 12, md: 18, lg: 20 }}
      >
        <GridItem minW={0}>
          <Text color="accent" fontFamily="mono" fontSize="11px" letterSpacing="0.12em" mb={5} textTransform="uppercase">
            {t('home.eyebrow')}
          </Text>
          <Box
            as="h1"
            m={0}
            color="text.primary"
            fontFamily="heading"
            fontSize={{ base: '64px', sm: '82px', md: '112px', lg: '100px', xl: '128px' }}
            fontWeight="800"
            lineHeight="0.78"
            letterSpacing="-0.035em"
            textTransform="uppercase"
          >
            {t('home.heading.1')}
            <br />
            {t('home.heading.2')}
            <br />
            <Box as="span" color="accent">
              {t('home.heading.3')}
            </Box>
          </Box>

          <Text
            color="text.secondary"
            fontSize={{ base: '17px', md: '19px' }}
            lineHeight="1.65"
            maxW="620px"
            mt={{ base: 8, md: 10 }}
          >
            {t('home.description')}
          </Text>

          <Flex wrap="wrap" gap={{ base: 4, md: 6 }} mt={8} align="center">
            <Button
              onClick={scrollToPortfolio}
              bg="accent"
              color="accent.contrast"
              borderRadius={0}
              h="52px"
              px={6}
              fontFamily="mono"
              fontSize="11px"
              letterSpacing="0.06em"
              _hover={{ bg: 'accent.soft', color: 'ink.900' }}
            >
              {t('home.viewWork').toUpperCase()}
            </Button>
            <Button
              as="a"
              href="/Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              borderColor="line"
              borderRadius={0}
              h="52px"
              px={6}
              color="text.primary"
              fontFamily="mono"
              fontSize="11px"
              letterSpacing="0.06em"
              _hover={{ borderColor: 'accent', color: 'accent' }}
            >
              {t('nav.resume').toUpperCase()} ↗
            </Button>
          </Flex>

          <HStack spacing={6} mt={8} color="text.muted" fontFamily="mono" fontSize="10px" letterSpacing="0.06em">
            <Link href="https://github.com/afifShyam" isExternal _hover={{ color: 'accent' }}>
              {t('home.github').toUpperCase()}
            </Link>
            <Link href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/" isExternal _hover={{ color: 'accent' }}>
              {t('home.linkedin').toUpperCase()}
            </Link>
          </HStack>
        </GridItem>

        <GridItem minW={0}>
          <Box
            position="relative"
            h={{ base: '530px', sm: '620px', lg: '680px' }}
            bg="accent.strong"
            overflow="hidden"
            border="1px solid"
            borderColor="accent.soft"
          >
            <Text
              position="absolute"
              top={5}
              left={5}
              zIndex={4}
              color="accent.contrast"
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.1em"
            >
              {t('home.production').toUpperCase()}
            </Text>
            <Text
              position="absolute"
              left={{ base: '4%', sm: '4%' }}
              bottom="-18px"
              color="rgba(241, 239, 233, 0.12)"
              fontFamily="heading"
              fontSize={{ base: '64px', sm: '120px' }}
              fontWeight="900"
              lineHeight="0.78"
              letterSpacing="-0.04em"
              textTransform="uppercase"
              whiteSpace="nowrap"
            >
              {t('home.shipped').toUpperCase()}
            </Text>

            <Image
              src={tuxcPreview}
              alt="TuxC Wallet production application"
              position="absolute"
              zIndex={3}
              left={{ base: '3%', sm: '4%' }}
              top={{ base: '10%', sm: '8%' }}
              w={{ base: '52%', sm: '50%' }}
              maxH="74%"
              objectFit="contain"
              bg="ink.900"
              border="1px solid"
              borderColor="rgba(241,239,233,0.35)"
              boxShadow="24px 28px 60px rgba(0,0,0,0.38)"
              animation="editorial-float 6.4s ease-in-out infinite"
              willChange="transform"
              transition="filter 180ms ease"
              _hover={{ filter: 'brightness(1.08)' }}
            />
            <Image
              src={smsPreview}
              alt="Service Management System mobile application"
              position="absolute"
              zIndex={2}
              right={{ base: '3%', sm: '5%' }}
              top={{ base: '13%', sm: '12%' }}
              w={{ base: '43%', sm: '42%' }}
              maxH="52%"
              objectFit="contain"
              bg="paper.50"
              border="1px solid"
              borderColor="rgba(241,239,233,0.45)"
              boxShadow="18px 24px 48px rgba(0,0,0,0.32)"
              animation="editorial-float-soft 7.2s ease-in-out -1.4s infinite"
              willChange="transform"
              transition="filter 180ms ease"
              _hover={{ filter: 'brightness(1.08)' }}
            />
            <Image
              src={sigmaPreview}
              alt="Sigma enterprise procurement application"
              position="absolute"
              zIndex={1}
              right={{ base: '6%', sm: '9%' }}
              bottom={{ base: '5%', sm: '6%' }}
              w={{ base: '34%', sm: '32%' }}
              maxH="29%"
              objectFit="contain"
              bg="ink.800"
              border="1px solid"
              borderColor="rgba(241,239,233,0.3)"
              boxShadow="14px 20px 40px rgba(0,0,0,0.3)"
              animation="editorial-float 5.8s ease-in-out -2.2s infinite"
              willChange="transform"
              transition="filter 180ms ease"
              _hover={{ filter: 'brightness(1.08)' }}
            />
          </Box>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="line"
      >
        {PROOF.map((item, index) => (
          <VStack
            key={item.label}
            align="flex-start"
            spacing={2}
            py={{ base: 6, md: 8 }}
            px={{ base: 0, md: 6 }}
            pr={{ base: index % 2 === 0 ? 4 : 0, md: 6 }}
            borderRight={{ base: index % 2 === 0 ? '1px solid' : 'none', lg: index < 3 ? '1px solid' : 'none' }}
            borderBottom={{ base: index < 2 ? '1px solid' : 'none', lg: 'none' }}
            borderColor="line"
          >
            <Text
              color={index === 3 ? 'text.primary' : 'accent'}
              fontFamily="heading"
              fontSize={{ base: '28px', md: '38px' }}
              fontWeight="700"
              lineHeight="1"
            >
              {item.value}
            </Text>
            <Text color="text.muted" fontFamily="mono" fontSize="9px" letterSpacing="0.06em" textTransform="uppercase">
              {t(item.label)}
            </Text>
          </VStack>
        ))}
      </Grid>
    </Container>
  </Box>
  );
};

export default Home;
