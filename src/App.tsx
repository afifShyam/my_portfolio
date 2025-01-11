import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PortfolioPage from './features/portfolio/pages/PortfolioPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ErrorBoundary from './ErrorBoundary';

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

      // Dynamic navbar background after scrolling past the hero section
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
    <div className="bg-[#0a192f] text-white">
      {/* Navbar with dynamic background */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToPortfolio={() => scrollToSection(portfolioRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      {/* Wrap Sections in Error Boundary */}
      {/* <ErrorBoundary> */}
      {/* Home Section */}
      <section ref={homeRef}>
        <Home scrollToPortfolio={() => scrollToSection(portfolioRef)} />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-20">
        <PortfolioPage />
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20">
        <Contact />
      </section>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default App;
