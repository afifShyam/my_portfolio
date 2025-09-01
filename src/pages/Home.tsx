import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { Box, Heading, Text, Button, VStack, Flex, Image } from '@chakra-ui/react';

// Import local logos
import DartLogo from '../assets/dart-logo.png';
import FlutterLogo from '../assets/flutter-logo.png';

const Home: React.FC<{ scrollToPortfolio: () => void }> = ({ scrollToPortfolio }) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let typed: Typed | null = null;
    
    if (typedRef.current) {
      typed = new Typed(typedRef.current, {
        strings: [
          "Hello, I'm Afif.",
          "I'm a Flutter Developer.",
          'I build amazing Web and Mobile Apps.',
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
      minH="100vh"
      bgGradient="linear(to-br, #0a192f, #15314b)"
      backgroundSize="400% 400%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      pt={20}
      textAlign="center"
      color="white"
    >
      <Box
        maxW="4xl"
        p={10}
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        borderRadius="2xl"
        boxShadow="2xl"
        border="1px solid"
        borderColor="whiteAlpha.300"
      >
        {/* Title */}
        <Heading as="h1" fontSize={['4xl', '6xl', '7xl']} fontWeight="extrabold" mb={6}>
          Welcome to{' '}
          <Text as="span" bgGradient="linear(to-r, blue.400, blue.600)" bgClip="text">
            My{' '}
            <Text as="span" color="blue.300">
              Portfolio
            </Text>
          </Text>
        </Heading>

        {/* Subheading */}
        <Heading as="h2" fontSize={['2xl', '3xl', '4xl']} fontWeight="medium" mb={6}>
          <span ref={typedRef} style={{ display: 'inline-block' }}></span>
        </Heading>

        {/* Paragraph */}
        <Text fontSize={['md', 'lg']} color="gray.300" mb={10}>
          Crafting high-performance web and mobile apps that stand out. Let's transform ideas into
          reality.
        </Text>

        {/* Call-to-Action */}
        <Text fontSize="lg" fontWeight="semibold" mb={4} color="blue.400">
          Dive into my work and explore the magic!
        </Text>

        {/* Button */}
        <Button
          onClick={scrollToPortfolio}
          px={10}
          py={4}
          color="white"
          bgGradient="linear(to-br, #2a6f97, #2c7da0)"
          _hover={{
            bgGradient: 'linear(to-br, green.400, teal.500)',
            transform: 'scale(1.1)',
            boxShadow: '0px 4px 15px rgba(66, 153, 225, 0.5)', // Glow effect
          }}
          _active={{
            bgGradient: 'linear(to-br, green.400, teal.500)',
            boxShadow: '0px 2px 10px rgba(66, 153, 225, 0.7)',
          }}
          borderRadius="xl"
          fontSize="lg"
          fontWeight="medium"
          shadow="xl"
          transition="all 0.4s ease"
        >
          View Projects →
        </Button>

        {/* Logos Section */}
        <Flex justifyContent="center" gap={12} mt={12}>
          <VStack>
            <Image
              src={DartLogo}
              alt="Dart Logo"
              boxSize="80px"
              objectFit="contain"
              transition="transform 0.3s"
            />
            <Text fontSize="sm" color="gray.400">
              Dart
            </Text>
          </VStack>

          <VStack>
            <Image
              src={FlutterLogo}
              alt="Flutter Logo"
              boxSize="80px"
              objectFit="contain"
              transition="transform 0.3s"
            />
            <Text fontSize="sm" color="gray.400">
              Flutter
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
