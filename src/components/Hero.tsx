import Typed from "typed.js";
import { useEffect, useRef, memo } from "react";
import { Box, Heading, Text, Flex, Container, Badge, HStack, Button, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowDown, FiCode, FiSmartphone, FiShield, FiZap } from "react-icons/fi";

interface HeroProps {
  scrollToPortfolio?: () => void;
}

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

const HERO_SKILLS = [
  { name: 'Flutter', color: 'cyan' },
  { name: 'Dart', color: 'blue' },
  { name: 'Blockchain / DApps', color: 'purple' },
  { name: 'Firebase', color: 'orange' },
  { name: 'Riverpod & BLoC', color: 'teal' }
];

const Hero: React.FC<HeroProps> = memo(({ scrollToPortfolio }) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hi, I'm Afif Shyamsul",
        "Flutter & Mobile Developer",
        "Frontend Lead on TuxC Wallet",
        "Crafting Crypto & DApp Solutions",
        "Building Clean & Fast Mobile Apps"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box 
      w="full" 
      minH="100vh" 
      position="relative"
      overflow="hidden"
      bg="gray.900"
      bgGradient="linear(to-br, #090d16, #0f172a, #1e1b4b)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: 24, md: 16 }}
      pb={{ base: 12, md: 16 }}
    >
      {/* Dynamic Ambient Glowing Orbs */}
      <MotionBox 
        position="absolute" 
        top="-10%" 
        left="-5%" 
        w={{ base: "300px", md: "500px" }} 
        h={{ base: "300px", md: "500px" }} 
        borderRadius="full" 
        bg="radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0.05) 70%, transparent 100%)" 
        filter="blur(60px)"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox 
        position="absolute" 
        bottom="-10%" 
        right="-5%" 
        w={{ base: "280px", md: "480px" }} 
        h={{ base: "280px", md: "480px" }} 
        borderRadius="full" 
        bg="radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(59, 130, 246, 0.05) 70%, transparent 100%)" 
        filter="blur(60px)"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern overlay */}
      <Box
        position="absolute"
        inset={0}
        bgImage="linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)"
        bgSize="60px 60px"
        pointerEvents="none"
      />

      <Container maxW="container.lg" position="relative" zIndex={2}>
        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          textAlign="center"
          px={4}
        >
          {/* Top Status Pill */}
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            mb={6}
          >
            <HStack
              bg="rgba(255, 255, 255, 0.06)"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.15)"
              backdropFilter="blur(12px)"
              px={4}
              py={1.5}
              borderRadius="full"
              spacing={2}
            >
              <Box w="8px" h="8px" borderRadius="full" bg="emerald.400" className="animate-glow" />
              <Text fontSize="xs" fontWeight="semibold" color="cyan.300" letterSpacing="wide">
                FLUTTER & MOBILE DEVELOPER
              </Text>
            </HStack>
          </MotionBox>

          {/* Animated Header with Typed.js */}
          <Heading 
            as="h1" 
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} 
            fontWeight="extrabold" 
            mb={6}
            minH={{ base: "72px", md: "96px" }}
            color="white"
            lineHeight="1.15"
          >
            <Text
              as="span"
              bgGradient="linear(to-r, white, cyan.200, purple.300)"
              bgClip="text"
            >
              <span ref={typedRef}></span>
            </Text>
          </Heading>
          
          <Text 
            fontSize={{ base: "md", md: "xl" }} 
            fontWeight="normal" 
            mb={8}
            color="gray.300"
            maxW="2xl"
            lineHeight="relaxed"
          >
            Delivering high-performance mobile apps with Flutter, Firebase, Riverpod, and BLoC. Specialized in clean UI architecture, crypto wallet integrations, and smooth mobile UX.
          </Text>
          
          {/* Skill Pills */}
          <MotionFlex 
            wrap="wrap"
            justify="center" 
            gap={2.5} 
            mb={10}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {HERO_SKILLS.map((skill) => (
              <Badge 
                key={skill.name}
                colorScheme={skill.color}
                fontSize="sm" 
                py={1.5} 
                px={4} 
                borderRadius="full"
                variant="subtle"
                bg="rgba(255, 255, 255, 0.08)"
                color="white"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.15)"
                backdropFilter="blur(8px)"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.18)",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s ease"
              >
                {skill.name}
              </Badge>
            ))}
          </MotionFlex>

          {/* Floating Key Feature Highlights */}
          <MotionFlex
            gap={4}
            wrap="wrap"
            justify="center"
            mb={12}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: FiSmartphone, text: "2+ Years Mobile Dev" },
              { icon: FiCode, text: "Flutter & Dart Specialist" },
              { icon: FiShield, text: "Blockchain & Fintech" },
              { icon: FiZap, text: "10+ Production Releases" },
            ].map((item, i) => (
              <HStack
                key={i}
                bg="rgba(15, 23, 42, 0.6)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.12)"
                backdropFilter="blur(16px)"
                px={4}
                py={2.5}
                borderRadius="xl"
                spacing={2.5}
              >
                <Icon as={item.icon} color="cyan.400" boxSize={4} />
                <Text fontSize="xs" fontWeight="medium" color="gray.200">
                  {item.text}
                </Text>
              </HStack>
            ))}
          </MotionFlex>
          
          {/* Scroll CTA Button */}
          {scrollToPortfolio && (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                colorScheme="cyan"
                bgGradient="linear(to-r, cyan.500, blue.600)"
                color="white"
                borderRadius="full"
                px={8}
                py={6}
                rightIcon={<Icon as={FiArrowDown} className="animate-bounce" />}
                _hover={{
                  bgGradient: "linear(to-r, cyan.400, blue.500)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.5)",
                }}
                _active={{ transform: "translateY(0)" }}
              >
                Explore Projects
              </Button>
            </MotionBox>
          )}
        </Flex>
      </Container>
    </Box>
  );
});

Hero.displayName = 'Hero';

export default Hero;

