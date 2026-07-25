import { memo } from 'react';
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  Link,
  Flex,
  Button,
  Icon,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  HStack,
  Badge,
  Divider,
  Tag,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaBriefcase, FaRocket } from 'react-icons/fa';
import { FiCheckCircle, FiCode, FiCpu, FiDatabase, FiLayers, FiMapPin, FiTool, FiCalendar, FiSmartphone } from 'react-icons/fi';
import SectionHeading from '../components/ui/SectionHeading';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  bullets: string[];
  techUsed: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Flutter Developer · Frontend Lead',
    company: 'Coinyex Co. Ltd.',
    period: 'Aug 2025 — Present',
    isCurrent: true,
    summary: 'Leading the Flutter mobile frontend for TuxC Wallet, driving feature stability, crypto flow UX, and release deployment.',
    bullets: [
      'Led the architecture and implementation of send, receive, and swap crypto flows.',
      'Refactored state management using Riverpod & BLoC, reducing state bugs and improving API handling.',
      'Collaborated closely with backend engineers and product managers to deliver seamless monthly app updates.',
    ],
    techUsed: ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'Crypto APIs', 'Firebase'],
  },
  {
    role: 'Mobile Developer',
    company: 'RF Infinite Sdn. Bhd.',
    period: 'Sep 2023 — Jul 2025',
    isCurrent: false,
    summary: 'Built and scaled high-volume mobile application modules for e-commerce, user booking, and productivity tools.',
    bullets: [
      'Delivered pixel-perfect mobile interfaces from Figma designs for commerce and reservation apps.',
      'Integrated RESTful APIs, optimized app startup time, and resolved memory leak issues.',
      'Managed Google Play Console & Apple App Store builds, CI/CD testing, and staging releases.',
    ],
    techUsed: ['Flutter', 'Dart', 'BLoC', 'REST API', 'Figma', 'Play Store'],
  },
];

const SKILL_GROUPS = [
  {
    title: 'Mobile Engineering',
    icon: FiCode,
    badgeColor: 'cyan',
    items: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Provider', 'BLoC Pattern'],
  },
  {
    title: 'Backend & APIs',
    icon: FiDatabase,
    badgeColor: 'purple',
    items: ['REST API Integration', 'Firebase Firestore', 'Authentication', 'Cloud Messaging'],
  },
  {
    title: 'Tools & Ecosystem',
    icon: FiTool,
    badgeColor: 'blue',
    items: ['Git & GitHub', 'VS Code', 'Android Studio', 'Xcode', 'Figma', 'Postman'],
  },
  {
    title: 'Architecture & Testing',
    icon: FiLayers,
    badgeColor: 'teal',
    items: ['Clean Architecture', 'MVVM Pattern', 'App Performance', 'Play/App Store Release'],
  },
];

const About = memo(function About() {
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.88)', 'rgba(15, 23, 42, 0.82)');
  const sectionBg = useColorModeValue(
    'linear-gradient(180deg, #f8fafc 0%, #eef6ff 100%)',
    'linear-gradient(180deg, #090d16 0%, #0f172a 100%)'
  );
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const headingColor = useColorModeValue('neutral.900', 'white');
  const accentColor = useColorModeValue('brand.600', 'cyan.400');
  const textColor = useColorModeValue('neutral.600', 'gray.300');
  const secondaryTextColor = useColorModeValue('neutral.500', 'gray.400');
  const insetBg = useColorModeValue('neutral.50', 'rgba(15, 23, 42, 0.6)');
  const shadowValue = useColorModeValue('0 18px 38px rgba(15, 23, 42, 0.08)', '0 18px 38px rgba(0, 0, 0, 0.3)');
  const timelineTrackBg = useColorModeValue('gray.200', 'whiteAlpha.200');
  const nodeBgPast = useColorModeValue('white', 'gray.800');
  const dateBadgeBg = useColorModeValue('white', 'whiteAlpha.100');

  return (
    <Box bg={sectionBg} py={{ base: 16, md: 24 }}>
      <Container maxW="container.xl" px={5}>
        <VStack align="stretch" spacing={12}>
          <SectionHeading
            title="Clean Code, Robust State, & Seamless Mobile Experiences."
            subtitle="Specialized Flutter Mobile Developer with 2+ years of production experience building secure crypto wallets, e-commerce platforms, and daily-use applications."
            align="left"
          />

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            {/* Work Style */}
            <Box
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow={shadowValue}
              backdropFilter="blur(16px)"
            >
              <HStack spacing={3} mb={5} color={accentColor}>
                <Icon as={FaBriefcase} boxSize={5} />
                <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                  Core Engineering Principles
                </Text>
              </HStack>
              <List spacing={3.5} color={textColor}>
                <ListItem display="flex" alignItems="flex-start" gap={3}>
                  <ListIcon as={FiCheckCircle} color={accentColor} boxSize={5} mt={0.5} />
                  <Text fontSize="sm" lineHeight="relaxed">
                    <Text as="span" fontWeight="semibold" color={headingColor}>Declarative & Modular UI:</Text> Crafting responsive, scalable screens in Flutter aligned with Figma design specs.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="flex-start" gap={3}>
                  <ListIcon as={FiCheckCircle} color={accentColor} boxSize={5} mt={0.5} />
                  <Text fontSize="sm" lineHeight="relaxed">
                    <Text as="span" fontWeight="semibold" color={headingColor}>Predictable State Management:</Text> Utilizing Riverpod, BLoC, and Provider to build testable, bug-free reactive state flows.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="flex-start" gap={3}>
                  <ListIcon as={FiCheckCircle} color={accentColor} boxSize={5} mt={0.5} />
                  <Text fontSize="sm" lineHeight="relaxed">
                    <Text as="span" fontWeight="semibold" color={headingColor}>Reliable API & Backend Integration:</Text> Seamless REST API, GraphQL, and Firebase service integration with robust error boundaries.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="flex-start" gap={3}>
                  <ListIcon as={FiCheckCircle} color={accentColor} boxSize={5} mt={0.5} />
                  <Text fontSize="sm" lineHeight="relaxed">
                    <Text as="span" fontWeight="semibold" color={headingColor}>Store Deployment & Delivery:</Text> Hands-on experience delivering Android APK/AAB and iOS TestFlight/App Store builds.
                  </Text>
                </ListItem>
              </List>
            </Box>

            {/* Quick Facts Grid */}
            <Box
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow={shadowValue}
              backdropFilter="blur(16px)"
            >
              <HStack spacing={3} mb={5} color={accentColor}>
                <Icon as={FiMapPin} boxSize={5} />
                <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                  Professional Summary
                </Text>
              </HStack>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                {[
                  ['Role', 'Flutter Developer / Frontend Lead'],
                  ['Experience', '2+ Years Industry Delivery'],
                  ['Key Focus', 'Crypto Wallet, E-Commerce, Health'],
                  ['Primary Tools', 'Flutter, Dart, Firebase, BLoC'],
                  ['Architecture', 'Clean Architecture & MVVM'],
                  ['Deployment', 'Google Play & Apple App Store'],
                ].map(([label, value]) => (
                  <Box key={label} bg={insetBg} borderRadius="xl" p={4} borderWidth="1px" borderColor={borderColor}>
                    <Text fontSize="xs" textTransform="uppercase" letterSpacing="widest" fontWeight="semibold" color={secondaryTextColor}>
                      {label}
                    </Text>
                    <Text mt={1.5} fontWeight="semibold" fontSize="sm" color={headingColor}>
                      {value}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          {/* Interactive Skills Grid */}
          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            boxShadow={shadowValue}
            backdropFilter="blur(16px)"
          >
            <HStack spacing={3} mb={6} color={accentColor}>
              <Icon as={FiCpu} boxSize={5} />
              <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                Technical Skill Matrix
              </Text>
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={5}>
              {SKILL_GROUPS.map((group) => (
                <Box
                  key={group.title}
                  borderWidth="1px"
                  borderColor={borderColor}
                  borderRadius="xl"
                  p={5}
                  bg={insetBg}
                  transition="all 0.2s ease"
                  _hover={{ borderColor: accentColor, transform: 'translateY(-2px)' }}
                >
                  <HStack spacing={2.5} mb={4} color={accentColor}>
                    <Icon as={group.icon} boxSize={5} />
                    <Text fontWeight="bold" fontSize="sm" color={headingColor}>{group.title}</Text>
                  </HStack>
                  <Flex wrap="wrap" gap={2}>
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        borderRadius="full"
                        px={3}
                        py={1}
                        fontSize="xs"
                        textTransform="none"
                        colorScheme={group.badgeColor}
                        variant="subtle"
                        fontWeight="medium"
                      >
                        {item}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Interactive Experience Timeline */}
          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            boxShadow={shadowValue}
            backdropFilter="blur(16px)"
          >
            <HStack spacing={3} mb={8} color={accentColor}>
              <Icon as={FaRocket} boxSize={5} />
              <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                Work Experience Timeline
              </Text>
            </HStack>

            <VStack align="stretch" spacing={8} position="relative">
              {/* Timeline center track */}
              <Box
                position="absolute"
                left={{ base: "19px", md: "23px" }}
                top={4}
                bottom={4}
                w="2px"
                bg={timelineTrackBg}
                zIndex={0}
              />

              {EXPERIENCE.map((job) => (
                <Flex key={job.role} position="relative" zIndex={1} align="flex-start" gap={{ base: 4, md: 6 }}>
                  {/* Glowing Node Dot */}
                  <Box
                    w={{ base: "40px", md: "48px" }}
                    h={{ base: "40px", md: "48px" }}
                    borderRadius="full"
                    bg={job.isCurrent ? 'cyan.500' : nodeBgPast}
                    border="3px solid"
                    borderColor={job.isCurrent ? 'cyan.300' : accentColor}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    boxShadow={job.isCurrent ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'}
                  >
                    <Icon as={FiSmartphone} color={job.isCurrent ? 'white' : accentColor} boxSize={5} />
                  </Box>

                  {/* Experience Card */}
                  <Box
                    flex="1"
                    borderWidth="1px"
                    borderColor={borderColor}
                    borderRadius="xl"
                    p={{ base: 5, md: 6 }}
                    bg={insetBg}
                    transition="all 0.25s ease"
                    _hover={{ borderColor: accentColor }}
                  >
                    <Flex justify="space-between" align={{ base: 'flex-start', sm: 'center' }} direction={{ base: 'column', sm: 'row' }} gap={2} mb={3}>
                      <Box>
                        <HStack spacing={2} wrap="wrap">
                          <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} color={headingColor}>
                            {job.role}
                          </Text>
                          {job.isCurrent && (
                            <Badge colorScheme="emerald" borderRadius="full" px={2.5} py={0.5} fontSize="xs">
                              PRESENT ROLE
                            </Badge>
                          )}
                        </HStack>
                        <Text fontSize="sm" fontWeight="semibold" color={accentColor} mt={0.5}>
                          {job.company}
                        </Text>
                      </Box>

                      <HStack color={secondaryTextColor} fontSize="xs" fontWeight="semibold" bg={dateBadgeBg} px={3} py={1.5} borderRadius="full" borderWidth="1px" borderColor={borderColor}>
                        <Icon as={FiCalendar} />
                        <Text>{job.period}</Text>
                      </HStack>
                    </Flex>

                    <Text color={textColor} fontSize="sm" lineHeight="relaxed" mb={4}>
                      {job.summary}
                    </Text>

                    <List spacing={2} mb={4} fontSize="sm" color={textColor}>
                      {job.bullets.map((bullet, i) => (
                        <ListItem key={i} display="flex" alignItems="flex-start" gap={2.5}>
                          <ListIcon as={FiCheckCircle} color={accentColor} mt={1} />
                          <Text fontSize="sm" color={textColor} lineHeight="relaxed">
                            {bullet}
                          </Text>
                        </ListItem>
                      ))}
                    </List>

                    <Divider my={3} borderColor={borderColor} />

                    <Flex wrap="wrap" gap={1.5}>
                      {job.techUsed.map((tech) => (
                        <Tag key={tech} size="sm" colorScheme="gray" variant="subtle" borderRadius="md" fontSize="xs">
                          {tech}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>

          {/* Social CTA Links */}
          <Flex justify="center" gap={4} direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={Link}
              href="https://github.com/afifShyam"
              isExternal
              leftIcon={<FaGithub />}
              colorScheme="gray"
              size="lg"
              borderRadius="xl"
              style={{ textDecoration: 'none' }}
            >
              Explore GitHub
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/"
              isExternal
              leftIcon={<FaLinkedin />}
              colorScheme="cyan"
              size="lg"
              borderRadius="xl"
              style={{ textDecoration: 'none' }}
            >
              Connect on LinkedIn
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
});

export default About;

