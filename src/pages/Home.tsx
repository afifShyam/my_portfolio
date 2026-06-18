import { useState } from 'react';
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
} from '@chakra-ui/react';
import ResumePreviewModal from '../components/ResumePreviewModal';
import { FiArrowRight, FiDownload, FiGithub, FiShield, FiSmartphone, FiZap } from 'react-icons/fi';

import DartLogo from '../assets/dart-logo.png';
import FlutterLogo from '../assets/flutter-logo.png';

const HIGHLIGHT_STATS = [
  { label: 'Years in mobile delivery', value: '2+' },
  { label: 'Featured apps', value: '5' },
  { label: 'Frontend lead role', value: '1' },
  { label: 'Production releases', value: '10+' },
];

const DELIVERY_POINTS = [
  { icon: FiSmartphone, label: 'Built mobile apps with Flutter, Dart, Firebase, and REST APIs.' },
  { icon: FiZap, label: 'Kept UI clean, simple, and fast for smooth user journeys.' },
  { icon: FiShield, label: 'Worked with teams to ship stable releases and fix issues quickly.' },
];

const CORE_FOCUS = ['Flutter', 'Firebase', 'Riverpod', 'BLoC', 'Clean UI', 'Performance'];

interface HomeProps {
  scrollToPortfolio: () => void;
}

const Home: React.FC<HomeProps> = ({ scrollToPortfolio }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const accentColor = useColorModeValue('brand.700', 'brand.300');
  const mutedColor = useColorModeValue('neutral.600', 'neutral.200');
  const surfaceColor = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(15, 23, 42, 0.82)');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const logoBg = useColorModeValue('white', 'whiteAlpha.100');
  const highlightValueColor = useColorModeValue('neutral.900', 'white');
  const sectionBg = useColorModeValue(
    'linear-gradient(135deg, #f8fafc 0%, #eef6ff 42%, #f8fafc 100%)',
    'linear-gradient(135deg, #0f172a 0%, #111827 55%, #0b1220 100%)'
  );
  const panelBg = useColorModeValue('rgba(255, 255, 255, 0.82)', 'rgba(15, 23, 42, 0.78)');
  const railBg = useColorModeValue('rgba(248, 250, 252, 0.95)', 'whiteAlpha.100');
  const patternColor = useColorModeValue('rgba(37, 99, 235, 0.08)', 'rgba(34, 211, 238, 0.08)');
  const focusBadgeBg = useColorModeValue('brand.50', 'whiteAlpha.100');

  return (
    <Box
      id="home"
      bg={sectionBg}
      bgImage={`linear-gradient(${patternColor} 1px, transparent 1px), linear-gradient(90deg, ${patternColor} 1px, transparent 1px)`}
      bgSize="48px 48px"
      pt={{ base: 28, md: 32 }}
      pb={{ base: 16, md: 24 }}
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'minmax(0, 1.05fr) minmax(360px, 0.95fr)' }}
          alignItems="center"
          gap={{ base: 10, lg: 14 }}
        >
          <GridItem>
            <VStack align="flex-start" spacing={6} maxW="3xl">
              <Badge
                colorScheme="brand"
                borderRadius="full"
                px={3}
                py={1}
                textTransform="unset"
                fontWeight="semibold"
              >
                Flutter Mobile Developer
              </Badge>

              <Heading as="h1" size={{ base: '2xl', md: '3xl' }} lineHeight="1.05" letterSpacing="-0.03em">
                Flutter Mobile Developer building clean, fast, and reliable mobile apps.
              </Heading>

              <Text fontSize={{ base: 'md', md: 'xl' }} color={mutedColor} maxW="2xl" lineHeight="tall">
                I have around 2 years of experience building mobile apps with Flutter, Dart, Firebase,
                REST APIs, Riverpod, Provider, and BLoC. I focus on clear UI, smooth user flows, app
                performance, and reliable delivery.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} w="full">
                {DELIVERY_POINTS.map((item) => (
                  <HStack
                    key={item.label}
                    align="flex-start"
                    spacing={3}
                    borderWidth="1px"
                    borderColor={borderColor}
                    borderRadius="xl"
                    bg={surfaceColor}
                    p={4}
                  >
                    <Icon as={item.icon} color={accentColor} boxSize={5} mt={0.5} />
                    <Text color={mutedColor} fontSize="sm" lineHeight="tall">
                      {item.label}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>

              <Flex
                wrap="wrap"
                gap={3}
                w="full"
                maxW={{ base: 'full', xl: '4xl' }}
                pt={2}
                align="stretch"
              >
                <Button
                  flex="1 1 220px"
                  minW="220px"
                  colorScheme="brand"
                  size="lg"
                  onClick={scrollToPortfolio}
                  rightIcon={<FiArrowRight />}
                >
                  View Projects
                </Button>
                <Button
                  flex="1 1 220px"
                  minW="220px"
                  variant="outline"
                  colorScheme="brand"
                  size="lg"
                  leftIcon={<FiDownload />}
                  onClick={() => setIsResumeOpen(true)}
                >
                  Preview Resume
                </Button>
                <Button
                  flex="1 1 220px"
                  minW="220px"
                  as="a"
                  href="https://github.com/afifShyam"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  colorScheme="brand"
                  size="lg"
                  leftIcon={<FiGithub />}
                >
                  GitHub
                </Button>
              </Flex>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              w="full"
              bg={panelBg}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              p={{ base: 6, md: 8 }}
              boxShadow={useColorModeValue('0 24px 60px rgba(15, 23, 42, 0.08)', '0 24px 60px rgba(0, 0, 0, 0.3)')}
              backdropFilter="blur(18px)"
            >
              <HStack spacing={3} mb={6} color={accentColor}>
                <Icon as={FiSmartphone} boxSize={5} />
                <Text fontWeight="semibold">What I bring</Text>
              </HStack>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                {HIGHLIGHT_STATS.map((item) => (
                  <VStack key={item.label} align="flex-start" spacing={1} bg={railBg} borderRadius="xl" p={4}>
                    <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" color={highlightValueColor}>
                      {item.value}
                    </Text>
                    <Text fontSize="sm" color={mutedColor}>
                      {item.label}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>

              <Divider my={8} borderColor={borderColor} />

              <VStack align="stretch" spacing={3}>
                {[
                  'Frontend lead on TuxC Wallet mobile development',
                  'Built shopping, reservation, caregiver, and tracker apps',
                  'Collaborated with backend and product teams on releases',
                ].map((item, index) => (
                  <HStack key={item} spacing={3} align="flex-start">
                    <Box mt={1} w="8px" h="8px" borderRadius="full" bg={index === 1 ? accentColor : 'brand.400'} flexShrink={0} />
                    <Text color={mutedColor} fontSize="sm" lineHeight="tall">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              <Text fontSize="sm" color={mutedColor} mb={4} mt={8} fontWeight="medium">
                Core tools
              </Text>

              <HStack spacing={4} align="stretch">
                <VStack spacing={3} flex="1">
                  <Box
                    bg={logoBg}
                    borderRadius="xl"
                    p={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderWidth="1px"
                    borderColor={borderColor}
                  >
                    <Image src={DartLogo} alt="Dart Logo" boxSize="48px" objectFit="contain" />
                  </Box>
                  <Text fontSize="sm" color={mutedColor}>
                    Dart
                  </Text>
                </VStack>
                <VStack spacing={3} flex="1">
                  <Box
                    bg={logoBg}
                    borderRadius="xl"
                    p={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderWidth="1px"
                    borderColor={borderColor}
                  >
                    <Image src={FlutterLogo} alt="Flutter Logo" boxSize="48px" objectFit="contain" />
                  </Box>
                  <Text fontSize="sm" color={mutedColor}>
                    Flutter
                  </Text>
                </VStack>
              </HStack>

              <Divider my={8} borderColor={borderColor} />

              <Flex flexWrap="wrap" gap={2}>
                {CORE_FOCUS.map((item) => (
                  <Badge
                    key={item}
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg={focusBadgeBg}
                    color={accentColor}
                    textTransform="none"
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
