import { useState, useEffect } from 'react';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <IconButton
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      icon={<FaArrowUp />}
      position="fixed"
      bottom={10}
      right={10}
      zIndex={20}
      p={4}
      colorScheme="blue"
      bg={useColorModeValue('blue.600', 'blue.500')}
      color="white"
      borderRadius="full"
      shadow="lg"
      transition="all 0.3s ease"
      transform={visible ? 'scale(1)' : 'scale(0)'}
      opacity={visible ? 1 : 0}
      pointerEvents={visible ? 'auto' : 'none'}
      _hover={{
        transform: 'scale(1.1)',
        bg: useColorModeValue('blue.700', 'blue.600'),
      }}
    />
  );
};

export default ScrollToTop;
