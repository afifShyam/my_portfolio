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
  Heading,
  Alert,
  AlertIcon,
  useToast,
  useColorModeValue,
  VStack,
  Icon,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiLinkedin, FiGithub } from 'react-icons/fi';
import { type Transition } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { motionChakra } from '../utils/motion';

const MotionBox = motionChakra(Box);
const MotionHeading = motionChakra(Heading);

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  
  const toast = useToast();
  
  // Dynamic colors based on color mode
  const borderColor = useColorModeValue('rgba(159, 184, 181, 0.45)', 'whiteAlpha.200');
  const inputBgColor = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(20, 41, 39, 0.66)');
  const textColor = useColorModeValue('neutral.900', 'whiteAlpha.900');
  const labelColor = useColorModeValue('neutral.500', 'neutral.200');
  const accentColor = useColorModeValue('brand.600', 'brand.300');
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.84)', 'rgba(20, 41, 39, 0.86)');
  const mutedPanelBg = useColorModeValue('brand.50', 'whiteAlpha.100');
  const sectionBg = useColorModeValue('linear-gradient(180deg, #fff8fa 0%, #f7fbfa 100%)', 'linear-gradient(180deg, #241526 0%, #071817 100%)');
  const buildTransition = (duration = 0.5, delay = 0): Transition => ({ duration, delay });

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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccess(null);
    
    try {
      await emailService.sendEmail(formData);
      setSuccess('Your message was sent successfully!');
      toast({
        title: 'Message sent!',
        description: 'Thanks for reaching out. I will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      console.error('Failed to send contact form message', err);
      setSuccess('Failed to send your message. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to send your message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm, toast]);

  return (
    <>
      <Helmet>
        <title>Contact Me | Portfolio</title>
        <meta name="description" content="Get in touch with me for collaborations, freelance projects, or job opportunities." />
      </Helmet>
      
      <Box bg={sectionBg}>
      <Container maxW="container.xl" py={{ base: 16, md: 24 }}>
        {/* Title */}
        <MotionHeading
          as="h2"
          size="2xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={4}
          color={textColor}
          letterSpacing="normal"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: buildTransition() }}
        >
          Let’s Build Something Reliable
        </MotionHeading>
        <Text color={labelColor} textAlign="center" maxW="2xl" mx="auto" mb={12} fontSize="lg">
          Share the product context, timeline, and where you need help. I’ll respond with a practical next step.
        </Text>

        {/* Form Card */}
        <MotionBox
          maxW="5xl"
          mx="auto"
          bg={cardBg}
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 5, md: 8 }}
          borderRadius="lg"
          shadow={useColorModeValue('0 24px 60px rgba(215, 44, 97, 0.1)', '0 24px 60px rgba(0, 0, 0, 0.28)')}
          backdropFilter="blur(18px)"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: buildTransition(0.5, 0.2) }}
        >
          {/* Success/Failure Message */}
          {success && (
            <Alert
              status={success.includes('successfully') ? 'success' : 'error'}
              borderRadius="lg"
              size={'sm'}
              mb={6}
              variant="left-accent"
            >
              <AlertIcon />
              {success}
            </Alert>
          )}

          {/* Contact Form */}
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 8, lg: 10 }}>
            <Box bg={mutedPanelBg} borderRadius="md" p={5} borderWidth="1px" borderColor={borderColor}>
              <VStack align="stretch" spacing={5}>
                <Box>
                  <Text fontSize="sm" color={labelColor} textTransform="uppercase" fontWeight="semibold" mb={2}>
                    Direct links
                  </Text>
                  <Text color={textColor} fontWeight="semibold">Prefer a quick conversation?</Text>
                </Box>
                <Button
                  as={Link}
                  href="mailto:afif.shyamsul@gmail.com"
                  leftIcon={<FiMail />}
                  variant="outline"
                  colorScheme="brand"
                  justifyContent="flex-start"
                >
                  Email me
                </Button>
                <Button
                  as={Link}
                  href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/"
                  isExternal
                  leftIcon={<FiLinkedin />}
                  variant="outline"
                  colorScheme="brand"
                  justifyContent="flex-start"
                >
                  LinkedIn
                </Button>
                <Button
                  as={Link}
                  href="https://github.com/afifShyam"
                  isExternal
                  leftIcon={<FiGithub />}
                  variant="outline"
                  colorScheme="brand"
                  justifyContent="flex-start"
                >
                  GitHub
                </Button>
              </VStack>
            </Box>

            <Box gridColumn={{ base: 'auto', lg: 'span 2' }}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
              <Flex 
                direction={{ base: 'column', md: 'row' }} 
                gap={6} 
                w="full"
              >
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel color={labelColor}>
                    <Flex align="center" gap={2}>
                      <Icon as={FiUser} />
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
                    border="1px solid"
                    borderColor={borderColor}
                    _focus={{
                      borderColor: accentColor,
                      boxShadow: `0 0 0 1px ${accentColor}`,
                    }}
                    _hover={{
                      borderColor: accentColor,
                    }}
                    placeholder="Your name"
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.email}>
                  <FormLabel color={labelColor}>
                    <Flex align="center" gap={2}>
                      <Icon as={FiMail} />
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
                    border="1px solid"
                    borderColor={borderColor}
                    _focus={{
                      borderColor: accentColor,
                      boxShadow: `0 0 0 1px ${accentColor}`,
                    }}
                    _hover={{
                      borderColor: accentColor,
                    }}
                    placeholder="your.email@example.com"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              </Flex>

              <FormControl isInvalid={!!errors.message}>
                <FormLabel color={labelColor}>
                  <Flex align="center" gap={2}>
                    <Icon as={FiMessageSquare} />
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
                  border="1px solid"
                  borderColor={borderColor}
                  _focus={{
                    borderColor: accentColor,
                    boxShadow: `0 0 0 1px ${accentColor}`,
                  }}
                  _hover={{
                    borderColor: accentColor,
                  }}
                  placeholder="Your message here..."
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
                  colorScheme="brand"
                  _hover={{ transform: 'translateY(-2px)' }}
                  _active={{ transform: 'translateY(-1px)' }}
                  _disabled={{ opacity: 0.6, cursor: 'not-allowed' }}
                  isDisabled={loading}
                  fontWeight="semibold"
                  shadow="md"
                  size="lg"
                  borderRadius="md"
                  py={4}
                  rightIcon={<FiSend />}
                  w={{ base: 'full', md: 'auto' }}
                  alignSelf="flex-end"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </MotionBox>
            </VStack>
            </form>
            </Box>
          </SimpleGrid>
        </MotionBox>
      </Container>
      </Box>
    </>
  );
};

export default memo(Contact);
