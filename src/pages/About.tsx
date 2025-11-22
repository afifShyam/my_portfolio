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
  List,
  ListItem,
  ListIcon,
  HStack,
  Badge,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';
import { FiCheckCircle, FiBriefcase, FiMapPin, FiUsers, FiClock } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { motionChakra } from '../utils/motion';

// Motion components
const MotionBox = motionChakra(Box);
const MotionFlex = motionChakra(Flex);
const MotionVStack = motionChakra(VStack);
const MotionHeading = motionChakra(Heading);

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

interface QuickFactProps {
  icon: IconType;
  label: string;
  value: string;
}

const QuickFact = memo(function QuickFact({ icon: FactIcon, label, value }: QuickFactProps) {
  const border = useColorModeValue('gray.200', 'whiteAlpha.200');
  const labelColor = useColorModeValue('neutral.500', 'neutral.300');
  const valueColor = useColorModeValue('neutral.800', 'whiteAlpha.900');

  return (
    <HStack
      spacing={3}
      align="flex-start"
      p={3}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={border}
      bg="transparent"
    >
      <Box as={FactIcon} boxSize={5} color="brand.500" mt={1} />
      <VStack align="flex-start" spacing={0} fontSize="sm">
        <Text fontWeight="medium" textTransform="uppercase" color={labelColor} fontSize="xs">
          {label}
        </Text>
        <Text color={valueColor}>{value}</Text>
      </VStack>
    </HStack>
  );
});

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  focus: string;
  stack: string[];
  highlights: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Flutter Developer · Frontend Lead',
    company: 'Coinyex Co. Ltd.',
    period: 'Aug 2025 — Present',
    focus: 'Owns the TuxC Wallet frontend across send, receive, and swap experiences.',
    stack: ['Flutter', 'Riverpod', 'REST', 'Firebase', 'CI/CD'],
    highlights: [
      'Led migration from Provider to Riverpod for safer state handling and faster renders.',
      'Hardened API handling, error logging, and release notes for wallet transactions.',
      'Managed store submissions, certificates, versioning, and release pipelines.',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'RF Infinite Sdn. Bhd.',
    period: 'Sep 2023 — Jul 2025',
    focus: 'Delivered super-app experiences (commerce, social, food ordering) from internship to full-time.',
    stack: ['Flutter', 'REST', 'WebSockets', 'Clean Architecture', 'Performance'],
    highlights: [
      'Translated Figma to production UI/UX; improved engagement by 20% via perf tuning.',
      'Built shopping and reservation modules with clean architecture and REST APIs.',
      'Reduced reported issues by 35% through code reviews and shared standards.',
    ],
  },
];

const About = memo(function About() {
  // Dynamic color mode values
  // const bgColor = useColorModeValue('white', 'rgba(26, 32, 44, 0.8)');
  const cardBg = useColorModeValue('white', 'rgba(15, 23, 42, 0.9)');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const headingColor = useColorModeValue('neutral.900', 'white');
  const accentColor = useColorModeValue('brand.600', 'brand.300');
  const textColor = useColorModeValue('neutral.600', 'neutral.200');
  const secondaryTextColor = useColorModeValue('neutral.500', 'neutral.300');
  const hoverSpring: Transition = { type: 'spring', stiffness: 300 };
  
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants: Variants = {
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
    <Container
      maxW="container.xl"
      px={5}
      py={24}
      as={MotionBox}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 6, md: 12 }}
          borderRadius="2xl"
          shadow="lg"
          textAlign="center"
        >
           {/* Professional Summary */}
          <MotionBox variants={itemVariants}>
            <VStack align="flex-start" spacing={6} textAlign="left" color={textColor}>
              <Badge colorScheme="brand" borderRadius="full" px={3} py={1} textTransform="capitalize">
                Mobile & Web Engineer
              </Badge>

              <Heading as="h3" size="lg" color={headingColor} fontWeight="semibold">
                Flutter Mobile Developer / Frontend Lead
              </Heading>

              <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="tall">
                I build and ship wallet, commerce, and productivity apps with Flutter. I’m hands-on with Riverpod, BLoC,
                Firebase, REST APIs, and release pipelines—keeping architecture clean, performance tight, and delivery predictable.
              </Text>

              <List spacing={2} fontSize="md">
                <ListItem>
                  <ListIcon as={FiCheckCircle} color={accentColor} /> 2+ years delivering production releases across fintech, e-commerce, and productivity.
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color={accentColor} /> Led migrations (Provider → Riverpod), release automation, and API resilience for wallets.
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color={accentColor} /> Collaborate tightly with backend and product to keep launches secure and smooth.
                </ListItem>
              </List>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} w="full">
                <QuickFact icon={FiBriefcase} label="Role" value="Flutter Mobile Dev / Frontend Lead" />
                <QuickFact icon={FiMapPin} label="Based in" value="Cyberjaya, Selangor" />
                <QuickFact icon={FiUsers} label="Collaboration" value="Product & backend squads" />
                <QuickFact icon={FiCheckCircle} label="Focus" value="Wallets, commerce, health" />
              </SimpleGrid>
            </VStack>
          </MotionBox>

          <VStack spacing={{ base: 12, md: 14 }} mt={8} align="stretch">
            {/* Experience */}
            <MotionVStack
              variants={itemVariants}
              whileHover={{ y: -10, transition: hoverSpring }}
              p={5}
              borderRadius="xl"
              bg={useColorModeValue('white', 'rgba(15, 23, 42, 0.9)')}
              boxShadow="sm"
              border="1px solid"
              borderColor={borderColor}
              align="flex-start"
              spacing={5}
              textAlign="left"
              w="full"
            >
              <HStack spacing={3} align="center">
                <Icon as={FaBriefcase} boxSize={9} color={accentColor} />
                <Heading as="h3" size="md" color={accentColor}>
                  Experience
                </Heading>
              </HStack>
              <Divider />

              <VStack align="stretch" spacing={8} w="full">
                {EXPERIENCE.map((job, index) => (
                  <Grid key={job.role} templateColumns="24px 1fr" columnGap={6} position="relative">
                    <GridItem position="relative">
                      <Box
                        w={3}
                        h={3}
                        borderRadius="full"
                        bg={accentColor}
                        mt={1}
                      />
                      {index !== EXPERIENCE.length - 1 && (
                        <Box
                          position="absolute"
                          top={4}
                          left="6px"
                          width="1px"
                          height="calc(100% + 24px)"
                          bg={borderColor}
                        />
                      )}
                    </GridItem>
                    <GridItem>
                      <VStack align="flex-start" spacing={3}>
                        <HStack justify="space-between" spacing={4} flexWrap="wrap">
                          <VStack align="flex-start" spacing={1}>
                            <Text fontWeight="semibold" color={headingColor}>
                              {job.role}
                            </Text>
                            <Text fontSize="sm" color={secondaryTextColor}>
                              {job.company}
                            </Text>
                          </VStack>
                          <HStack spacing={2} color={secondaryTextColor} fontSize="sm">
                            <Icon as={FiClock} />
                            <Text>{job.period}</Text>
                          </HStack>
                        </HStack>

                        <Text fontSize="sm" color={secondaryTextColor}>
                          {job.focus}
                        </Text>

                        <Flex wrap="wrap" gap={2}>
                          {job.stack.map((tech) => (
                            <Badge key={tech} variant="subtle" colorScheme="brand" borderRadius="md" px={2} py={1}>
                              {tech}
                            </Badge>
                          ))}
                        </Flex>

                        <List spacing={1.5} fontSize="sm" color={secondaryTextColor}>
                          {job.highlights.map((highlight) => (
                            <ListItem key={highlight} display="flex" alignItems="flex-start" gap={2}>
                              <ListIcon as={FiCheckCircle} color={accentColor} mt={1} />
                              <Text>{highlight}</Text>
                            </ListItem>
                          ))}
                        </List>
                      </VStack>
                    </GridItem>
                  </Grid>
                ))}
              </VStack>
            </MotionVStack>
            {/* Education */}
            <MotionVStack
              variants={itemVariants}
              whileHover={{ y: -10, transition: hoverSpring }}
              p={5}
              borderRadius="xl"
              bg={useColorModeValue('white', 'rgba(15, 23, 42, 0.9)')}
              boxShadow="sm"
              border="1px solid"
              borderColor={borderColor}
              align="flex-start"
              spacing={3}
              textAlign="left"
            >
              <Icon as={FaGraduationCap} boxSize={10} color={accentColor} mb={2} />
              <Heading as="h3" size="md" color={accentColor}>
                Education
              </Heading>
              <Divider my={3} />
              <Text color={headingColor} fontWeight="medium">
                Bachelor of Computer Science (Hons.)
              </Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                UiTM Terengganu — CGPA 3.44 (Dean’s List)
              </Text>
              <Text fontSize="sm" color={secondaryTextColor} mt={2}>
                Focus: Software Development & Machine Learning (FYP: Flood Prediction with SVM)
              </Text>
              <Divider my={3} />
              <Text color={headingColor} fontWeight="medium">
                Diploma in Computer Science
              </Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                UiTM Terengganu — CGPA 3.08
              </Text>
            </MotionVStack>

            {/* Achievements */}
            <MotionVStack
              variants={itemVariants}
              whileHover={{ y: -10, transition: hoverSpring }}
              p={5}
              borderRadius="xl"
              bg={useColorModeValue('white', 'rgba(15, 23, 42, 0.9)')}
              boxShadow="sm"
              border="1px solid"
              borderColor={borderColor}
              align="flex-start"
              spacing={3}
              textAlign="left"
            >
              <Icon as={FaTrophy} boxSize={10} color={accentColor} mb={2} />
              <Heading as="h3" size="md" color={accentColor}>
                Achievements
              </Heading>
              <Divider my={3} />
              <VStack spacing={2} align="start" mt={2}>
                <Text color={headingColor} fontWeight="medium">
                  Flood Prediction App (FYP)
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Achieved 90% accuracy using SVM with real-time weather updates and two-day forecasts.
                </Text>
                <Text color={headingColor} fontWeight="medium" pt={2}>
                  Leadership & Community
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Organized webinar “Artificial Intelligence, How It Works?” (100+ participants).
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  • Vice President, Bahasa Arab Club (2022) — 95% attendee satisfaction.
                </Text>
              </VStack>
            </MotionVStack>
          </VStack>

          {/* Technologies Used */}
          <MotionBox 
            mt={16} 
            variants={itemVariants}
            p={6}
            borderRadius="xl"
            bg={useColorModeValue('white', 'rgba(15, 23, 42, 0.9)')}
            boxShadow="sm"
            border="1px solid"
            borderColor={borderColor}
            textAlign="left"
          >
            <Heading as="h3" size="lg" color={accentColor} mb={6} textAlign="left">
              Technologies I Work With
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 4, md: 6 }}>
              <SkillBadge label="Flutter & Dart" colorScheme="blue" />
              <SkillBadge label="Riverpod & BLoC" colorScheme="purple" />
              <SkillBadge label="Firebase (Auth/Firestore)" colorScheme="yellow" />
              <SkillBadge label="REST APIs & WebSockets" colorScheme="cyan" />
              <SkillBadge label="Kotlin · Jetpack Compose" colorScheme="orange" />
              <SkillBadge label="Clean Architecture / MVVM" colorScheme="green" />
              <SkillBadge label="CI/CD & Release Pipelines" colorScheme="pink" />
              <SkillBadge label="Figma to Production UI" colorScheme="teal" />
              <SkillBadge label="Performance Optimization" colorScheme="red" />
              <SkillBadge label="Git, VSCode, Android Studio, Xcode" colorScheme="gray" />
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
