import React, { useState, useMemo } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Flex,
  Text,
  Badge,
  Icon,
  useColorModeValue,
  useColorMode,
  Box,
  Kbd,
} from '@chakra-ui/react';
import {
  FiSearch,
  FiFileText,
  FiCopy,
  FiMoon,
  FiSun,
  FiGithub,
  FiLinkedin,
  FiSmartphone,
  FiArrowRight,
  FiHome,
  FiUser,
  FiMail,
  FiCheck,
} from 'react-icons/fi';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Projects' | 'Links';
  icon: typeof FiSearch;
  badge?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  scrollToHome: () => void;
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  scrollToHome,
  scrollToPortfolio,
  scrollToAbout,
  scrollToContact,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const modalBg = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(15, 23, 42, 0.95)');
  const itemHoverBg = useColorModeValue('cyan.50', 'whiteAlpha.100');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.3)', 'rgba(255, 255, 255, 0.15)');
  const textColor = useColorModeValue('neutral.900', 'white');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Afifshyamsul00@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: 'resume',
        title: 'Preview Resume PDF',
        category: 'Actions',
        icon: FiFileText,
        badge: 'PDF',
        action: () => {
          onClose();
          onOpenResume();
        },
      },
      {
        id: 'copy-email',
        title: copied ? 'Email Copied!' : 'Copy Email (Afifshyamsul00@gmail.com)',
        category: 'Actions',
        icon: copied ? FiCheck : FiCopy,
        badge: 'Clipboard',
        action: handleCopyEmail,
      },
      {
        id: 'toggle-theme',
        title: `Switch to ${colorMode === 'dark' ? 'Light' : 'Dark'} Mode`,
        category: 'Actions',
        icon: colorMode === 'dark' ? FiSun : FiMoon,
        action: () => {
          toggleColorMode();
          onClose();
        },
      },
      {
        id: 'nav-home',
        title: 'Go to Home Hero',
        category: 'Navigation',
        icon: FiHome,
        action: () => {
          scrollToHome();
          onClose();
        },
      },
      {
        id: 'nav-portfolio',
        title: 'Browse All Projects',
        category: 'Navigation',
        icon: FiSmartphone,
        badge: '6 Apps',
        action: () => {
          scrollToPortfolio();
          onClose();
        },
      },
      {
        id: 'nav-about',
        title: 'About & Technical Architecture',
        category: 'Navigation',
        icon: FiUser,
        action: () => {
          scrollToAbout();
          onClose();
        },
      },
      {
        id: 'nav-contact',
        title: 'Contact Form & Direct Connect',
        category: 'Navigation',
        icon: FiMail,
        action: () => {
          scrollToContact();
          onClose();
        },
      },
      {
        id: 'proj-tuxc',
        title: 'TuxC Wallet (Cryptocurrency App)',
        category: 'Projects',
        icon: FiSmartphone,
        badge: 'Coinyex',
        action: () => {
          scrollToPortfolio();
          onClose();
        },
      },
      {
        id: 'proj-sigma',
        title: 'Sigma (B2B Procurement Platform)',
        category: 'Projects',
        icon: FiSmartphone,
        badge: 'Radiant',
        action: () => {
          scrollToPortfolio();
          onClose();
        },
      },
      {
        id: 'proj-sms',
        title: 'Service Management System (SMS Ticketing)',
        category: 'Projects',
        icon: FiSmartphone,
        badge: 'Radiant',
        action: () => {
          scrollToPortfolio();
          onClose();
        },
      },
      {
        id: 'proj-pcari',
        title: 'Pcari.My (Multi-Vendor E-Commerce)',
        category: 'Projects',
        icon: FiSmartphone,
        badge: 'RF Infinite',
        action: () => {
          scrollToPortfolio();
          onClose();
        },
      },
      {
        id: 'proj-ihsanmadani',
        title: 'Ihsan Madani (Service & Social App)',
        category: 'Projects',
        icon: FiSmartphone,
        badge: 'RF Infinite',
        action: () => {
          scrollToPortfolio();
          onClose();
        },
      },
      {
        id: 'proj-todo',
        title: 'To-Do App (Android Native & Room DB)',
        category: 'Projects',
        icon: FiSmartphone,
        badge: 'Kotlin',
        action: () => {
          scrollToPortfolio();
          onClose();
        },
      },
      {
        id: 'link-github',
        title: 'Open GitHub Profile (@afifShyam)',
        category: 'Links',
        icon: FiGithub,
        action: () => {
          window.open('https://github.com/afifShyam', '_blank');
          onClose();
        },
      },
      {
        id: 'link-linkedin',
        title: 'Open LinkedIn Profile',
        category: 'Links',
        icon: FiLinkedin,
        action: () => {
          window.open('https://www.linkedin.com/in/afif-shyamsul-1333bb279/', '_blank');
          onClose();
        },
      },
    ],
    [colorMode, copied, onClose, onOpenResume, scrollToAbout, scrollToContact, scrollToHome, scrollToPortfolio, toggleColorMode]
  );

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
  }, [commands, query]);

  // Keyboard shortcut Cmd+K / Ctrl+K listener handled in parent

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay backdropFilter="blur(8px)" bg="blackAlpha.700" />
      <ModalContent
        bg={modalBg}
        borderRadius="2xl"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      >
        <ModalBody p={4}>
          <InputGroup size="lg" mb={3}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="cyan.400" />
            </InputLeftElement>
            <Input
              placeholder="Search actions, apps, resume, theme... (Cmd + K)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              variant="unstyled"
              fontSize="md"
              color={textColor}
              autoFocus
            />
          </InputGroup>

          <Box maxH="380px" overflowY="auto" pr={1}>
            {filteredCommands.length === 0 ? (
              <Box py={8} textAlign="center" color="gray.400">
                <Text fontSize="sm">No matching command found.</Text>
              </Box>
            ) : (
              <VStack align="stretch" spacing={1}>
                {filteredCommands.map((cmd) => (
                  <Flex
                    key={cmd.id}
                    as="button"
                    onClick={cmd.action}
                    p={2.5}
                    borderRadius="xl"
                    align="center"
                    justify="space-between"
                    _hover={{ bg: itemHoverBg, transform: 'translateX(4px)' }}
                    transition="all 0.15s ease"
                    textAlign="left"
                    w="full"
                  >
                    <HStack spacing={3}>
                      <Box p={2} borderRadius="lg" bg="cyan.500" color="black" display="flex">
                        <Icon as={cmd.icon} boxSize={4} />
                      </Box>
                      <Box>
                        <Text fontSize="sm" fontWeight="semibold" color={textColor}>
                          {cmd.title}
                        </Text>
                        <Text fontSize="2xs" color="gray.400">
                          {cmd.category}
                        </Text>
                      </Box>
                    </HStack>
                    <HStack spacing={2}>
                      {cmd.badge && (
                        <Badge colorScheme="cyan" variant="subtle" fontSize="2xs" borderRadius="md" px={2} py={0.5}>
                          {cmd.badge}
                        </Badge>
                      )}
                      <Icon as={FiArrowRight} color="gray.400" boxSize={3.5} />
                    </HStack>
                  </Flex>
                ))}
              </VStack>
            )}
          </Box>

          <Flex justify="space-between" align="center" pt={3} mt={3} borderTop="1px solid" borderColor={borderColor} fontSize="2xs" color="gray.400">
            <HStack spacing={2}>
              <Kbd>ESC</Kbd>
              <Text>to close</Text>
            </HStack>
            <Text>Quick Spotlight Palette</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CommandPaletteModal;
