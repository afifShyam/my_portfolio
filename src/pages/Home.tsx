import {
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
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
import MaskedTextReveal from '../components/MaskedTextReveal';
import RollingLabel from '../components/RollingLabel';
const PROOF = [
  { value: '03+', label: 'home.proof.1' },
  { value: '20+', label: 'home.proof.2' },
  { value: '~90%', label: 'home.proof.3' },
  { value: 'END–TO–END', label: 'home.proof.4' },
];

const MetricCounter: React.FC<{ value: string; isVisible: boolean }> = ({ value, isVisible }) => {
  const [displayValue, setDisplayValue] = useState(() => {
    const match = value.match(/^([~]?)([0-9]+)([%+]?)$/);
    if (!match) return value;
    const prefix = match[1] || '';
    const suffix = match[3] || '';
    const padLength = match[2].length;
    return `${prefix}${'0'.repeat(padLength)}${suffix}`;
  });

  useEffect(() => {
    if (!isVisible) return;

    const match = value.match(/^([~]?)([0-9]+)([%+]?)$/);
    if (!match) return;

    const prefix = match[1] || '';
    const target = parseInt(match[2], 10);
    const suffix = match[3] || '';
    const padLength = match[2].length;

    let startTime: number | null = null;
    const duration = 1400;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Fast start, smooth spring deceleration (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(ease * target);
      const formatted = String(current).padStart(padLength, '0');
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, isVisible]);

  return <>{displayValue}</>;
};

interface HomeProps {
  scrollToPortfolio: () => void;
}

export const Home: React.FC<HomeProps> = ({ scrollToPortfolio }) => {
  const { t } = useLocale();
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const proofRef = useRef<HTMLDivElement | null>(null);
  const [proofVisible, setProofVisible] = useState(false);

  useEffect(() => {
    const el = proofRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProofVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0, active: false });
  }, []);

  return (
    <Box id="home" pt={{ base: '132px', md: '152px' }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 8 }}>
        {/* Availability Strip with Live Radar Pulse */}
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
            <Box position="relative" w="8px" h="8px">
              <Box
                position="absolute"
                inset={0}
                borderRadius="full"
                bg="accent"
                animation="radar-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite"
              />
              <Box position="relative" w="8px" h="8px" borderRadius="full" bg="accent" />
            </Box>
            <Text textTransform="uppercase">{t('home.availability')}</Text>
          </HStack>
          <Text color="text.muted" fontFamily="mono" fontSize="10px" letterSpacing="0.08em" textTransform="uppercase">
            {t('home.location')}
          </Text>
        </Flex>

        {/* Hero Grid */}
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
              <MaskedTextReveal
                lines={[t('home.heading.1'), t('home.heading.2'), t('home.heading.3')]}
                accentLineIndex={2}
                accessibleHeading={`${t('home.heading.1')} ${t('home.heading.2')} ${t('home.heading.3')}`}
              />
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
                <RollingLabel>{t('home.viewWork').toUpperCase()}</RollingLabel>
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
                <RollingLabel>{t('nav.resume').toUpperCase()}</RollingLabel> ↗
              </Button>
            </Flex>

            <HStack spacing={6} mt={8} color="text.muted" fontFamily="mono" fontSize="10px" letterSpacing="0.06em">
              <Link href="https://github.com/afifShyam" isExternal _hover={{ color: 'accent' }}>
                <RollingLabel>{t('home.github').toUpperCase()}</RollingLabel>
              </Link>
              <Link href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/" isExternal _hover={{ color: 'accent' }}>
                <RollingLabel>{t('home.linkedin').toUpperCase()}</RollingLabel>
              </Link>
            </HStack>
          </GridItem>
          {/* Interactive 3D Parallax Hardware Stage */}
          <GridItem minW={0}>
            <Box
              position="relative"
              h={{ base: '520px', sm: '580px', lg: '640px' }}
              bg="accent.strong"
              overflow="hidden"
              border="1px solid"
              borderColor="accent.soft"
              cursor="default"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
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
                userSelect="none"
              >
                {t('home.shipped').toUpperCase()}
              </Text>

              {/* Layer 1: Front Device (TuxC) with high parallax depth */}
              <Image
                src={tuxcPreview}
                alt="TuxC Wallet production application"
                position="absolute"
                zIndex={3}
                left={{ base: '2%', sm: '3%', lg: '4%' }}
                top={{ base: '8%', sm: '6%', lg: '6%' }}
                w={{ base: '58%', sm: '54%', lg: '54%' }}
                maxH={{ base: '84%', sm: '86%', lg: '88%' }}
                objectFit="contain"
                filter="drop-shadow(0 24px 38px rgba(0, 0, 0, 0.45))"
                animation={tilt.active ? 'none' : 'editorial-float 6.4s ease-in-out infinite'}
                willChange="transform, filter"
                style={{
                  transform: tilt.active
                    ? `translate3d(${tilt.x * -24}px, ${tilt.y * -18}px, 0) rotateY(${tilt.x * 8}deg) rotateX(${tilt.y * -8}deg)`
                    : undefined,
                  transition: tilt.active ? 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1), filter 180ms ease' : 'transform 400ms ease, filter 180ms ease',
                }}
                _hover={{ filter: 'drop-shadow(0 30px 48px rgba(0, 0, 0, 0.55)) brightness(1.06)' }}
              />

              {/* Layer 2: Mid Device (SMS) with medium parallax depth */}
              <Image
                src={smsPreview}
                alt="Service Management System mobile application"
                position="absolute"
                zIndex={2}
                right={{ base: '2%', sm: '3%', lg: '4%' }}
                top={{ base: '8%', sm: '7%', lg: '7%' }}
                w={{ base: '48%', sm: '46%', lg: '45%' }}
                maxH={{ base: '70%', sm: '72%', lg: '74%' }}
                objectFit="contain"
                filter="drop-shadow(0 20px 34px rgba(0, 0, 0, 0.4))"
                animation={tilt.active ? 'none' : 'editorial-float-soft 7.2s ease-in-out -1.4s infinite'}
                willChange="transform, filter"
                style={{
                  transform: tilt.active
                    ? `translate3d(${tilt.x * -14}px, ${tilt.y * -10}px, 0) rotateY(${tilt.x * 5}deg) rotateX(${tilt.y * -5}deg)`
                    : undefined,
                  transition: tilt.active ? 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1), filter 180ms ease' : 'transform 400ms ease, filter 180ms ease',
                }}
                _hover={{ filter: 'drop-shadow(0 26px 42px rgba(0, 0, 0, 0.5)) brightness(1.06)' }}
              />

              {/* Layer 3: Back Device (Sigma) with subtle background depth */}
              <Image
                src={sigmaPreview}
                alt="Sigma enterprise procurement application"
                position="absolute"
                zIndex={1}
                right={{ base: '4%', sm: '6%', lg: '6%' }}
                bottom={{ base: '4%', sm: '4%', lg: '4%' }}
                w={{ base: '42%', sm: '40%', lg: '38%' }}
                maxH={{ base: '42%', sm: '44%', lg: '45%' }}
                objectFit="contain"
                filter="drop-shadow(0 18px 30px rgba(0, 0, 0, 0.38))"
                animation={tilt.active ? 'none' : 'editorial-float 5.8s ease-in-out -2.2s infinite'}
                willChange="transform, filter"
                style={{
                  transform: tilt.active
                    ? `translate3d(${tilt.x * -7}px, ${tilt.y * -5}px, 0) rotateY(${tilt.x * 2.5}deg) rotateX(${tilt.y * -2.5}deg)`
                    : undefined,
                  transition: tilt.active ? 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1), filter 180ms ease' : 'transform 400ms ease, filter 180ms ease',
                }}
                _hover={{ filter: 'drop-shadow(0 24px 36px rgba(0, 0, 0, 0.48)) brightness(1.06)' }}
              />
            </Box>
          </GridItem>
        </Grid>

        {/* Proof Metrics Strip with Spring Odometer Animation */}
        <Grid
          ref={proofRef}
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
                <MetricCounter value={item.value} isVisible={proofVisible} />
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
