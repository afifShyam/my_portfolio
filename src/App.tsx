import { useRef, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import PortfolioPage from './features/portfolio/pages/PortfolioPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState<string>('home');
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarHeight;

      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: portfolioRef, name: 'portfolio' },
        { ref: aboutRef, name: 'about' },
        { ref: contactRef, name: 'contact' },
      ];

      for (const section of sections) {
        if (
          section.ref.current &&
          scrollPosition >= section.ref.current.offsetTop &&
          scrollPosition < section.ref.current.offsetTop + section.ref.current.offsetHeight
        ) {
          setActiveSection(section.name);
        }
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current!.offsetTop - navbarHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Box bgGradient="linear(to-br, #0a192f, #15314b)" color="white">
      {/* Navbar */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToPortfolio={() => scrollToSection(portfolioRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      {/* Sections */}
      <Box ref={homeRef} as="section">
        <Home scrollToPortfolio={() => scrollToSection(portfolioRef)} />
      </Box>
      <Box ref={portfolioRef} as="section">
        <PortfolioPage />
      </Box>
      <Box ref={aboutRef} as="section">
        <About />
      </Box>
      <Box ref={contactRef} as="section">
        <Contact />
      </Box>

      {/* Scroll to Top */}
      <ScrollToTop />
    </Box>
  );
};

export default App;
