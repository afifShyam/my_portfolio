import { memo, useState, useEffect } from 'react';
import { Box, Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useLocale } from '../localization';
import RollingLabel from './RollingLabel';

interface NavbarProps {
  scrollToHome: () => void;
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
  activeSection: string;
  scrolled?: boolean;
}

interface NavLinkProps {
  index: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavLink = ({ index, label, active, onClick }: NavLinkProps) => (
  <Button
    variant="unstyled"
    onClick={onClick}
    h="auto"
    minW={0}
    color={active ? 'text.primary' : 'text.muted'}
    fontFamily="mono"
    fontSize={{ base: '10px', md: '11px' }}
    fontWeight="500"
    letterSpacing="0.04em"
    textTransform="uppercase"
    _hover={{ color: 'accent' }}
  >
    <Box as="span" color={active ? 'accent' : 'text.muted'} mr={{ base: 1.5, md: 2 }}>
      {index}
    </Box>
    <RollingLabel>{label}</RollingLabel>
  </Button>
);

const Navbar = memo(function Navbar({
  scrollToHome,
  scrollToPortfolio,
  scrollToAbout,
  scrollToContact,
  activeSection,
  scrolled = false,
}: NavbarProps) {
  const { locale, toggleLocale, t } = useLocale();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrollProgress, setScrollProgress] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    return maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
  });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(Math.max(window.scrollY / maxScroll, 0), 1));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = useColorModeValue(
    scrolled ? 'rgba(244, 241, 234, 0.94)' : '#f4f1ea',
    scrolled ? 'rgba(9, 9, 9, 0.94)' : '#090909',
  );

  const sectionLinks = (
    <>
      <NavLink index="01" label={t('nav.work')} active={activeSection === 'portfolio'} onClick={scrollToPortfolio} />
      <NavLink index="02" label={t('nav.experience')} active={activeSection === 'about'} onClick={scrollToAbout} />
      <NavLink index="03" label={t('nav.contact')} active={activeSection === 'contact'} onClick={scrollToContact} />
    </>
  );

  return (
    <Box
      as="nav"
      position="fixed"
      insetX={0}
      top={0}
      zIndex={100}
      bg={navBackground}
      backdropFilter={scrolled ? 'blur(14px)' : 'none'}
      borderBottom="1px solid"
      borderColor="line"
      transition="background 180ms ease, border-color 180ms ease"
    >
      <Container maxW="1440px" px={{ base: 5, md: 8 }}>
        <Flex h={{ base: '56px', md: '72px' }} align="center" justify="space-between">
          <Button variant="unstyled" onClick={scrollToHome} h="auto" textAlign="left">
            <Text
              color="text.primary"
              fontFamily="mono"
              fontSize={{ base: '11px', md: '12px' }}
              fontWeight="500"
              letterSpacing="0.05em"
            >
              AFIF SHYAMSUL
            </Text>
            <Text
              display={{ base: 'none', sm: 'block' }}
              color="text.muted"
              fontFamily="mono"
              fontSize="9px"
              letterSpacing="0.08em"
              mt={0.5}
              textTransform="uppercase"
            >
              {t('nav.role')}
            </Text>
          </Button>

          <HStack spacing={{ md: 6, lg: 8 }} display={{ base: 'none', md: 'flex' }}>
            {sectionLinks}
          </HStack>

          <HStack spacing={{ base: 4, md: 5 }}>
            <Button
              variant="unstyled"
              h="auto"
              minW={0}
              onClick={toggleLocale}
              color="text.muted"
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.06em"
              _hover={{ color: 'accent' }}
              aria-label={locale === 'en' ? 'Tukar ke Bahasa Melayu' : 'Switch to English'}
            >
              {locale === 'en' ? 'BM' : 'EN'}
            </Button>
            <Button
              variant="unstyled"
              h="auto"
              minW={0}
              onClick={toggleColorMode}
              color="text.muted"
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.06em"
              _hover={{ color: 'accent' }}
              aria-label={colorMode === 'dark' ? t('nav.light') : t('nav.dark')}
            >
              <Box as="span" display={{ base: 'inline', md: 'none' }} fontSize="15px">
                {colorMode === 'dark' ? '☼' : '☾'}
              </Box>
              <Box as="span" display={{ base: 'none', md: 'inline' }}>
                {colorMode === 'dark' ? t('nav.light') : t('nav.dark')}
              </Box>
            </Button>
            <Button
              as="a"
              href="/Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              variant="unstyled"
              h="auto"
              minW={0}
              color="text.primary"
              fontFamily="mono"
              fontSize={{ base: '10px', md: '11px' }}
              fontWeight="500"
              letterSpacing="0.05em"
              borderBottom="1px solid"
              borderColor="accent"
              borderRadius={0}
              pb={1}
              _hover={{ color: 'accent' }}
            >
              <RollingLabel>{t('nav.resume').toUpperCase()}</RollingLabel> ↗
            </Button>
          </HStack>
        </Flex>
        <Flex
          display={{ base: 'flex', md: 'none' }}
          justify="space-between"
          align="center"
          h="40px"
          borderTop="1px solid"
          borderColor="line"
        >
          {sectionLinks}
        </Flex>
      </Container>

      {/* Precision Scroll Progress Hairline */}
      <Box
        position="absolute"
        bottom="-1px"
        left={0}
        right={0}
        h="1.5px"
        bg="accent"
        pointerEvents="none"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: 'left',
          transition: 'transform 80ms linear',
        }}
        aria-hidden="true"
      />
    </Box>
  );
});

export default Navbar;
