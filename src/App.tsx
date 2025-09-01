import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Box } from '@chakra-ui/react';
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
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };
  
  // Scroll functions are directly used in JSX below

  return (
    <Box bgGradient="linear(to-br, #0a192f, #15314b)" color="white">
      <Helmet>
        <title>Afif's Portfolio | Flutter & React Developer</title>
        <meta name="description" content="Portfolio website showcasing my projects and skills as a Flutter and React developer" />
        <meta name="keywords" content="portfolio, developer, react, flutter, web development, mobile development" />
        <meta property="og:title" content="Afif's Portfolio | Flutter & React Developer" />
        <meta property="og:description" content="Check out my projects and skills as a Flutter and React developer" />
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
      </Suspense>

      {/* Scroll to Top */}
      <ScrollToTop />
    </Box>
  );
};

export default App;
