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
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaBriefcase, FaRocket } from 'react-icons/fa';
import { FiCheckCircle, FiCode, FiCpu, FiDatabase, FiLayers, FiMapPin, FiTool } from 'react-icons/fi';
import SectionHeading from '../components/ui/SectionHeading';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Flutter Developer · Frontend Lead',
    company: 'Coinyex Co. Ltd.',
    period: 'Aug 2025 — Present',
    summary: 'Leading the Flutter frontend for TuxC Wallet and supporting release delivery.',
    bullets: [
      'Led the frontend work for send, receive, and swap flows.',
      'Improved state handling, API integration, and release readiness.',
      'Worked with backend and product teams to ship stable updates.',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'RF Infinite Sdn. Bhd.',
    period: 'Sep 2023 — Jul 2025',
    summary: 'Built and improved mobile app screens for commerce, reservation, and productivity flows.',
    bullets: [
      'Built clean mobile UI from design files and requirements.',
      'Integrated REST APIs and improved app performance.',
      'Supported release management, testing, and deployment.',
    ],
  },
];

const SKILL_GROUPS = [
  {
    title: 'Mobile',
    icon: FiCode,
    items: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Provider', 'BLoC'],
  },
  {
    title: 'Backend/API',
    icon: FiDatabase,
    items: ['REST API integration', 'Firebase services'],
  },
  {
    title: 'Tools',
    icon: FiTool,
    items: ['Git', 'VS Code', 'Android Studio', 'Figma', 'Xcode'],
  },
  {
    title: 'Other',
    icon: FiLayers,
    items: ['Clean architecture', 'Performance optimization', 'Deployment'],
  },
];

const About = memo(function About() {
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(15, 23, 42, 0.82)');
  const sectionBg = useColorModeValue(
    'linear-gradient(180deg, #f8fafc 0%, #eef6ff 100%)',
    'linear-gradient(180deg, #0f172a 0%, #111827 100%)'
  );
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const headingColor = useColorModeValue('neutral.900', 'white');
  const accentColor = useColorModeValue('brand.700', 'brand.300');
  const textColor = useColorModeValue('neutral.600', 'neutral.200');
  const secondaryTextColor = useColorModeValue('neutral.500', 'neutral.300');
  const insetBg = useColorModeValue('neutral.50', 'whiteAlpha.100');

  return (
    <Box bg={sectionBg}>
      <Container maxW="container.xl" px={5} py={{ base: 16, md: 24 }}>
        <VStack align="stretch" spacing={10}>
          <SectionHeading
            title="I build mobile apps that feel clean and dependable."
            subtitle="I focus on Flutter mobile development, clean UI, API integration, Firebase, app performance, and smooth user experience."
            align="left"
          />

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            <Box
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 5, md: 8 }}
              boxShadow={useColorModeValue('0 18px 38px rgba(15, 23, 42, 0.08)', '0 18px 38px rgba(0, 0, 0, 0.28)')}
            >
              <HStack spacing={3} mb={4} color={accentColor}>
                <Icon as={FaBriefcase} />
                <Text fontWeight="semibold">Work style</Text>
              </HStack>
              <List spacing={3} color={textColor}>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color={accentColor} />
                  Built user-focused screens with Flutter and Dart.
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color={accentColor} />
                  Integrated REST APIs and Firebase services.
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color={accentColor} />
                  Improved performance, stability, and release quality.
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color={accentColor} />
                  Worked closely with backend and product teams.
                </ListItem>
              </List>
            </Box>

            <Box
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 5, md: 8 }}
              boxShadow={useColorModeValue('0 18px 38px rgba(15, 23, 42, 0.08)', '0 18px 38px rgba(0, 0, 0, 0.28)')}
            >
              <HStack spacing={3} mb={4} color={accentColor}>
                <Icon as={FiMapPin} />
                <Text fontWeight="semibold">Quick facts</Text>
              </HStack>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
                {[
                  ['Role', 'Flutter Mobile Developer'],
                  ['Focus', 'UI, APIs, Firebase'],
                  ['Experience', '2+ years'],
                  ['Projects', 'Fintech, e-commerce, health'],
                ].map(([label, value]) => (
                  <Box key={label} bg={insetBg} borderRadius="xl" p={4} borderWidth="1px" borderColor={borderColor}>
                    <Text fontSize="xs" textTransform="uppercase" letterSpacing="widest" color={secondaryTextColor}>
                      {label}
                    </Text>
                    <Text mt={1} fontWeight="semibold" color={headingColor}>
                      {value}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 5, md: 8 }}
            boxShadow={useColorModeValue('0 18px 38px rgba(15, 23, 42, 0.08)', '0 18px 38px rgba(0, 0, 0, 0.28)')}
          >
            <HStack spacing={3} mb={5} color={accentColor}>
              <Icon as={FiCpu} />
              <Text fontWeight="semibold">Skills</Text>
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
              {SKILL_GROUPS.map((group) => (
                <Box
                  key={group.title}
                  borderWidth="1px"
                  borderColor={borderColor}
                  borderRadius="xl"
                  p={4}
                  bg={insetBg}
                >
                  <HStack spacing={2} mb={3} color={accentColor}>
                    <Icon as={group.icon} />
                    <Text fontWeight="semibold">{group.title}</Text>
                  </HStack>
                  <Flex wrap="wrap" gap={2}>
                    {group.items.map((item) => (
                      <Badge key={item} borderRadius="full" px={3} py={1} textTransform="none" colorScheme="brand" variant="subtle">
                        {item}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 5, md: 8 }}
            boxShadow={useColorModeValue('0 18px 38px rgba(15, 23, 42, 0.08)', '0 18px 38px rgba(0, 0, 0, 0.28)')}
          >
            <HStack spacing={3} mb={5} color={accentColor}>
              <Icon as={FaRocket} />
              <Text fontWeight="semibold">Work experience</Text>
            </HStack>
            <VStack align="stretch" spacing={6}>
              {EXPERIENCE.map((job) => (
                <Box key={job.role} borderWidth="1px" borderColor={borderColor} borderRadius="xl" p={4} bg={insetBg}>
                  <HStack justify="space-between" align="start" spacing={4} flexWrap="wrap">
                    <Box>
                      <Text fontWeight="semibold" color={headingColor}>
                        {job.role}
                      </Text>
                      <Text fontSize="sm" color={secondaryTextColor}>
                        {job.company}
                      </Text>
                    </Box>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      {job.period}
                    </Text>
                  </HStack>
                  <Text mt={3} color={textColor} fontSize="sm" lineHeight="tall">
                    {job.summary}
                  </Text>
                  <List spacing={2} mt={3} fontSize="sm" color={textColor}>
                    {job.bullets.map((bullet) => (
                      <ListItem key={bullet}>
                        <ListIcon as={FiCheckCircle} color={accentColor} />
                        {bullet}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </VStack>
          </Box>

          <Flex justify="center" gap={4} direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={Link}
              href="https://github.com/afifShyam"
              isExternal
              leftIcon={<FaGithub />}
              colorScheme="brand"
              size="lg"
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/"
              isExternal
              leftIcon={<FaLinkedin />}
              variant="outline"
              colorScheme="brand"
              size="lg"
            >
              LinkedIn
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
});

export default About;
