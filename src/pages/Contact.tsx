import { useState, memo, useCallback } from 'react';
import emailService, { EmailData } from '../services/emailService';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  Alert,
  AlertIcon,
  useToast,
  useColorModeValue,
  VStack,
  Icon,
  SimpleGrid,
  Link,
  Badge,
  HStack,
} from '@chakra-ui/react';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiLinkedin, FiGithub, FiDownload, FiZap } from 'react-icons/fi';
import { type Transition } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { motionChakra } from '../utils/motion';
import SectionHeading from '../components/ui/SectionHeading';
import ResumePreviewModal from '../components/ResumePreviewModal';

const MotionBox = motionChakra(Box);

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const QUICK_PROMPTS = [
  { label: '💼 Job Opportunity', text: 'Hi Afif! We are looking for a Flutter developer for an exciting role.' },
  { label: '🚀 Flutter App Project', text: 'Hi Afif! I have a mobile app project I would like to consult with you on.' },
  { label: '💬 General Inquiry', text: 'Hi Afif! Reaching out to connect and discuss mobile development.' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const toast = useToast();

  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const inputBgColor = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(15, 23, 42, 0.7)');
  const textColor = useColorModeValue('neutral.900', 'whiteAlpha.900');
  const labelColor = useColorModeValue('neutral.600', 'neutral.200');
  const accentColor = useColorModeValue('brand.600', 'cyan.400');
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(15, 23, 42, 0.84)');
  const mutedPanelBg = useColorModeValue('neutral.50', 'rgba(15, 23, 42, 0.6)');
  const sectionBg = useColorModeValue(
    'linear-gradient(180deg, #f8fafc 0%, #eef6ff 100%)',
    'linear-gradient(180deg, #090d16 0%, #0f172a 100%)'
  );

  const buildTransition = (duration = 0.5, delay = 0): Transition => ({ duration, delay });

  const handleQuickPrompt = (promptText: string) => {
    setFormData((prev) => ({ ...prev, message: promptText }));
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: undefined }));
    }
  };

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setLoading(true);
      setSuccess(null);

      try {
        await emailService.sendEmail(formData);
        setSuccess('Your message was sent successfully.');
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you shortly.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        console.error('Failed to send contact form message', err);
        setSuccess('Failed to send your message. Please try again later.');
        toast({
          title: 'Submission Error',
          description: 'Failed to send message. Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      } finally {
        setLoading(false);
      }
    },
    [formData, toast, validateForm]
  );

  return (
    <>
      <Helmet>
        <title>Get In Touch | Afif Shyamsul Portfolio</title>
        <meta name="description" content="Get in touch for mobile development roles, Flutter freelance projects, or tech collaborations." />
      </Helmet>

      <Box bg={sectionBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Box mb={12}>
            <SectionHeading
              title="Let’s Build Something Great Together."
              subtitle="Looking for a Flutter developer to build or scale your mobile app? Send a message below or connect directly."
              align="left"
            />
          </Box>

          <MotionBox
            maxW="5xl"
            mx="auto"
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            p={{ base: 6, md: 10 }}
            borderRadius="2xl"
            shadow={useColorModeValue('0 24px 60px rgba(15, 23, 42, 0.08)', '0 24px 60px rgba(0, 0, 0, 0.35)')}
            backdropFilter="blur(18px)"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: buildTransition(0.5, 0.2) }}
          >
            {success && (
              <Alert
                status={success.includes('successfully') ? 'success' : 'error'}
                borderRadius="xl"
                size="sm"
                mb={6}
                variant="left-accent"
              >
                <AlertIcon />
                {success}
              </Alert>
            )}

            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 8, lg: 10 }}>
              {/* Direct Links Panel */}
              <Box bg={mutedPanelBg} borderRadius="xl" p={6} borderWidth="1px" borderColor={borderColor}>
                <VStack align="stretch" spacing={5}>
                  <Box>
                    <Text fontSize="xs" color={labelColor} textTransform="uppercase" fontWeight="bold" letterSpacing="wider" mb={2}>
                      Direct Connect
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                      Reach out via social profiles or preview my resume.
                    </Text>
                  </Box>

                  <Button
                    as={Link}
                    href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/"
                    isExternal
                    leftIcon={<FiLinkedin />}
                    colorScheme="cyan"
                    variant="outline"
                    borderRadius="xl"
                    justifyContent="flex-start"
                    style={{ textDecoration: 'none' }}
                  >
                    LinkedIn Profile
                  </Button>
                  <Button
                    as={Link}
                    href="https://github.com/afifShyam"
                    isExternal
                    leftIcon={<FiGithub />}
                    colorScheme="gray"
                    variant="outline"
                    borderRadius="xl"
                    justifyContent="flex-start"
                    style={{ textDecoration: 'none' }}
                  >
                    GitHub Portfolio
                  </Button>
                  <Button
                    onClick={() => setIsResumeOpen(true)}
                    leftIcon={<FiDownload />}
                    colorScheme="cyan"
                    borderRadius="xl"
                    justifyContent="flex-start"
                  >
                    Preview Resume PDF
                  </Button>
                </VStack>
              </Box>

              {/* Contact Form */}
              <Box gridColumn={{ base: 'auto', lg: 'span 2' }}>
                {/* Quick Prompts */}
                <Box mb={6}>
                  <HStack spacing={2} mb={2.5}>
                    <Icon as={FiZap} color="cyan.400" />
                    <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color={labelColor}>
                      Quick Message Prompts
                    </Text>
                  </HStack>
                  <Flex wrap="wrap" gap={2}>
                    {QUICK_PROMPTS.map((prompt) => (
                      <Badge
                        key={prompt.label}
                        as="button"
                        type="button"
                        onClick={() => handleQuickPrompt(prompt.text)}
                        px={3}
                        py={1.5}
                        borderRadius="full"
                        colorScheme="cyan"
                        variant="subtle"
                        fontSize="xs"
                        fontWeight="medium"
                        cursor="pointer"
                        _hover={{
                          transform: 'scale(1.03)',
                          bg: 'cyan.500',
                          color: 'white',
                        }}
                        transition="all 0.2s ease"
                      >
                        {prompt.label}
                      </Badge>
                    ))}
                  </Flex>
                </Box>

                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <Flex direction={{ base: 'column', md: 'row' }} gap={5} w="full">
                      <FormControl isInvalid={!!errors.name}>
                        <FormLabel color={labelColor} fontSize="sm" fontWeight="semibold">
                          <Flex align="center" gap={2}>
                            <Icon as={FiUser} color={accentColor} />
                            <Text>Name</Text>
                          </Flex>
                        </FormLabel>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          bg={inputBgColor}
                          color={textColor}
                          borderRadius="xl"
                          border="1px solid"
                          borderColor={borderColor}
                          _focus={{
                            borderColor: accentColor,
                            boxShadow: `0 0 0 1px ${accentColor}`,
                          }}
                          placeholder="Your name"
                        />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.email}>
                        <FormLabel color={labelColor} fontSize="sm" fontWeight="semibold">
                          <Flex align="center" gap={2}>
                            <Icon as={FiMail} color={accentColor} />
                            <Text>Email</Text>
                          </Flex>
                        </FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          bg={inputBgColor}
                          color={textColor}
                          borderRadius="xl"
                          border="1px solid"
                          borderColor={borderColor}
                          _focus={{
                            borderColor: accentColor,
                            boxShadow: `0 0 0 1px ${accentColor}`,
                          }}
                          placeholder="your.email@example.com"
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                    </Flex>

                    <FormControl isInvalid={!!errors.message}>
                      <FormLabel color={labelColor} fontSize="sm" fontWeight="semibold">
                        <Flex align="center" gap={2}>
                          <Icon as={FiMessageSquare} color={accentColor} />
                          <Text>Message</Text>
                        </Flex>
                      </FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        bg={inputBgColor}
                        color={textColor}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor={borderColor}
                        _focus={{
                          borderColor: accentColor,
                          boxShadow: `0 0 0 1px ${accentColor}`,
                        }}
                        placeholder="Tell me about your mobile app project or team role."
                      />
                      <FormErrorMessage>{errors.message}</FormErrorMessage>
                    </FormControl>

                    <MotionBox
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: buildTransition(0.5, 0.3) }}
                      w="full"
                    >
                      <Button
                        type="submit"
                        isLoading={loading}
                        colorScheme="cyan"
                        bgGradient="linear(to-r, cyan.500, blue.600)"
                        color="white"
                        _hover={{
                          bgGradient: "linear(to-r, cyan.400, blue.500)",
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.5)',
                        }}
                        _active={{ transform: 'translateY(-1px)' }}
                        isDisabled={loading}
                        fontWeight="semibold"
                        size="lg"
                        borderRadius="xl"
                        py={6}
                        rightIcon={<FiSend />}
                        w={{ base: 'full', md: 'auto' }}
                        alignSelf="flex-end"
                      >
                        {loading ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </MotionBox>
                  </VStack>
                </form>
              </Box>
            </SimpleGrid>
          </MotionBox>
        </Container>
        <ResumePreviewModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          resumeUrl="/Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf"
        />
      </Box>
    </>
  );
};

export default memo(Contact);

