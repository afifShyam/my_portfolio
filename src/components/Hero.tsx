import Typed from "typed.js";
import { useEffect, useRef, memo } from "react";
import { Box, Heading, Text, Flex, Container, Badge, HStack } from "@chakra-ui/react";

interface HeroProps {
  scrollToPortfolio?: () => void;
}

const Hero: React.FC<HeroProps> = memo(({ scrollToPortfolio }) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    
    // Initialize Typed.js with more options
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hello, I'm Afif!",
        "I build blockchain mobile apps.",
        "I develop crypto wallets & DApps.",
        "I create secure mobile experiences.",
        "Welcome to my portfolio!"
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box 
      w="full" 
      h="100vh" 
      bgGradient="linear(to-br, brand.700, purple.600)" 
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <Box 
        position="absolute" 
        top="10%" 
        left="5%" 
        w="300px" 
        h="300px" 
        borderRadius="full" 
        bg="rgba(255,255,255,0.03)" 
        filter="blur(30px)" 
      />
      <Box 
        position="absolute" 
        bottom="15%" 
        right="10%" 
        w="250px" 
        h="250px" 
        borderRadius="full" 
        bg="rgba(255,255,255,0.05)" 
        filter="blur(25px)" 
      />
      
      <Container maxW="container.lg" h="full">
        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          h="full" 
          textAlign="center"
          px={4}
        >
          <Heading 
            as="h1" 
            fontSize={{ base: "4xl", md: "6xl" }} 
            fontWeight="extrabold" 
            mb={6}
            bgGradient="linear(to-r, white, blue.200)"
            bgClip="text"
          >
            <span ref={typedRef}></span>
          </Heading>
          
          <Text 
            fontSize={{ base: "xl", md: "2xl" }} 
            fontWeight="medium" 
            mb={8}
            color="whiteAlpha.900"
          >
            Flutter & Blockchain Developer 🚀
          </Text>
          
          <HStack spacing={3} mb={10}>
            {['Flutter', 'Blockchain', 'DApps', 'Crypto', 'MVVM'].map((skill) => (
              <Badge 
                key={skill}
                colorScheme="blue" 
                fontSize="md" 
                py={2} 
                px={4} 
                borderRadius="full"
                variant="solid"
                opacity={0.9}
              >
                {skill}
              </Badge>
            ))}
          </HStack>
          
          {scrollToPortfolio && (
            <Box 
              as="button"
              onClick={scrollToPortfolio}
              aria-label="View my work"
              position="absolute"
              bottom="30px"
              left="50%"
              transform="translateX(-50%)"
              animation="bounce 2s infinite"
              sx={{
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) translateX(-50%)' },
                  '40%': { transform: 'translateY(-20px) translateX(-50%)' },
                  '60%': { transform: 'translateY(-10px) translateX(-50%)' }
                }
              }}
            >
              <Text fontSize="sm" mb={2}>View my work</Text>
              <Box 
                borderLeft="2px solid" 
                borderBottom="2px solid" 
                borderColor="white" 
                h="10px" 
                w="10px" 
                transform="rotate(-45deg)" 
                mx="auto"
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
});

Hero.displayName = 'Hero';

export default Hero;
