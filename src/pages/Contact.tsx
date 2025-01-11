import { useState } from 'react';
import emailService from '../services/emailService';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Heading,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi'; // Import Send Icon

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      emailService.sendEmail(formData);
      setSuccess('Your message was sent successfully!');
    } catch (error) {
      setSuccess('Failed to send your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.xl" py={28}>
      {/* Title */}
      <Heading as="h2" size="2xl" fontWeight="extrabold" textAlign="center" mb={16} color="white">
        Let's Connect
      </Heading>

      {/* Form Card */}
      <Box
        maxW="6xl"
        mx="auto"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="whiteAlpha.300"
        p={10}
        borderRadius="3xl"
        shadow="2xl"
      >
        {/* Description */}
        <Text fontSize="lg" color="gray.300" textAlign="center" mb={10}>
          I'm open to collaborations, freelance projects, and exciting job opportunities. Feel free
          to reach out via the form below or connect with me on social media!
        </Text>

        {/* Success/Failure Message */}
        {success && (
          <Alert
            status={success.includes('successfully') ? 'success' : 'error'}
            borderRadius="lg"
            size={'sm'}
            mb={2}
            textColor={'black'}
          >
            <AlertIcon />
            {success}
          </Alert>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap={8}>
            <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
              <FormControl isRequired>
                <FormLabel color="gray.300">Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  bg="gray.800"
                  color="white"
                  border="1px solid"
                  borderColor="gray.700"
                  _focus={{
                    outline: 'none',
                    ring: 2,
                    ringColor: 'teal.400',
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  bg="gray.800"
                  color="white"
                  border="1px solid"
                  borderColor="gray.700"
                  _focus={{
                    outline: 'none',
                    ring: 2,
                    ringColor: 'teal.400',
                  }}
                />
              </FormControl>
            </Flex>

            <FormControl isRequired>
              <FormLabel color="gray.300">Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                bg="gray.800"
                color="white"
                border="1px solid"
                borderColor="gray.700"
                _focus={{
                  outline: 'none',
                  ring: 2,
                  ringColor: 'teal.400',
                }}
              />
            </FormControl>

            <Button
              type="submit"
              isLoading={loading}
              bgGradient="linear(to-r, teal.400, green.500)" // Changed button color
              _hover={{
                bgGradient: 'linear(to-r, green.500, teal.500)',
                transform: 'scale(1.05)',
              }}
              _disabled={{ opacity: 0.5, cursor: 'not-allowed' }}
              isDisabled={loading}
              color="white"
              fontWeight="semibold"
              shadow="lg"
              size="lg"
              borderRadius="xl"
              py={4}
              transition="all 0.3s ease"
              rightIcon={<FiSend />} // Added send icon
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
