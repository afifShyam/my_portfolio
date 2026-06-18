import { memo } from 'react';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumePreviewModal = memo(function ResumePreviewModal({
  isOpen,
  onClose,
  resumeUrl,
}: ResumePreviewModalProps) {
  const panelBg = useColorModeValue('white', 'rgba(15, 23, 42, 0.96)');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const textColor = useColorModeValue('neutral.600', 'neutral.200');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', lg: '6xl' }} scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent bg={panelBg} borderWidth="1px" borderColor={borderColor} borderRadius={{ base: 0, lg: '2xl' }}>
        <ModalHeader>
          <Flex align="center" justify="space-between" gap={4} wrap="wrap">
            <Box>
              <Text fontSize="lg" fontWeight="semibold">
                Resume Preview
              </Text>
              <Text fontSize="sm" color={textColor}>
                View the latest resume and download it if needed.
              </Text>
            </Box>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody px={{ base: 4, md: 6 }} pb={6}>
          <Box
            as="iframe"
            src={`${resumeUrl}#view=FitH`}
            title="Resume preview"
            w="full"
            minH={{ base: '70vh', lg: '75vh' }}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="xl"
            bg="white"
          />
        </ModalBody>
        <ModalFooter gap={3} flexWrap="wrap">
          <Button as="a" href={resumeUrl} target="_blank" rel="noreferrer" variant="outline" colorScheme="brand" leftIcon={<FiExternalLink />}>
            Open in new tab
          </Button>
          <Button as="a" href={resumeUrl} download colorScheme="brand" leftIcon={<FiDownload />}>
            Download Resume
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default ResumePreviewModal;
