import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { useScroll } from './hooks/useScroll';
import { LoadingFallback } from './components/ui';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const PortfolioPage = lazy(() => import('./features/portfolio/pages/PortfolioPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  // Section refs for scroll handling
  const homeRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // State for active section and navbar
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  // Use custom scroll hook for better performance
  const { activeSection, scrolled } = useScroll({
    sections: [
      { ref: homeRef, name: 'home' },
      { ref: portfolioRef, name: 'portfolio' },
      { ref: aboutRef, name: 'about' },
      { ref: contactRef, name: 'contact' },
    ],
    offset: navbarHeight,
    scrollThreshold: 50
  });

  // Get navbar height on mount
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  // Scroll to section functions
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };
  
  // Scroll functions are directly used in JSX below

  return (
    <Box
      bg={useColorModeValue('neutral.50', 'neutral.800')}
      color={useColorModeValue('neutral.900', 'whiteAlpha.900')}
      transition="background 0.3s ease"
    >
      <Helmet>
        <title>Afif Shyamsul | Flutter Mobile Developer / Frontend Lead</title>
        <meta name="description" content="Wallet, commerce, and productivity apps built with Flutter, Riverpod, Firebase, and clean architecture." />
        <meta name="keywords" content="portfolio, flutter developer, mobile developer, riverpod, bloc, firebase, frontend lead" />
        <meta property="og:title" content="Afif Shyamsul | Flutter Mobile Developer / Frontend Lead" />
        <meta property="og:description" content="Wallet, commerce, and productivity apps built with Flutter, Riverpod, Firebase, and clean architecture." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-portfolio-url.com" />
      </Helmet>
      
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
      <Suspense fallback={<LoadingFallback />}>
        <Box ref={homeRef} as="section" id="home-section">
          <Home scrollToPortfolio={() => scrollToSection(portfolioRef)} />
        </Box>
        <Box ref={portfolioRef} as="section" id="portfolio">
          <PortfolioPage />
        </Box>
        <Box ref={aboutRef} as="section" id="about">
          <About />
        </Box>
        <Box ref={contactRef} as="section" id="contact">
          <Contact />
        </Box>
      </Suspense>

      {/* Scroll to Top */}
      <ScrollToTop />
    </Box>
  );
};

export default App;
