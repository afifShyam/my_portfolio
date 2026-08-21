import React from 'react';
import {
  Box,
  Image,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Flex,
  Badge,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FiCode,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiMapPin,
  FiSmartphone,
  FiLayers,
  FiCpu,
  FiGitPullRequest,
} from 'react-icons/fi';
import afifLogo from '../assets/afif-logo.svg';

const PILLARS = [
  {
    icon: FiSmartphone,
    title: 'Mobile Engineering',
    desc: 'Deep expertise in Flutter & Dart with Riverpod and BLoC for reactive state management, responsive UI development from Figma, and cross-platform optimization.',
  },
  {
    icon: FiLayers,
    title: 'Clean Architecture',
    desc: 'Structured codebase design enforcing strict separation of concerns between UI, domain business rules, and data sources for testability and long-term maintainability.',
  },
  {
    icon: FiCpu,
    title: 'Performance & APIs',
    desc: 'Experience migrating legacy WebViews to native Flutter (delivering ~90% UI speedup), integrating RESTful APIs with Dio, and C# (.NET) notification backend support.',
  },
  {
    icon: FiGitPullRequest,
    title: 'Release & CI/CD Pipelines',
    desc: 'Managed 20+ production store releases on Google Play Console and Apple App Store, automated builds via TestFlight and Firebase App Distribution.',
  },
];

const TIMELINE_EXPERIENCES = [
  {
    period: 'Mar 2026 — Present',
    role: 'Mobile Developer',
    company: 'Radiant GlobalTech Sdn. Bhd.',
    tag: 'Enterprise & B2B Procurement',
    highlights: [
      'Sole Mobile Developer owning the development, architecture, and maintenance of the company’s enterprise mobile applications.',
      'Developing Sigma (centralized B2B procurement platform) and Service Management System (SMS) ticketing application.',
      'Migrated legacy WebView screens into responsive native Flutter interfaces, boosting UI responsiveness by ~90%.',
      'Automated deployment pipelines using TestFlight & Firebase App Distribution, with C# (.NET) notification backend support.',
    ],
  },
  {
    period: 'Aug 2025 — Feb 2026',
    role: 'Mobile Developer',
    company: 'Coinyex Co. Ltd.',
    tag: 'TuxC Cryptocurrency Wallet',
    highlights: [
      'Primary Flutter engineer responsible for the frontend architecture, feature delivery, and maintenance of TuxC Wallet (Send, Receive, Swap).',
      'Migrated state management from Provider to Riverpod for better scalability, API error handling, and predictable data flow.',
      'Refactored the codebase into Clean Architecture, optimizing UI rendering and transaction flows by 10–20%.',
      'Managed 20+ production releases across the Apple App Store and Google Play Store.',
    ],
  },
  {
    period: 'Sep 2023 — Jul 2025',
    role: 'Mobile Developer (Flutter)',
    company: 'RF Infinite Sdn. Bhd.',
    tag: 'E-Commerce & Service Apps',
    highlights: [
      'Progressed from intern to full-time Mobile Developer, building Flutter interfaces and integrating RESTful APIs.',
      'Translated high-fidelity Figma designs into responsive mobile screens, boosting user engagement by 20%.',
      'Developed shopping and reservation modules for Pcari.My using Clean Architecture, reducing reported issues by 35%.',
      'Delivered Ihsan Madani service application with navigation workflows, backend API integration, and social media package modules.',
    ],
  },
  {
    period: '2021 — 2024',
    role: 'Bachelor of Computer Science (Hons.) - CS230',
    company: 'Universiti Teknologi MARA (UiTM)',
    tag: 'CGPA: 3.44 · Dean’s List',
    highlights: [
      'Graduated with Bachelor of Computer Science (Hons.) focused on Software Development and Machine Learning.',
      'Final Year Project: Developed a flood prediction mobile application using Support Vector Machine (SVM) with 90% forecast accuracy.',
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'Provider', 'Android', 'iOS', 'Responsive UI'],
  },
  {
    title: 'Architecture & APIs',
    skills: ['Clean Architecture', 'RESTful APIs', 'Dio', 'JSON Serialization', 'Repository Pattern', 'Performance Tuning'],
  },
  {
    title: 'Deployment & Tools',
    skills: ['CI/CD Pipelines', 'App Store Connect', 'Google Play Console', 'TestFlight', 'Firebase App Distribution', 'Git / GitHub', 'Figma'],
  },
  {
    title: 'Backend & Other Languages',
    skills: ['Firebase Auth & Firestore', 'C# (.NET basics)', 'Kotlin (Jetpack Compose)', 'Java', 'Python', 'SQL / SQLite'],
  },
];

export const About: React.FC = () => {
  const textColor = useColorModeValue('neutral.900', 'white');
  const mutedColor = useColorModeValue('neutral.600', 'gray.400');
  const cardBg = useColorModeValue('white', 'rgba(15, 23, 42, 0.75)');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.25)', 'whiteAlpha.200');
  const subtleBg = useColorModeValue('neutral.50', 'whiteAlpha.50');

  return (
    <Box id="about" py={{ base: 16, md: 24 }}>
      <Container maxW="container.xl">
        {/* Section Heading & Profile Intro */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          gap={{ base: 6, md: 8 }}
          mb={14}
        >
          <Box
            w={{ base: '72px', md: '84px' }}
            h={{ base: '72px', md: '84px' }}
            borderRadius="2xl"
            overflow="hidden"
            border="1px solid"
            borderColor={borderColor}
            p={1}
            bg={cardBg}
            flexShrink={0}
          >
            <Image
              src={afifLogo}
              alt="Afif Shyamsul Syahiran Logo"
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Box>

          <Box flex="1">
            <Flex wrap="wrap" align="center" gap={3} mb={1.5}>
              <HStack spacing={1.5} color="cyan.400">
                <Icon as={FiCode} />
                <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                  Mobile Software Engineer
                </Text>
              </HStack>
              <HStack spacing={1} color={mutedColor} fontSize="xs">
                <Icon as={FiMapPin} color="cyan.400" />
                <Text>Seri Kembangan, Selangor, Malaysia</Text>
              </HStack>
            </Flex>

            <Heading as="h2" size="xl" fontWeight="extrabold" color={textColor} mb={2}>
              Afif Shyamsul Syahiran
            </Heading>
            <Text color={mutedColor} fontSize={{ base: 'md', md: 'lg' }} maxW="3xl" lineHeight="relaxed">
              Mobile developer with <strong>3+ years of professional experience</strong> engineering robust Flutter applications. Experienced in owning full feature lifecycles—from translating Figma specifications into responsive code to architecting Riverpod state models and releasing apps to the stores.
            </Text>
          </Box>
        </Flex>

        {/* Core Pillars */}
        <Box mb={16}>
          <Text fontSize="xs" fontWeight="bold" color="cyan.400" textTransform="uppercase" letterSpacing="wider" mb={4}>
            Engineering Focus
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
            {PILLARS.map((pillar) => (
              <Box
                key={pillar.title}
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="2xl"
                p={5}
              >
                <Icon as={pillar.icon} color="cyan.400" boxSize={5} mb={3} />
                <Heading as="h3" size="sm" color={textColor} mb={2}>
                  {pillar.title}
                </Heading>
                <Text fontSize="xs" color={mutedColor} lineHeight="tall">
                  {pillar.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Experience Timeline */}
        <Box mb={16}>
          <HStack spacing={2} color="cyan.400" mb={6}>
            <Icon as={FiBriefcase} />
            <Heading as="h3" size="md" color={textColor}>
              Experience & Education
            </Heading>
          </HStack>

          <VStack align="stretch" spacing={4}>
            {TIMELINE_EXPERIENCES.map((item) => (
              <Box
                key={item.company}
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="2xl"
                p={{ base: 5, md: 6 }}
              >
                <Flex
                  justify="space-between"
                  align={{ base: 'flex-start', sm: 'center' }}
                  direction={{ base: 'column', sm: 'row' }}
                  gap={2}
                  mb={3}
                >
                  <Box>
                    <Heading as="h4" size="sm" color={textColor}>
                      {item.role}
                    </Heading>
                    <Text fontSize="sm" fontWeight="semibold" color="cyan.400" mt={0.5}>
                      {item.company}
                    </Text>
                  </Box>
                  <HStack spacing={2} wrap="wrap">
                    <Badge bg={subtleBg} color={mutedColor} border="1px solid" borderColor={borderColor} fontSize="xs" px={2.5} py={0.5} borderRadius="md">
                      {item.tag}
                    </Badge>
                    <Text fontSize="xs" fontWeight="bold" color="gray.400">
                      {item.period}
                    </Text>
                  </HStack>
                </Flex>

                <VStack align="flex-start" spacing={1.5} pl={1}>
                  {item.highlights.map((highlight, idx) => (
                    <HStack key={idx} align="flex-start" spacing={2.5}>
                      <Icon as={FiCheckCircle} color="cyan.400" boxSize={3.5} mt={1} flexShrink={0} />
                      <Text fontSize="xs" color={mutedColor} lineHeight="tall">
                        {highlight}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Technical Stack Matrix */}
        <Box>
          <HStack spacing={2} color="cyan.400" mb={6}>
            <Icon as={FiAward} />
            <Heading as="h3" size="md" color={textColor}>
              Technical Skills Matrix
            </Heading>
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {SKILL_CATEGORIES.map((cat) => (
              <Box
                key={cat.title}
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="2xl"
                p={5}
              >
                <Text fontSize="xs" fontWeight="bold" color="cyan.400" textTransform="uppercase" letterSpacing="wider" mb={3}>
                  {cat.title}
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      bg={subtleBg}
                      color={textColor}
                      border="1px solid"
                      borderColor={borderColor}
                      fontSize="xs"
                      px={3}
                      py={1}
                      borderRadius="md"
                      fontWeight="medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
