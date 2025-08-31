import { useState, useEffect, memo } from 'react';
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
  useColorModeValue,
  useColorMode,
  Tooltip
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface NavbarProps {
  scrollToHome: () => void;
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
  activeSection: string;
  scrolled?: boolean;
}

const Navbar = memo(function Navbar({ 
  scrollToHome, 
  scrollToPortfolio, 
  scrollToAbout, 
  scrollToContact, 
  activeSection,
  scrolled = false
}: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  
  // Dynamic color values based on color mode and scroll state
  const bgColor = useColorModeValue(
    scrolled ? 'white' : 'rgba(255, 255, 255, 0.8)', 
    scrolled ? 'gray.900' : 'rgba(26, 32, 44, 0.8)'
  );
  const textColor = useColorModeValue('gray.800', 'white');
  const activeColor = useColorModeValue('blue.500', 'blue.300');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  
  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      bg={bgColor}
      backdropFilter="blur(10px)"
      boxShadow={isScrolled || scrolled ? 'sm' : 'none'}
      transition="all 0.3s ease"
      py={3}
      px={[4, 6, 8]}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {/* Logo/Brand */}
        <MotionFlex
          fontSize="xl"
          fontWeight="bold"
          color={textColor}
          cursor="pointer"
          onClick={scrollToHome}
          align="center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Text 
            bgGradient="linear(to-r, blue.400, teal.400)" 
            bgClip="text"
            fontWeight="extrabold"
          >
            Afif's Portfolio
          </Text>
        </MotionFlex>

        {/* Desktop Navigation */}
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <NavButton 
            label="Home" 
            isActive={activeSection === 'home'} 
            onClick={scrollToHome} 
            activeColor={activeColor}
            textColor={textColor}
            hoverBg={hoverBg}
          />
          <NavButton 
            label="My Projects" 
            isActive={activeSection === 'portfolio'} 
            onClick={scrollToPortfolio} 
            activeColor={activeColor}
            textColor={textColor}
            hoverBg={hoverBg}
          />
          <NavButton 
            label="About" 
            isActive={activeSection === 'about'} 
            onClick={scrollToAbout} 
            activeColor={activeColor}
            textColor={textColor}
            hoverBg={hoverBg}
          />
          <NavButton 
            label="Contact" 
            isActive={activeSection === 'contact'} 
            onClick={scrollToContact} 
            activeColor={activeColor}
            textColor={textColor}
            hoverBg={hoverBg}
          />
          
          {/* Color Mode Toggle */}
          <Tooltip label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton
              aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              colorScheme="blue"
              size="sm"
            />
          </Tooltip>
        </HStack>

        {/* Mobile Menu Button */}
        <HStack spacing={2} display={{ base: 'flex', md: 'none' }}>
          {/* Color Mode Toggle */}
          <IconButton
            aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="blue"
            size="sm"
          />
          
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            color={textColor}
            _hover={{ bg: hoverBg }}
          />
        </HStack>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
            <DrawerCloseButton color={textColor} />
            <DrawerHeader color={textColor} borderBottomWidth="1px">
              Navigation
            </DrawerHeader>
            <DrawerBody py={4}>
              <VStack spacing={3} align="stretch">
                <MobileNavButton 
                  label="Home" 
                  isActive={activeSection === 'home'} 
                  onClick={() => {
                    scrollToHome();
                    onClose();
                  }} 
                  activeColor={activeColor}
                  textColor={textColor}
                  hoverBg={hoverBg}
                />
                <MobileNavButton 
                  label="My Projects" 
                  isActive={activeSection === 'portfolio'} 
                  onClick={() => {
                    scrollToPortfolio();
                    onClose();
                  }} 
                  activeColor={activeColor}
                  textColor={textColor}
                  hoverBg={hoverBg}
                />
                <MobileNavButton 
                  label="About" 
                  isActive={activeSection === 'about'} 
                  onClick={() => {
                    scrollToAbout();
                    onClose();
                  }} 
                  activeColor={activeColor}
                  textColor={textColor}
                  hoverBg={hoverBg}
                />
                <MobileNavButton 
                  label="Contact" 
                  isActive={activeSection === 'contact'} 
                  onClick={() => {
                    scrollToContact();
                    onClose();
                  }} 
                  activeColor={activeColor}
                  textColor={textColor}
                  hoverBg={hoverBg}
                />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </MotionBox>
  );
})

// Reusable NavButton component for desktop navigation
interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  activeColor: string;
  textColor: string;
  hoverBg: string;
}

const NavButton = memo(function NavButton({ 
  label, 
  isActive, 
  onClick,
  activeColor,
  textColor,
  hoverBg
}: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      color={isActive ? activeColor : textColor}
      onClick={onClick}
      _hover={{ bg: hoverBg }}
      position="relative"
      fontWeight={isActive ? "semibold" : "normal"}
      px={3}
      py={2}
    >
      {label}
      {isActive && (
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="2px"
          bg={activeColor}
          borderRadius="full"
          as={motion.div}
          layoutId="activeSection"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Button>
  );
})

// Reusable NavButton component for mobile navigation
const MobileNavButton = memo(function MobileNavButton({ 
  label, 
  isActive, 
  onClick,
  activeColor,
  textColor,
  hoverBg
}: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      color={isActive ? activeColor : textColor}
      onClick={onClick}
      _hover={{ bg: hoverBg }}
      justifyContent="flex-start"
      fontWeight={isActive ? "semibold" : "normal"}
      borderLeftWidth={isActive ? "4px" : "0"}
      borderLeftColor={activeColor}
      borderRadius="0"
      pl={isActive ? 3 : 5}
      w="full"
    >
      {label}
    </Button>
  );
})

export default Navbar;
