import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Container,
  HStack,
  Badge,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Grid,
  GridItem,
  useToast,
  Image,
  Link,
} from '@chakra-ui/react';
import ResumePreviewModal from '../components/ResumePreviewModal';
import tuxcPreview from '../assets/tuxc_preview.png';
import smsPreview from '../assets/sms_tickets_preview.png';
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiCopy,
  FiCheck,
  FiSmartphone,
} from 'react-icons/fi';

const TECH_PILLS = [
  'Flutter',
  'Dart',
  'Riverpod',
  'BLoC',
  'Clean Architecture',
  'RESTful APIs',
  'CI/CD Pipelines',
  'C# (.NET)',
];

const IMPACT_STATS = [
  { value: '3+ Years', label: 'Mobile Engineering', sub: 'Enterprise & Fintech' },
  { value: '20+', label: 'Store Releases', sub: 'App Store & Google Play' },
  { value: '~90%', label: 'UI Speedup', sub: 'WebView to Native Flutter' },
  { value: '3.44', label: 'CGPA (UiTM)', sub: 'B.Sc. Computer Science (Hons)' },
];

interface HomeProps {
  scrollToPortfolio: () => void;
}

export const Home: React.FC<HomeProps> = ({ scrollToPortfolio }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState<'tuxc' | 'sms'>('tuxc');
  const toast = useToast();

  const textColor = useColorModeValue('neutral.900', 'white');
  const mutedColor = useColorModeValue('neutral.600', 'gray.400');
  const cardBg = useColorModeValue('white', 'rgba(15, 23, 42, 0.75)');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.25)', 'whiteAlpha.200');
  const subtleBg = useColorModeValue('neutral.50', 'whiteAlpha.50');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Afifshyamsul00@gmail.com');
    setCopiedEmail(true);
    toast({
      title: 'Email Copied',
      description: 'Afifshyamsul00@gmail.com copied to clipboard.',
      status: 'success',
      duration: 2500,
      isClosable: true,
      position: 'top',
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <Box
      id="home"
      position="relative"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 16, md: 24 }}
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'minmax(0, 1.15fr) minmax(340px, 0.85fr)' }}
          alignItems="center"
          gap={{ base: 12, lg: 16 }}
        >
          {/* Left Column: Hero Introduction */}
          <GridItem>
            <VStack align="flex-start" spacing={6}>
              {/* Status Pill */}
              <HStack
                bg={subtleBg}
                border="1px solid"
                borderColor={borderColor}
                px={3.5}
                py={1.5}
                borderRadius="full"
                spacing={2.5}
              >
                <Box w={2} h={2} borderRadius="full" bg="emerald.500" />
                <Text fontSize="xs" fontWeight="semibold" color={mutedColor}>
                  Available for Mobile Software Engineer roles
                </Text>
              </HStack>

              {/* Main Headline */}
              <Box>
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" color="cyan.400" mb={1}>
                  Afif Shyamsul Syahiran
                </Text>
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '5xl' }}
                  fontWeight="900"
                  lineHeight="1.15"
                  letterSpacing="-0.03em"
                  color={textColor}
                >
                  Building clean, scalable mobile apps with Flutter.
                </Heading>
              </Box>

              {/* Bio Paragraph */}
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={mutedColor}
                lineHeight="tall"
                maxW="2xl"
              >
                Mobile Software Engineer with <strong>3+ years of experience</strong> across enterprise B2B procurement, cryptocurrency wallets, and e-commerce platforms. Specialized in Flutter, Dart, Riverpod, Clean Architecture, and automated store deployments.
              </Text>

              {/* Tech Stack Pills */}
              <Flex wrap="wrap" gap={2} pt={1}>
                {TECH_PILLS.map((tech) => (
                  <Badge
                    key={tech}
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
                    {tech}
                  </Badge>
                ))}
              </Flex>

              {/* Call-to-Action Buttons */}
              <Flex wrap="wrap" gap={3} pt={2} w="full">
                <Button
                  onClick={scrollToPortfolio}
                  colorScheme="cyan"
                  size="lg"
                  rightIcon={<FiArrowRight />}
                  px={6}
                  borderRadius="xl"
                  fontWeight="bold"
                >
                  View Projects
                </Button>
                <Button
                  onClick={() => setIsResumeOpen(true)}
                  variant="outline"
                  colorScheme="gray"
                  size="lg"
                  leftIcon={<FiDownload />}
                  px={5}
                  borderRadius="xl"
                >
                  Resume PDF
                </Button>
                <Button
                  onClick={handleCopyEmail}
                  variant="ghost"
                  colorScheme="cyan"
                  size="lg"
                  leftIcon={copiedEmail ? <FiCheck /> : <FiCopy />}
                  px={4}
                  borderRadius="xl"
                >
                  {copiedEmail ? 'Copied' : 'Copy Email'}
                </Button>
                <HStack spacing={2} pl={{ base: 0, sm: 2 }}>
                  <Button
                    as={Link}
                    href="https://github.com/afifShyam"
                    isExternal
                    variant="outline"
                    size="lg"
                    px={3.5}
                    borderRadius="xl"
                    aria-label="GitHub"
                  >
                    <Icon as={FiGithub} />
                  </Button>
                  <Button
                    as={Link}
                    href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/"
                    isExternal
                    variant="outline"
                    size="lg"
                    px={3.5}
                    borderRadius="xl"
                    aria-label="LinkedIn"
                  >
                    <Icon as={FiLinkedin} />
                  </Button>
                </HStack>
              </Flex>

              {/* Impact Highlights Grid */}
              <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={3} w="full" pt={4}>
                {IMPACT_STATS.map((stat) => (
                  <Box
                    key={stat.label}
                    bg={cardBg}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="xl"
                    p={3.5}
                  >
                    <Text fontSize="xs" color="gray.400" fontWeight="medium">
                      {stat.label}
                    </Text>
                    <Text fontSize="lg" fontWeight="extrabold" color="cyan.400" mt={0.5}>
                      {stat.value}
                    </Text>
                    <Text fontSize="2xs" color={mutedColor} mt={0.5} noOfLines={1}>
                      {stat.sub}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </GridItem>

          {/* Right Column: Clean App Preview Showcase */}
          <GridItem>
            <Box
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="3xl"
              p={{ base: 5, sm: 6 }}
              boxShadow={useColorModeValue('0 20px 40px rgba(0,0,0,0.06)', '0 20px 40px rgba(0,0,0,0.4)')}
            >
              {/* Switcher Header */}
              <Flex justify="space-between" align="center" mb={4}>
                <HStack spacing={2}>
                  <Icon as={FiSmartphone} color="cyan.400" />
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color={mutedColor}>
                    Production Apps
                  </Text>
                </HStack>

                <HStack spacing={1.5} bg={subtleBg} p={1} borderRadius="lg" border="1px solid" borderColor={borderColor}>
                  <Button
                    size="xs"
                    variant={activeShowcase === 'tuxc' ? 'solid' : 'ghost'}
                    colorScheme={activeShowcase === 'tuxc' ? 'cyan' : 'gray'}
                    onClick={() => setActiveShowcase('tuxc')}
                    borderRadius="md"
                  >
                    TuxC Wallet
                  </Button>
                  <Button
                    size="xs"
                    variant={activeShowcase === 'sms' ? 'solid' : 'ghost'}
                    colorScheme={activeShowcase === 'sms' ? 'cyan' : 'gray'}
                    onClick={() => setActiveShowcase('sms')}
                    borderRadius="md"
                  >
                    SMS System
                  </Button>
                </HStack>
              </Flex>

              {/* Phone Frame with Real App Store Screenshot */}
              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                bg="black"
                border="1px solid"
                borderColor={borderColor}
                maxH="440px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={activeShowcase === 'tuxc' ? tuxcPreview : smsPreview}
                  alt={activeShowcase === 'tuxc' ? 'TuxC Wallet Production App' : 'SMS Facilities Management App'}
                  maxH="440px"
                  w="full"
                  objectFit="contain"
                />
              </Box>

              {/* Showcase Meta Footer */}
              <Box mt={4} pt={3} borderTop="1px solid" borderColor={borderColor}>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Text fontSize="sm" fontWeight="bold" color={textColor}>
                      {activeShowcase === 'tuxc' ? 'TuxC Wallet (Coinyex)' : 'Service Management System (Radiant)'}
                    </Text>
                    <Text fontSize="xs" color={mutedColor}>
                      {activeShowcase === 'tuxc' ? 'Cryptocurrency Wallet · Riverpod · 20+ Releases' : 'Enterprise Field Ticketing · C# Backend'}
                    </Text>
                  </Box>
                  <Button
                    size="xs"
                    variant="outline"
                    colorScheme="cyan"
                    onClick={scrollToPortfolio}
                    rightIcon={<FiArrowRight />}
                  >
                    Details
                  </Button>
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf"
      />
    </Box>
  );
};

export default Home;
