import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

interface NavbarProps {
  scrollToHome: () => void;
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
  activeSection: string;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToPortfolio,
  scrollToAbout,
  scrollToContact,
  activeSection,
  scrolled,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Navbar for Desktop */}
      <Box
        as="nav"
        position="fixed"
        top="0"
        left="0"
        w="full"
        zIndex="50"
        px={6}
        py={4}
        bg={scrolled ? '#0a1e3f' : 'transparent'}
        boxShadow={scrolled ? 'lg' : 'none'}
        transition="all 0.3s ease"
      >
        <Flex
          justify="space-between"
          align="center"
          maxW="7xl"
          mx="auto"
          display={{ base: 'none', md: 'flex' }}
        >
          <Text
            fontSize="3xl"
            fontWeight="bold"
            cursor="pointer"
            onClick={scrollToHome}
            color="white"
          >
            Afif's Portfolio
          </Text>
          <HStack spacing={10}>
            <Button
              variant="link"
              onClick={scrollToHome}
              color={activeSection === 'home' ? 'blue.400' : 'white'}
            >
              Home
            </Button>
            <Button
              variant="link"
              onClick={scrollToPortfolio}
              color={activeSection === 'portfolio' ? 'blue.400' : 'white'}
            >
              My Projects
            </Button>
            <Button
              variant="link"
              onClick={scrollToAbout}
              color={activeSection === 'about' ? 'blue.400' : 'white'}
            >
              About
            </Button>
            <Button
              variant="link"
              onClick={scrollToContact}
              color={activeSection === 'contact' ? 'blue.400' : 'white'}
            >
              Contact
            </Button>
          </HStack>
        </Flex>

        {/* Mobile Hamburger Menu */}
        <Flex justify="space-between" align="center" display={{ base: 'flex', md: 'none' }}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            cursor="pointer"
            onClick={scrollToHome}
            color="white"
          >
            Afif's Portfolio
          </Text>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            colorScheme="whiteAlpha"
            onClick={onOpen}
          />
        </Flex>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#0a1e3f" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="start">
              <Button
                variant="link"
                onClick={() => {
                  scrollToHome();
                  onClose();
                }}
                color={activeSection === 'home' ? 'blue.400' : 'white'}
              >
                Home
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  scrollToPortfolio();
                  onClose();
                }}
                color={activeSection === 'portfolio' ? 'blue.400' : 'white'}
              >
                Portfolio
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  scrollToAbout();
                  onClose();
                }}
                color={activeSection === 'about' ? 'blue.400' : 'white'}
              >
                About
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  scrollToContact();
                  onClose();
                }}
                color={activeSection === 'contact' ? 'blue.400' : 'white'}
              >
                Contact
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Text fontSize="sm" color="gray.400">
              © 2025 Afif's Portfolio
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
