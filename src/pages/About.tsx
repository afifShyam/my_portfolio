import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link,
  Flex,
  Button,
} from '@chakra-ui/react';

const About: React.FC = () => (
  <Container maxW="container.xl" px={5} py={28}>
    {/* Title */}
    <Heading
      as="h2"
      size="2xl"
      fontWeight="extrabold"
      textAlign="center"
      mb={16}
      color="white"
      lineHeight="tight"
    >
      About Me
    </Heading>

    {/* Main Card */}
    <Flex justify="center">
      <Box
        maxW={{ base: 'full', md: '5xl' }}
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="whiteAlpha.300"
        p={12}
        borderRadius="3xl"
        shadow="2xl"
        textAlign="center"
      >
        {/* Professional Summary */}
        <Text fontSize="xl" color="gray.300" mb={12} lineHeight="relaxed">
          🚀 I'm a{' '}
          <Text as="span" fontWeight="semibold" color="blue.400">
            Flutter and React Developer
          </Text>{' '}
          with{' '}
          <Text as="span" fontWeight="semibold" color="blue.400">
            1.5 years of experience in Flutter
          </Text>{' '}
          crafting intuitive mobile apps for{' '}
          <Text as="span" fontWeight="semibold" color="white">
            social media
          </Text>
          ,{' '}
          <Text as="span" fontWeight="semibold" color="white">
            e-commerce
          </Text>
          , and{' '}
          <Text as="span" fontWeight="semibold" color="white">
            food ordering
          </Text>
          . I'm currently expanding my skillset in{' '}
          <Text as="span" fontWeight="semibold" color="blue.400">
            React development
          </Text>{' '}
          to create seamless and dynamic web experiences. I enjoy solving complex problems,
          collaborating with teams, and building solutions that deliver exceptional user value.
        </Text>

        {/* Key Highlights */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 12 }} mt={8}>
          {/* Education */}
          <VStack
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
            transition="transform 0.3s ease"
          >
            <Heading as="h3" size="lg" color="blue.400">
              Education 🎓
            </Heading>
            <Text color="gray.300" mt={4}>
              Bachelor of Computer Science
              <Text as="span" fontSize="sm" display="block" color="gray.400">
                UiTM Kampus Terengganu
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.500">
              - Focus: Software Development and Machine Learning
            </Text>
          </VStack>

          {/* Experience */}
          <VStack
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
            transition="transform 0.3s ease"
          >
            <Heading as="h3" size="lg" color="blue.400">
              Experience 💼
            </Heading>
            <Text color="gray.300" mt={4}>
              Mobile Developer
              <Text as="span" fontSize="sm" display="block" color="gray.400">
                RF Infinite Sdn. Bhd.
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.500">
              - 1.5 years developing Flutter apps for social media, e-commerce, and food ordering.
            </Text>
            <Text fontSize="sm" color="gray.500">
              - Integrated WebSockets for real-time communication and RESTful APIs for scalable
              backends.
            </Text>
            <Text fontSize="sm" color="gray.500">
              - Enhanced app performance by 20% using clean architecture and optimization.
            </Text>
          </VStack>

          {/* Achievements */}
          <VStack
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
            transition="transform 0.3s ease"
          >
            <Heading as="h3" size="lg" color="blue.400">
              Achievements 🏆
            </Heading>
            <Text color="gray.300" mt={4}>
              Flood Prediction App (Final Year Project)
              <Text as="span" fontSize="sm" display="block" color="gray.400">
                Achieved 90% accuracy using SVM
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.500">
              - Delivered real-time weather updates and forecasts for disaster prevention.
            </Text>
          </VStack>
        </SimpleGrid>

        {/* Technologies Used */}
        <Box mt={12}>
          <Heading as="h3" size="lg" color="blue.400" mb={4}>
            Technologies I Work With 🛠️
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Text color="gray.300">✅ Flutter & Dart</Text>
            <Text color="gray.300">✅ React & TypeScript</Text>
            <Text color="gray.300">✅ Firebase & REST APIs</Text>
            <Text color="gray.300">✅ WebSockets for Real-time Apps</Text>
            <Text color="gray.300">✅ Clean Architecture Principles</Text>
            <Text color="gray.300">✅ Collaborative Team Development</Text>
          </SimpleGrid>
        </Box>

        {/* Call-to-Action Links */}
        <Flex
          justify="center"
          mt={16}
          gap={{ base: 6, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Button
            as={Link}
            href="https://github.com/afifShyam"
            isExternal
            px={{ base: 6, md: 8 }}
            py={{ base: 3, md: 4 }}
            fontSize={{ base: 'sm', md: 'md' }}
            borderRadius="xl"
            bgGradient="linear(to-tr, teal.500, green.400)"
            color="white"
            fontWeight="semibold"
            shadow="lg"
            _hover={{
              bgGradient: 'linear(to-br, green.400, teal.500)',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s ease"
          >
            Visit My GitHub
          </Button>

          <Button
            as={Link}
            href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/"
            isExternal
            px={{ base: 6, md: 8 }}
            py={{ base: 3, md: 4 }}
            fontSize={{ base: 'sm', md: 'md' }}
            borderRadius="xl"
            bgGradient="linear(to-r, teal.500, green.400)"
            _hover={{
              bgGradient: 'linear(to-l, green.400, teal.500)',
              transform: 'scale(1.05)',
            }}
            color="white"
            fontWeight="semibold"
            shadow="lg"
            transition="all 0.3s ease"
          >
            Connect on LinkedIn
          </Button>
        </Flex>
      </Box>
    </Flex>
  </Container>
);

export default About;
