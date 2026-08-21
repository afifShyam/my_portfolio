import { useRef, useState, useEffect } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import PortfolioPage from './features/portfolio/pages/PortfolioPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import CommandPaletteModal from './components/CommandPaletteModal';
import ResumePreviewModal from './components/ResumePreviewModal';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState<string>('home');
  const [navbarHeight, setNavbarHeight] = useState(70);
  const [scrolled, setScrolled] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const rootBg = useColorModeValue('#f8fafc', '#090d16');
  const rootColor = useColorModeValue('neutral.900', 'whiteAlpha.900');

  // Listen for Cmd+K or Ctrl+K globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // When scrolled near the bottom of the page, automatically highlight 'contact'
      if (scrollY + windowHeight >= fullHeight - 120) {
        setActiveSection('contact');
        setScrolled(scrollY > 50);
        return;
      }

      const effectiveOffset = scrollY + (navbarHeight || 70) + 120;

      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: portfolioRef, name: 'portfolio' },
        { ref: aboutRef, name: 'about' },
        { ref: contactRef, name: 'contact' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && effectiveOffset >= section.ref.current.offsetTop) {
          setActiveSection(section.name);
          break;
        }
      }

      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, sectionName?: string) => {
    if (sectionName) {
      setActiveSection(sectionName);
    }
    if (ref.current) {
      const targetTop = Math.max(0, ref.current.offsetTop - (navbarHeight || 70));
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box bg={rootBg} color={rootColor} minH="100vh" w="100%" maxW="100vw" overflowX="hidden">
      {/* Navbar */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToHome={() => scrollToSection(homeRef, 'home')}
        scrollToPortfolio={() => scrollToSection(portfolioRef, 'portfolio')}
        scrollToAbout={() => scrollToSection(aboutRef, 'about')}
        scrollToContact={() => scrollToSection(contactRef, 'contact')}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Sections */}
      <Box ref={homeRef} as="section" id="home-section" w="100%" maxW="100%" overflowX="hidden">
        <Home scrollToPortfolio={() => scrollToSection(portfolioRef, 'portfolio')} />
      </Box>
      <Box ref={portfolioRef} as="section" id="portfolio-section" w="100%" maxW="100%" overflowX="hidden">
        <PortfolioPage />
      </Box>
      <Box ref={aboutRef} as="section" id="about-section" w="100%" maxW="100%" overflowX="hidden">
        <About />
      </Box>
      <Box ref={contactRef} as="section" id="contact-section" w="100%" maxW="100%" overflowX="hidden">
        <Contact />
      </Box>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Spotlight Command Palette (Cmd + K) */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        scrollToHome={() => scrollToSection(homeRef, 'home')}
        scrollToPortfolio={() => scrollToSection(portfolioRef, 'portfolio')}
        scrollToAbout={() => scrollToSection(aboutRef, 'about')}
        scrollToContact={() => scrollToSection(contactRef, 'contact')}
      />

      {/* Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="./Afif_Shyamsul_Syahiran_bin_Suhaimi_Resume.pdf"
      />
    </Box>
  );
};

export default App;
