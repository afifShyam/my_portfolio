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
} from '@chakra-ui/react';

// Import local logos
import DartLogo from '../assets/dart-logo.png';
import FlutterLogo from '../assets/flutter-logo.png';

const HIGHLIGHT_STATS = [
  { label: 'Years crafting products', value: '2+' },
  { label: 'Production releases', value: '10+' },
  { label: 'Primary stack', value: 'Flutter · React' },
  { label: 'Focus', value: 'Mobile · Web · Blockchain' },
];

const Home: React.FC<{ scrollToPortfolio: () => void }> = ({ scrollToPortfolio }) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const accentColor = useColorModeValue('brand.600', 'brand.300');
  const mutedColor = useColorModeValue('neutral.500', 'neutral.200');
  const surfaceColor = useColorModeValue('white', 'rgba(15, 23, 42, 0.9)');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const logoBg = useColorModeValue('gray.100', 'whiteAlpha.200');
  const highlightValueColor = useColorModeValue('neutral.800', 'white');

  useEffect(() => {
    let typed: Typed | null = null;
    
    if (typedRef.current) {
      typed = new Typed(typedRef.current, {
        strings: [
          "I'm Afif — Flutter & React Developer.",
          'Clean architecture enthusiast.',
          'Blockchain curious and product minded.',
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
    <Box id="home" bg={useColorModeValue('neutral.50', 'neutral.800')} py={{ base: 24, md: 32 }}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 12, md: 16 }}
        >
          <VStack align="flex-start" spacing={6} flex="1" maxW="xl">
            <Badge
              colorScheme="brand"
              borderRadius="full"
              px={3}
              py={1}
              textTransform="unset"
              fontWeight="medium"
            >
              Flutter · React · Blockchain
            </Badge>

            <Heading as="h1" size="2xl" lineHeight="shorter">
              Building minimal, resilient mobile & web apps.
            </Heading>

            <Text fontSize="lg" color={mutedColor} maxW="lg">
              I translate product ideas into polished experiences with a focus on clean architecture,
              high performance, and thoughtful design systems.
            </Text>

            <Box
              borderWidth="1px"
              borderColor={borderColor}
              bg={surfaceColor}
              borderRadius="lg"
              px={4}
              py={3}
            >
              <Text fontWeight="medium" color={accentColor}>
                <span ref={typedRef} style={{ display: 'inline-block' }}></span>
              </Text>
            </Box>

            <HStack spacing={4} pt={2}>
              <Button colorScheme="brand" size="lg" onClick={scrollToPortfolio}>
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
            </HStack>
          </VStack>

          <Box
            flex="1"
            w="full"
            maxW={{ base: 'full', md: 'lg' }}
            bg={surfaceColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
            p={{ base: 6, md: 8 }}
          >
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
              {HIGHLIGHT_STATS.map((item) => (
                <VStack key={item.label} align="flex-start" spacing={1}>
                  <Text fontSize="3xl" fontWeight="semibold" color={highlightValueColor}>
                    {item.value}
                  </Text>
                  <Text fontSize="sm" color={mutedColor}>
                    {item.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>

            <Divider my={8} borderColor={borderColor} />

            <Text fontSize="sm" color={mutedColor} mb={4} fontWeight="medium">
              Tools I rely on
            </Text>

            <HStack spacing={6}>
              <VStack spacing={3}>
                <Box
                  bg={logoBg}
                  borderRadius="lg"
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
              <VStack spacing={3}>
                <Box
                  bg={logoBg}
                  borderRadius="lg"
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
