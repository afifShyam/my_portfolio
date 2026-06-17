import { useRef, useEffect } from 'react';
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
} from '@chakra-ui/react';
import { FiArrowRight, FiCheckCircle, FiLayers, FiShield, FiSmartphone } from 'react-icons/fi';

// Import local logos
import DartLogo from '../assets/dart-logo.png';
import FlutterLogo from '../assets/flutter-logo.png';

const HIGHLIGHT_STATS = [
  { label: 'Years in mobile delivery', value: '2+' },
  { label: 'App updates shipped', value: '10+' },
  { label: 'Reported issue reduction', value: '35%' },
  { label: 'Engagement lift from tuning', value: '20%' },
];

const DELIVERY_POINTS = [
  { icon: FiSmartphone, label: 'Production Flutter builds for wallet, commerce, and health workflows.' },
  { icon: FiLayers, label: 'Clean state and feature architecture with Riverpod, BLoC, and REST APIs.' },
  { icon: FiShield, label: 'Release-ready handling for error states, store submissions, and CI/CD.' },
];

const Home: React.FC<{ scrollToPortfolio: () => void }> = ({ scrollToPortfolio }) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const accentColor = useColorModeValue('brand.600', 'brand.300');
  const accentSoft = useColorModeValue('accent.500', 'accent.300');
  const mutedColor = useColorModeValue('neutral.500', 'neutral.200');
  const surfaceColor = useColorModeValue('rgba(255, 255, 255, 0.86)', 'rgba(20, 41, 39, 0.82)');
  const borderColor = useColorModeValue('rgba(159, 184, 181, 0.45)', 'whiteAlpha.200');
  const logoBg = useColorModeValue('white', 'whiteAlpha.100');
  const highlightValueColor = useColorModeValue('neutral.800', 'white');
  const sectionBg = useColorModeValue(
    'linear-gradient(135deg, #f7fbfa 0%, #edf8f5 42%, #fff1f3 100%)',
    'linear-gradient(135deg, #071817 0%, #102622 52%, #241526 100%)'
  );
  const panelBg = useColorModeValue('rgba(255, 255, 255, 0.78)', 'rgba(20, 41, 39, 0.78)');
  const railBg = useColorModeValue('rgba(238, 251, 248, 0.9)', 'whiteAlpha.100');
  const patternColor = useColorModeValue('rgba(20, 104, 95, 0.08)', 'rgba(122, 214, 201, 0.08)');

  useEffect(() => {
    let typed: Typed | null = null;

    if (typedRef.current) {
      typed = new Typed(typedRef.current, {
        strings: [
          "I'm Afif — Flutter Mobile Dev / Frontend Lead.",
          'Wallet, commerce, and productivity experiences.',
          'Riverpod, BLoC, Firebase, and clean architecture.',
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });
    }

    // Clean up Typed instance on component unmount
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  return (
    <Box
      id="home"
      bg={sectionBg}
      bgImage={`linear-gradient(${patternColor} 1px, transparent 1px), linear-gradient(90deg, ${patternColor} 1px, transparent 1px)`}
      bgSize="44px 44px"
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
                borderRadius="md"
                px={3}
                py={1}
                textTransform="unset"
                fontWeight="semibold"
              >
                Portfolio · Flutter Mobile Developer
              </Badge>

              <Heading as="h1" size={{ base: '2xl', md: '3xl' }} lineHeight="1.05" letterSpacing="normal">
                Secure, polished mobile apps for modern products.
              </Heading>

              <Text fontSize={{ base: 'md', md: 'xl' }} color={mutedColor} maxW="2xl" lineHeight="tall">
                Flutter Mobile Developer with production experience at Coinyex and RF Infinite,
                focused on Riverpod, BLoC, Firebase, REST APIs, store releases, and clean architecture.
              </Text>

              <Box
                borderWidth="1px"
                borderColor={borderColor}
                bg={surfaceColor}
                borderRadius="md"
                px={5}
                py={3}
                minH="52px"
                display="flex"
                alignItems="center"
                w={{ base: 'full', md: 'auto' }}
              >
                <Text fontWeight="medium" color={accentColor}>
                  <span ref={typedRef} style={{ display: 'inline-block' }}></span>
                </Text>
              </Box>

              <Flex gap={3} pt={2} direction={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
                <Button colorScheme="brand" size="lg" onClick={scrollToPortfolio} rightIcon={<FiArrowRight />}>
                  View projects
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  variant="outline"
                  colorScheme="brand"
                  size="lg"
                >
                  Get in touch
                </Button>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} w="full" pt={4}>
                {DELIVERY_POINTS.map((item) => (
                  <HStack
                    key={item.label}
                    align="flex-start"
                    spacing={3}
                    borderWidth="1px"
                    borderColor={borderColor}
                    borderRadius="md"
                    bg={panelBg}
                    p={4}
                  >
                    <Icon as={item.icon} color={accentColor} boxSize={5} mt={0.5} />
                    <Text color={mutedColor} fontSize="sm" lineHeight="tall">
                      {item.label}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              w="full"
              bg={panelBg}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              p={{ base: 6, md: 8 }}
              boxShadow={useColorModeValue('0 24px 60px rgba(15, 23, 42, 0.08)', '0 24px 60px rgba(0, 0, 0, 0.28)')}
              backdropFilter="blur(18px)"
            >
              <HStack spacing={3} mb={6} color={accentColor}>
                <Icon as={FiCheckCircle} boxSize={5} />
                <Text fontWeight="semibold">Resume Highlights</Text>
              </HStack>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                {HIGHLIGHT_STATS.map((item) => (
                  <VStack key={item.label} align="flex-start" spacing={1} bg={railBg} borderRadius="md" p={4}>
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

              <VStack align="stretch" spacing={3} mb={8}>
                {[
                  'Coinyex Co. Ltd. · TuxC Wallet frontend ownership',
                  'RF Infinite · commerce, social, and food-ordering flows',
                  'UiTM · Computer Science, SVM flood prediction FYP',
                ].map((item, index) => (
                  <HStack key={item} spacing={3} align="flex-start">
                    <Box
                      mt={1}
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg={index === 1 ? accentSoft : accentColor}
                      flexShrink={0}
                    />
                    <Text color={mutedColor} fontSize="sm">{item}</Text>
                  </HStack>
                ))}
              </VStack>

              <Text fontSize="sm" color={mutedColor} mb={4} fontWeight="medium">
                Core tools
              </Text>

              <HStack spacing={4} align="stretch">
                <VStack spacing={3} flex="1">
                  <Box
                    bg={logoBg}
                    borderRadius="md"
                    p={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
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
                    borderRadius="md"
                    p={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src={FlutterLogo} alt="Flutter Logo" boxSize="48px" objectFit="contain" />
                  </Box>
                  <Text fontSize="sm" color={mutedColor}>
                    Flutter
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
