import { useState, useEffect, memo } from 'react';
import {
  Box,
  Flex,
  Image,
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
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

interface NavbarProps {
  scrollToHome: () => void;
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
  activeSection: string;
  scrolled?: boolean;
  onOpenCommandPalette?: () => void;
}

const Navbar = memo(function Navbar({
  scrollToHome,
  scrollToPortfolio,
  scrollToAbout,
  scrollToContact,
  activeSection,
  scrolled = false,
  onOpenCommandPalette,
}: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  // Dynamic color values based on color mode and scroll state
  const isNavElevated = scrolled || isScrolled;
  const bgColor = useColorModeValue(
    isNavElevated ? 'rgba(255, 255, 255, 0.92)' : 'rgba(248, 250, 252, 0.85)',
    isNavElevated ? 'rgba(15, 23, 42, 0.92)' : 'rgba(15, 23, 42, 0.78)'
  );
  const textColor = useColorModeValue('neutral.700', 'whiteAlpha.900');
  const activeColor = useColorModeValue('brand.600', 'cyan.400');
  const hoverBg = useColorModeValue('brand.50', 'whiteAlpha.100');
  const borderColor = useColorModeValue('rgba(148, 163, 184, 0.28)', 'whiteAlpha.200');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={bgColor}
      backdropFilter="blur(16px)"
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      boxShadow={isNavElevated ? '0 4px 20px rgba(0,0,0,0.06)' : 'none'}
      transitionProperty="all"
      transitionDuration="0.3s"
      py={2.5}
      px={[4, 6, 8]}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Box position="absolute" top={0} left={0} right={0} h="2.5px" bg="transparent">
        <Box h="100%" w={`${scrollProgress}%`} bgGradient="linear(to-r, cyan.400, brand.500, purple.500)" transition="width 0.1s ease-out" />
      </Box>

      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <MotionFlex cursor="pointer" onClick={scrollToHome} align="center" gap={3} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Box w="42px" h="42px" borderRadius="xl" overflow="hidden" borderWidth="1px" borderColor={borderColor} p={0.5}>
            <Image src="/afif-logo.svg" alt="Afif logo" w="100%" h="100%" objectFit="contain" />
          </Box>
          <Box display={{ base: 'none', sm: 'block' }}>
            <Flex align="center" gap={2}>
              <Box as="span" fontWeight="bold" fontSize="sm" color={useColorModeValue('neutral.900', 'white')}>Afif Shyamsul</Box>
              <Box
                as="span"
                fontSize="2xs"
                fontWeight="semibold"
                px={1.5}
                py={0.5}
                borderRadius="md"
                bg={useColorModeValue('cyan.50', 'whiteAlpha.200')}
                color={useColorModeValue('cyan.700', 'cyan.300')}
                border="1px solid"
                borderColor={useColorModeValue('cyan.200', 'cyan.800')}
              >
                Mobile Software Engineer
              </Box>
            </Flex>
          </Box>
        </MotionFlex>

        <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
          <NavButton label="Home" isActive={activeSection === 'home'} onClick={scrollToHome} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />
          <NavButton label="My Projects" isActive={activeSection === 'portfolio'} onClick={scrollToPortfolio} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />
          <NavButton label="About" isActive={activeSection === 'about'} onClick={scrollToAbout} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />
          <NavButton label="Contact" isActive={activeSection === 'contact'} onClick={scrollToContact} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />

          {/* Spotlight Command Palette Button */}
          {onOpenCommandPalette && (
            <Tooltip label="Open Command Palette (Cmd + K)">
              <Button
                size="sm"
                variant="outline"
                colorScheme="cyan"
                borderRadius="xl"
                onClick={onOpenCommandPalette}
                px={3}
                fontSize="xs"
                fontWeight="medium"
              >
                Quick Search <Box as="span" ml={1.5} px={1} py={0.5} bg={useColorModeValue('gray.100', 'whiteAlpha.200')} borderRadius="md" fontSize="2xs">⌘K</Box>
              </Button>
            </Tooltip>
          )}

          <Tooltip label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton aria-label="Toggle mode" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} variant="ghost" colorScheme="cyan" size="sm" borderRadius="lg" />
          </Tooltip>
        </HStack>

        <HStack spacing={2} display={{ base: 'flex', md: 'none' }}>
          {onOpenCommandPalette && (
            <IconButton
              aria-label="Search"
              icon={<Box as="span" fontSize="xs" fontWeight="bold">⌘K</Box>}
              onClick={onOpenCommandPalette}
              variant="outline"
              colorScheme="cyan"
              size="sm"
              borderRadius="lg"
            />
          )}
          <Tooltip label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton aria-label="Toggle mode" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} variant="ghost" colorScheme="cyan" size="sm" borderRadius="lg" />
          </Tooltip>
          <IconButton aria-label="Open menu" icon={<HamburgerIcon />} onClick={onOpen} variant="ghost" color={textColor} _hover={{ bg: hoverBg }} size="sm" borderRadius="lg" />
        </HStack>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay backdropFilter="blur(4px)" />
          <DrawerContent bg={useColorModeValue('white', 'gray.900')}>
            <DrawerCloseButton color={textColor} top={4} right={4} />
            <DrawerHeader borderBottomWidth="1px" borderColor={borderColor} pt={5} pb={4}>Menu</DrawerHeader>
            <DrawerBody py={6}>
              <VStack spacing={3} align="stretch">
                <MobileNavButton label="Home" isActive={activeSection === 'home'} onClick={() => { scrollToHome(); onClose(); }} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />
                <MobileNavButton label="My Projects" isActive={activeSection === 'portfolio'} onClick={() => { scrollToPortfolio(); onClose(); }} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />
                <MobileNavButton label="About" isActive={activeSection === 'about'} onClick={() => { scrollToAbout(); onClose(); }} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />
                <MobileNavButton label="Contact" isActive={activeSection === 'contact'} onClick={() => { scrollToContact(); onClose(); }} activeColor={activeColor} textColor={textColor} hoverBg={hoverBg} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </MotionBox>
  );
});

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  activeColor: string;
  textColor: string;
  hoverBg: string;
}

const NavButton = memo(function NavButton({ label, isActive, onClick, activeColor, textColor, hoverBg }: NavButtonProps) {
  return (
    <Button variant="ghost" color={isActive ? activeColor : textColor} onClick={onClick} _hover={{ bg: hoverBg, color: activeColor }} fontWeight={isActive ? 'semibold' : 'medium'} borderRadius="md">
      {label}
      {isActive && <Box position="absolute" bottom="6px" left="16px" right="16px" height="2px" bg={activeColor} borderRadius="full" as={motion.div} layoutId="activeSection" />}
    </Button>
  );
});

const MobileNavButton = memo(function MobileNavButton({ label, isActive, onClick, activeColor, textColor, hoverBg }: NavButtonProps) {
  return (
    <Button variant="ghost" color={isActive ? activeColor : textColor} onClick={onClick} _hover={{ bg: hoverBg, color: activeColor }} justifyContent="flex-start" fontWeight={isActive ? 'semibold' : 'medium'} borderLeftWidth={isActive ? '3px' : '0'} borderLeftColor={activeColor} borderRadius="0" pl={5} w="full">
      {label}
    </Button>
  );
});

export default Navbar;
