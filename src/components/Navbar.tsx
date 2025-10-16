import { useState, useEffect, memo } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
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
  const isNavElevated = scrolled || isScrolled;
  const bgColor = useColorModeValue(
    isNavElevated ? 'white' : 'white',
    isNavElevated ? 'gray.900' : '#0b1a2b'
  );
  const textColor = useColorModeValue('neutral.600', 'whiteAlpha.900');
  const activeColor = useColorModeValue('brand.600', 'brand.300');
  const hoverBg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const logoGradient = useColorModeValue('linear(to-r, brand.500, accent.500)', 'linear(to-r, brand.400, accent.400)');
  const logoInitialColor = useColorModeValue('white', 'white');
  const logoSubtitleColor = useColorModeValue('neutral.500', 'neutral.300');
  
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
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      boxShadow={isScrolled || scrolled ? 'sm' : 'none'}
      transitionProperty="all"
      transitionDuration="0.3s"
      transitionTimingFunction="ease"
      py={3}
      px={[4, 6, 8]}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
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
          <HStack spacing={3} align="center">
            <Box
              w="40px"
              h="40px"
              borderRadius="lg"
              bgGradient={logoGradient}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="bold"
              fontSize="lg"
              color={logoInitialColor}
              letterSpacing="widest"
            >
              A
            </Box>
            <Box textAlign="left">
              <Text fontWeight="semibold" fontSize="md" color={textColor}>
                Afif
              </Text>
              <Text fontSize="xs" color={logoSubtitleColor} letterSpacing="widest">
                PORTFOLIO
              </Text>
            </Box>
          </HStack>
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
      _hover={{ bg: hoverBg, color: activeColor }}
      position="relative"
      fontWeight={isActive ? 'semibold' : 'medium'}
      px={3}
      py={2}
      borderRadius="md"
    >
      {label}
      {isActive && (
        <Box
          position="absolute"
          bottom="6px"
          left="16px"
          right="16px"
          height="2px"
          bg={activeColor}
          borderRadius="full"
          as={motion.div}
          layoutId="activeSection"
          animate={{ transition: { duration: 0.24 } }}
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
      _hover={{ bg: hoverBg, color: activeColor }}
      justifyContent="flex-start"
      fontWeight={isActive ? 'semibold' : 'medium'}
      borderLeftWidth={isActive ? '3px' : '0'}
      borderLeftColor={activeColor}
      borderRadius="0"
      pl={isActive ? 4 : 5}
      w="full"
    >
      {label}
    </Button>
  );
})

export default Navbar;
