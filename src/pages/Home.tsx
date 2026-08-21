import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Image,
  Container,
  HStack,
  Badge,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Icon,
  Grid,
  GridItem,
  useToast,
  Tooltip,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ResumePreviewModal from '../components/ResumePreviewModal';
import { FiArrowRight, FiDownload, FiGithub, FiShield, FiSmartphone, FiZap, FiCopy, FiCheck } from 'react-icons/fi';

// Import local logos
import DartLogo from '../assets/dart-logo.png';
import FlutterLogo from '../assets/flutter-logo.png';

const MotionBox = motion.create(Box);

const HIGHLIGHT_STATS = [
  { label: 'Years in mobile delivery', value: '2+' },
  { label: 'Featured apps', value: '5' },
  { label: 'Frontend lead role', value: '1' },
  { label: 'Production releases', value: '10+' },
];

const DELIVERY_POINTS = [
  { icon: FiSmartphone, label: 'Built production mobile apps with Flutter, Dart, Firebase, & REST APIs.' },
  { icon: FiZap, label: 'Architected responsive, 60fps UI and smooth reactive state flows.' },
  { icon: FiShield, label: 'Led frontend release cycles to Google Play Store & Apple App Store.' },
];

const CORE_FOCUS = ['Flutter', 'Dart', 'Riverpod', 'BLoC Pattern', 'Firebase', 'Clean Architecture', 'REST APIs', 'App Performance'];

const HERO_PILLS = [
  { name: 'Flutter', color: 'cyan' },
  { name: 'Dart', color: 'blue' },
  { name: 'Riverpod & BLoC', color: 'teal' },
  { name: 'Crypto & DApps', color: 'purple' },
  { name: 'Firebase', color: 'orange' },
];

interface HomeProps {
  scrollToPortfolio: () => void;
}

const Home: React.FC<HomeProps> = ({ scrollToPortfolio }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const toast = useToast();

  const accentColor = useColorModeValue('brand.600', 'cyan.400');
  const mutedColor = useColorModeValue('neutral.600', 'gray.300');
  const surfaceColor = useColorModeValue('rgba(255, 255, 255, 0.92)', 'rgba(15, 23, 42, 0.78)');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const logoBg = useColorModeValue('white', 'whiteAlpha.100');
  const highlightValueColor = useColorModeValue('neutral.900', 'white');
  const sectionBg = useColorModeValue(
    'linear-gradient(135deg, #f8fafc 0%, #edf4fc 42%, #f8fafc 100%)',
    'linear-gradient(135deg, #090d16 0%, #0f172a 55%, #131b2e 100%)'
  );
  const panelBg = useColorModeValue('rgba(255, 255, 255, 0.88)', 'rgba(15, 23, 42, 0.82)');
  const railBg = useColorModeValue('rgba(248, 250, 252, 0.95)', 'rgba(15, 23, 42, 0.6)');
  const patternColor = useColorModeValue('rgba(37, 99, 235, 0.05)', 'rgba(34, 211, 238, 0.05)');
  const focusBadgeBg = useColorModeValue('cyan.50', 'whiteAlpha.100');

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "Flutter Mobile Developer",
        "Frontend Lead on TuxC Wallet",
        "Riverpod & BLoC Specialist",
        "Clean Architecture Enthusiast",
        "Building Fast & Scalable Apps"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1900,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('afifshyamsul12@gmail.com');
    setCopiedEmail(true);
    toast({
      title: 'Email Copied!',
      description: 'afifshyamsul12@gmail.com copied to clipboard.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <Box
      id="home"
      bg={sectionBg}
      bgImage={`linear-gradient(${patternColor} 1px, transparent 1px), linear-gradient(90deg, ${patternColor} 1px, transparent 1px)`}
      bgSize="48px 48px"
      position="relative"
      overflow="hidden"
      pt={{ base: 24, md: 28 }}
      pb={{ base: 16, md: 24 }}
    >
      {/* Ambient Glowing Orbs */}
      <MotionBox
        position="absolute"
        top="5%"
        left="-4%"
        w={{ base: "260px", md: "460px" }}
        h={{ base: "260px", md: "460px" }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.03) 70%, transparent 100%)"
        filter="blur(50px)"
        pointerEvents="none"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        right="-4%"
        w={{ base: "240px", md: "420px" }}
        h={{ base: "240px", md: "420px" }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(59, 130, 246, 0.03) 70%, transparent 100%)"
        filter="blur(50px)"
        pointerEvents="none"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: '1fr', lg: 'minmax(0, 1.15fr) minmax(360px, 0.85fr)' }}
          alignItems="center"
          gap={{ base: 10, lg: 12 }}
        >
          <GridItem>
            <VStack align="flex-start" spacing={5} maxW="3xl">
              {/* Availability Status Pill */}
              <HStack
                bg={useColorModeValue('white', 'rgba(15, 23, 42, 0.75)')}
                border="1px solid"
                borderColor={useColorModeValue('rgba(148, 163, 184, 0.3)', 'rgba(255, 255, 255, 0.15)')}
                backdropFilter="blur(12px)"
                px={3.5}
                py={1.5}
                borderRadius="full"
                spacing={2.5}
                boxShadow={useColorModeValue('0 2px 8px rgba(0,0,0,0.04)', '0 4px 12px rgba(0,0,0,0.2)')}
              >
                <Box w="8px" h="8px" borderRadius="full" bg="emerald.400" className="animate-glow" />
                <Text fontSize="xs" fontWeight="semibold" color={useColorModeValue('neutral.800', 'cyan.300')} letterSpacing="wide">
                  AVAILABLE FOR MOBILE & FRONTEND ROLES
                </Text>
              </HStack>

              {/* Main Heading with Typed.js */}
              <Heading as="h1" size={{ base: '2xl', md: '3xl' }} lineHeight="1.1" letterSpacing="-0.03em">
                <Text as="span" display="block" color={useColorModeValue('neutral.900', 'white')}>
                  Hi, I'm Afif Shyamsul
                </Text>
                <Text
                  as="span"
                  display="block"
                  fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                  mt={1}
                  bgGradient="linear(to-r, cyan.400, brand.500, purple.500)"
                  bgClip="text"
                  minH={{ base: '36px', md: '44px' }}
                >
                  <span ref={typedRef}></span>
                </Text>
              </Heading>

              <Text fontSize={{ base: 'md', md: 'lg' }} color={mutedColor} maxW="2xl" lineHeight="relaxed">
                Specialized in building high-performance mobile applications with <strong>Flutter, Dart, Riverpod, BLoC, and Firebase</strong>. Frontend Lead on the TuxC Wallet crypto app, dedicated to clean architecture, intuitive UX, and reliable store releases.
              </Text>

              {/* Skill Tag Pills */}
              <Flex wrap="wrap" gap={2} pt={1}>
                {HERO_PILLS.map((pill) => (
                  <Badge
                    key={pill.name}
                    colorScheme={pill.color}
                    fontSize="xs"
                    px={3}
                    py={1}
                    borderRadius="full"
                    variant="subtle"
                    fontWeight="semibold"
                    border="1px solid"
                    borderColor={useColorModeValue('rgba(0,0,0,0.06)', 'rgba(255,255,255,0.12)')}
                  >
                    {pill.name}
                  </Badge>
                ))}
              </Flex>

              {/* Delivery Feature Highlights */}
              <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={3} w="full" pt={2}>
                {DELIVERY_POINTS.map((item) => (
                  <HStack
                    key={item.label}
                    align="flex-start"
                    spacing={3}
                    borderWidth="1px"
                    borderColor={borderColor}
                    borderRadius="xl"
                    bg={surfaceColor}
                    p={3.5}
                    transition="all 0.2s ease"
                    _hover={{ borderColor: accentColor, transform: 'translateY(-2px)' }}
                  >
                    <Icon as={item.icon} color={accentColor} boxSize={5} mt={0.5} flexShrink={0} />
                    <Text color={mutedColor} fontSize="xs" lineHeight="tall" fontWeight="medium">
                      {item.label}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>

              {/* Action Buttons */}
              <Flex
                wrap="wrap"
                gap={3}
                w="full"
                pt={3}
                align="stretch"
              >
                <Button
                  flex={{ base: '1 1 100%', sm: '1 1 auto' }}
                  colorScheme="cyan"
                  bgGradient="linear(to-r, cyan.500, brand.600)"
                  color="white"
                  size="lg"
                  borderRadius="xl"
                  onClick={scrollToPortfolio}
                  rightIcon={<FiArrowRight />}
                  _hover={{
                    bgGradient: 'linear(to-r, cyan.400, brand.500)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px -4px rgba(6, 182, 212, 0.4)',
                  }}
                >
                  Explore Projects
                </Button>

                <Button
                  flex={{ base: '1 1 calc(50% - 6px)', sm: '1 1 auto' }}
                  variant="outline"
                  colorScheme="cyan"
                  size="lg"
                  borderRadius="xl"
                  leftIcon={<FiDownload />}
                  onClick={() => setIsResumeOpen(true)}
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  Resume PDF
                </Button>

                <Tooltip label="Copy email to clipboard">
                  <Button
                    flex={{ base: '1 1 calc(50% - 6px)', sm: '1 1 auto' }}
                    variant="outline"
                    colorScheme="gray"
                    size="lg"
                    borderRadius="xl"
                    leftIcon={copiedEmail ? <FiCheck /> : <FiCopy />}
                    onClick={handleCopyEmail}
                    _hover={{ transform: 'translateY(-2px)' }}
                  >
                    {copiedEmail ? 'Copied!' : 'Copy Email'}
                  </Button>
                </Tooltip>

                <Button
                  as="a"
                  href="https://github.com/afifShyam"
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  colorScheme="gray"
                  size="lg"
                  borderRadius="xl"
                  leftIcon={<FiGithub />}
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  GitHub
                </Button>
              </Flex>
            </VStack>
          </GridItem>

          {/* Right Highlights Panel */}
          <GridItem>
            <Box
              w="full"
              bg={panelBg}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              p={{ base: 6, md: 7 }}
              boxShadow={useColorModeValue('0 20px 48px rgba(15, 23, 42, 0.08)', '0 20px 48px rgba(0, 0, 0, 0.35)')}
              backdropFilter="blur(18px)"
            >
              <HStack spacing={3} mb={5} color={accentColor}>
                <Icon as={FiSmartphone} boxSize={5} />
                <Text fontWeight="bold" fontSize="md" color={useColorModeValue('neutral.900', 'white')}>
                  Production Highlights & Impact
                </Text>
              </HStack>

              <SimpleGrid columns={{ base: 2, sm: 2 }} spacing={3}>
                {HIGHLIGHT_STATS.map((item) => (
                  <VStack key={item.label} align="flex-start" spacing={1} bg={railBg} borderRadius="xl" p={3.5} borderWidth="1px" borderColor={borderColor}>
                    <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={highlightValueColor}>
                      {item.value}
                    </Text>
                    <Text fontSize="xs" color={mutedColor} fontWeight="medium">
                      {item.label}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>

              <Divider my={5} borderColor={borderColor} />

              <VStack align="stretch" spacing={2.5}>
                {[
                  'Frontend lead on TuxC Wallet mobile development',
                  'Built e-commerce, reservation, caregiver, & AI prediction apps',
                  'Led state refactoring with Riverpod & BLoC patterns',
                ].map((item, index) => (
                  <HStack key={item} spacing={2.5} align="flex-start">
                    <Box mt={1.5} w="6px" h="6px" borderRadius="full" bg={index === 0 ? 'cyan.400' : 'brand.400'} flexShrink={0} />
                    <Text color={mutedColor} fontSize="xs" lineHeight="tall">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              <Divider my={5} borderColor={borderColor} />

              <Text fontSize="xs" color={mutedColor} mb={3} fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                Core Mobile Stack
              </Text>

              <HStack spacing={3} align="stretch" mb={4}>
                <VStack spacing={2} flex="1">
                  <Box
                    bg={logoBg}
                    borderRadius="xl"
                    p={3}
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderWidth="1px"
                    borderColor={borderColor}
                  >
                    <Image src={DartLogo} alt="Dart Logo" boxSize="36px" objectFit="contain" />
                  </Box>
                  <Text fontSize="xs" fontWeight="semibold" color={mutedColor}>
                    Dart
                  </Text>
                </VStack>
                <VStack spacing={2} flex="1">
                  <Box
                    bg={logoBg}
                    borderRadius="xl"
                    p={3}
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderWidth="1px"
                    borderColor={borderColor}
                  >
                    <Image src={FlutterLogo} alt="Flutter Logo" boxSize="36px" objectFit="contain" />
                  </Box>
                  <Text fontSize="xs" fontWeight="semibold" color={mutedColor}>
                    Flutter
                  </Text>
                </VStack>
              </HStack>

              <Flex flexWrap="wrap" gap={1.5}>
                {CORE_FOCUS.map((item) => (
                  <Badge
                    key={item}
                    px={2.5}
                    py={0.5}
                    borderRadius="md"
                    bg={focusBadgeBg}
                    color={accentColor}
                    fontSize="2xs"
                    textTransform="none"
                    fontWeight="medium"
                  >
                    {item}
                  </Badge>
                ))}
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      <ResumePreviewModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf"
      />
    </Box>
  );
};

export default Home;
