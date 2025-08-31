import { useState, useEffect, RefObject } from 'react';

interface Section {
  ref: RefObject<HTMLElement | null>;
  name: string;
}

interface UseScrollOptions {
  sections: Section[];
  offset?: number;
  scrollThreshold?: number;
  debounceTime?: number;
}

export const useScroll = (options: UseScrollOptions) => {
  const { 
    sections, 
    offset = 0, 
    scrollThreshold = 100,
    debounceTime = 10 
  } = options;
  
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.name || '');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    let timeoutId: number | null = null;
    
    const handleScroll = () => {
      // Clear previous timeout
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      
      // Set a timeout for debouncing
      timeoutId = window.setTimeout(() => {
        const scrollPosition = window.scrollY + offset;
        
        // Check if scrolled past threshold
        setScrolled(window.scrollY > scrollThreshold);
        
        // Find active section
        for (const section of sections) {
          if (
            section.ref.current &&
            scrollPosition >= section.ref.current.offsetTop &&
            scrollPosition < section.ref.current.offsetTop + section.ref.current.offsetHeight
          ) {
            setActiveSection(section.name);
            break;
          }
        }
      }, debounceTime);
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [sections, offset, scrollThreshold, debounceTime]);
  
  // Scroll to section function
  const scrollToSection = (sectionName: string) => {
    const section = sections.find(s => s.name === sectionName);
    if (section?.ref.current) {
      window.scrollTo({
        top: section.ref.current.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };
  
  return { activeSection, scrolled, scrollToSection };
};