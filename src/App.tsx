import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import PortfolioPage from './features/portfolio/pages/PortfolioPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const NAV_HEIGHT_FALLBACK = 72;

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector('nav')?.offsetHeight ?? NAV_HEIGHT_FALLBACK;
      const marker = window.scrollY + navHeight + 160;
      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: portfolioRef, name: 'portfolio' },
        { ref: aboutRef, name: 'about' },
        { ref: contactRef, name: 'contact' },
      ];

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
      } else {
        for (let index = sections.length - 1; index >= 0; index -= 1) {
          const section = sections[index];
          if (
            section.ref.current &&
            marker >= section.ref.current.getBoundingClientRect().top + window.scrollY
          ) {
            setActiveSection(section.name);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, sectionName: string) => {
    setActiveSection(sectionName);
    if (!ref.current) return;

    const navHeight = document.querySelector('nav')?.offsetHeight ?? NAV_HEIGHT_FALLBACK;
    const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, sectionTop - navHeight),
      behavior: 'smooth',
    });
  };

  return (
    <Box bg="canvas" color="text.primary" minH="100vh" overflowX="hidden" transition="background 180ms ease, color 180ms ease">
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToHome={() => scrollToSection(homeRef, 'home')}
        scrollToPortfolio={() => scrollToSection(portfolioRef, 'portfolio')}
        scrollToAbout={() => scrollToSection(aboutRef, 'about')}
        scrollToContact={() => scrollToSection(contactRef, 'contact')}
      />

      <Box ref={homeRef} as="section" id="home-section">
        <Home scrollToPortfolio={() => scrollToSection(portfolioRef, 'portfolio')} />
      </Box>
      <Box ref={portfolioRef} as="section" id="portfolio-section">
        <PortfolioPage />
      </Box>
      <Box ref={aboutRef} as="section" id="about-section">
        <About />
      </Box>
      <Box ref={contactRef} as="section" id="contact-section">
        <Contact />
      </Box>
    </Box>
  );
};

export default App;
