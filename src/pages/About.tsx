import { memo } from 'react';
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
  Icon,
  useColorModeValue,

  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);

// Skill badge component
interface SkillBadgeProps {
  label: string;
  colorScheme: string;
}

const SkillBadge = memo(function SkillBadge({ label, colorScheme }: SkillBadgeProps) {
  const bgColor = useColorModeValue(`${colorScheme}.50`, `${colorScheme}.900`);
  const textColor = useColorModeValue(`${colorScheme}.700`, `${colorScheme}.200`);
  const borderColor = useColorModeValue(`${colorScheme}.200`, `${colorScheme}.700`);
  
  return (
    <Box
      py={2}
      px={4}
      bg={bgColor}
      color={textColor}
      borderRadius="full"
      fontSize="sm"
      fontWeight="medium"
      textAlign="center"
      border="1px solid"
      borderColor={borderColor}
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </Box>
  );
});

const About = memo(function About() {
  // Dynamic color mode values
  // const bgColor = useColorModeValue('white', 'rgba(26, 32, 44, 0.8)');
  const cardBg = useColorModeValue('gray.50', 'rgba(26, 32, 44, 0.6)');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('blue.500', 'blue.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <Container maxW="container.xl" px={5} py={28} as={MotionBox} variants={containerVariants} initial="hidden" animate="visible">
      {/* Title */}
      <MotionHeading
        as="h2"
        size="2xl"
        fontWeight="extrabold"
        textAlign="center"
        mb={16}
        color={headingColor}
        lineHeight="tight"
        variants={itemVariants}
        bgGradient={useColorModeValue('linear(to-r, blue.600, teal.600)', 'linear(to-r, blue.400, teal.400)')}
        bgClip="text"
      >
        About Me
      </MotionHeading>

      {/* Main Card */}
      <MotionFlex justify="center" variants={itemVariants}>
        <Box
          maxW={{ base: 'full', md: '5xl' }}
          bg={cardBg}
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 6, md: 12 }}
          borderRadius="3xl"
          shadow="xl"
          textAlign="center"
          overflow="hidden"
          position="relative"
        >
          {/* Background decoration */}
          <Box 
            position="absolute" 
            top="-20%" 
            right="-10%" 
            width="300px" 
            height="300px" 
            borderRadius="full" 
            bg={useColorModeValue('blue.50', 'blue.900')} 
            opacity="0.1" 
            zIndex="0" 
          />
          <Box 
            position="absolute" 
            bottom="-10%" 
            left="-5%" 
            width="200px" 
            height="200px" 
            borderRadius="full" 
            bg={useColorModeValue('teal.50', 'teal.900')} 
            opacity="0.1" 
            zIndex="0" 
          />
           {/* Professional Summary */}
          <MotionBox zIndex="1" position="relative" variants={itemVariants}>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} mb={12} lineHeight="relaxed">
              👋 I'm a{' '}
              <Text as="span" fontWeight="semibold" color={accentColor}>
                Mobile Developer
              </Text>{' '}
              with{' '}
              <Text as="span" fontWeight="semibold" color={accentColor}>
                2 years of experience
              </Text>{' '}
              building{' '}
              <Text as="span" fontWeight="semibold" color={headingColor}>
                super apps
              </Text>{' '}
              including{' '}
              <Text as="span" fontWeight="semibold" color={headingColor}>
                social media
              </Text>
              ,{' '}
              <Text as="span" fontWeight="semibold" color={headingColor}>
                e-commerce
              </Text>
              , and{' '}
              <Text as="span" fontWeight="semibold" color={headingColor}>
                food ordering platforms
              </Text>
              . Recently, I’ve been{' '}
              <Text as="span" fontWeight="semibold" color={accentColor}>
                exploring blockchain technology
              </Text>{' '}
              with a focus on{' '}
              <Text as="span" fontWeight="semibold" color={headingColor}>
                DApps
              </Text>{' '}
              and{' '}
              <Text as="span" fontWeight="semibold" color={headingColor}>
                cryptocurrency wallets
              </Text>
              . I enjoy turning ideas into polished, scalable mobile applications.
            </Text>
          </MotionBox>

          {/* Key Highlights */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 12 }} mt={8} position="relative" zIndex="1">
            {/* Education */}
            <MotionVStack
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              p={5}
              borderRadius="xl"
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow="md"
              border="1px solid"
              borderColor={borderColor}
            >
              <Icon as={FaGraduationCap} boxSize={10} color={accentColor} mb={2} />
              <Heading as="h3" size="md" color={accentColor}>
                Education
              </Heading>
              <Divider my={3} />
              <Text color={headingColor} fontWeight="medium">
                Bachelor of Computer Science
              </Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                UiTM Kampus Terengganu
              </Text>
              <Text fontSize="sm" color={secondaryTextColor} mt={2}>
                Focus: Software Development and Machine Learning
              </Text>
            </MotionVStack>

            {/* Experience */}
            <MotionVStack
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              p={5}
              borderRadius="xl"
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow="md"
              border="1px solid"
              borderColor={borderColor}
            >
              <Icon as={FaBriefcase} boxSize={10} color={accentColor} mb={2} />
              <Heading as="h3" size="md" color={accentColor}>
                Experience
              </Heading>
              <Divider my={3} />
              <Text color={headingColor} fontWeight="medium">
                Mobile Developer - Blockchain
              </Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                Coinyex Co. Ltd.
              </Text>
              <VStack spacing={1} align="start" mt={2}>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Maintaining and enhancing TUX Wallet and DApps using Flutter and MVVM architecture
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Leading GitHub management for mobile development and handling deployments
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Implementing best practices, fixing bugs, and migrating to newer Flutter versions
                </Text>
              </VStack>
              
              <Divider my={3} />
              
              <Text color={headingColor} fontWeight="medium">
                Mobile Developer
              </Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                RF Infinite Sdn. Bhd.
              </Text>
              <VStack spacing={1} align="start" mt={2}>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Developed Flutter apps for social media, e-commerce, and food ordering
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Integrated WebSockets for real-time communication and RESTful APIs
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Enhanced app performance by 20% using clean architecture
                </Text>
              </VStack>
            </MotionVStack>

            {/* Achievements */}
            <MotionVStack
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              p={5}
              borderRadius="xl"
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow="md"
              border="1px solid"
              borderColor={borderColor}
            >
              <Icon as={FaTrophy} boxSize={10} color={accentColor} mb={2} />
              <Heading as="h3" size="md" color={accentColor}>
                Achievements
              </Heading>
              <Divider my={3} />
              <Text color={headingColor} fontWeight="medium">
                Flood Prediction App
              </Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                Final Year Project
              </Text>
              <VStack spacing={1} align="start" mt={2}>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Achieved 90% accuracy using SVM
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Delivered real-time weather updates and forecasts for disaster prevention
                </Text>
              </VStack>
            </MotionVStack>
          </SimpleGrid>

          {/* Technologies Used */}
          <MotionBox 
            mt={16} 
            variants={itemVariants}
            p={6}
            borderRadius="xl"
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="md"
            border="1px solid"
            borderColor={borderColor}
            position="relative"
            zIndex="1"
          >
            <Heading as="h3" size="lg" color={accentColor} mb={6}>
              Technologies I Work With
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 4, md: 6 }}>
              <SkillBadge label="Flutter & Dart" colorScheme="blue" />
              <SkillBadge label="React & TypeScript" colorScheme="teal" />
              <SkillBadge label="BLoC State Management" colorScheme="purple" />
              <SkillBadge label="Provider (Secondary)" colorScheme="orange" />
              <SkillBadge label="MVVM Architecture" colorScheme="green" />
              <SkillBadge label="CI/CD & Deployment" colorScheme="pink" />
              <SkillBadge label="Firebase & REST APIs" colorScheme="yellow" />
              <SkillBadge label="GitHub Management" colorScheme="cyan" />
              <SkillBadge label="Mobile App Optimization" colorScheme="red" />
              <SkillBadge label="Exploring Blockchain & DApps" colorScheme="indigo" />
            </SimpleGrid>
          </MotionBox>

          {/* Call-to-Action Links */}
          <MotionFlex
            justify="center"
            mt={16}
            gap={{ base: 6, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            variants={itemVariants}
            position="relative"
            zIndex="1"
          >
            <Button
              as={Link}
              href="https://github.com/afifShyam"
              isExternal
              px={{ base: 6, md: 8 }}
              py={{ base: 3, md: 4 }}
              fontSize={{ base: 'sm', md: 'md' }}
              borderRadius="xl"
              bgGradient={useColorModeValue(
                'linear(to-tr, blue.600, teal.600)', 
                'linear(to-tr, blue.400, teal.400)'
              )}
              color="white"
              fontWeight="semibold"
              shadow="lg"
              leftIcon={<FaGithub />}
              _hover={{
                transform: 'translateY(-5px)',
                shadow: '2xl',
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
              variant="outline"
              borderWidth="2px"
              borderColor={accentColor}
              color={accentColor}
              leftIcon={<FaLinkedin />}
              _hover={{
                bg: useColorModeValue('blue.50', 'rgba(66, 153, 225, 0.1)'),
                transform: 'translateY(-5px)',
                shadow: 'md',
              }}
              fontWeight="semibold"
              transition="all 0.3s ease"
            >
              Connect on LinkedIn
            </Button>
          </MotionFlex>
        </Box>
      </MotionFlex>
    </Container>
  );
});

export default About;
