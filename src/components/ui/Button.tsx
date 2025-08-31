import { ReactNode, Ref } from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  gradient?: boolean;
  hoverScale?: boolean;
}

const MotionButton = motion(ChakraButton);

const Button = forwardRef<ButtonProps, 'button'>(({ 
  children, 
  gradient = false,
  hoverScale = true,
  colorScheme = 'brand',
  size = 'md',
  // Extract potential conflicting props
  transition: _,
  onAnimationStart: __,
  onAnimationEnd: ___,
  onAnimationIteration: ____,
  pointerEvents: _______,
  onDragStart: ______,
  onDragEnd: ________,
  onDrag: _________,
  ...rest 
}: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const gradientFrom = useColorModeValue('brand.500', 'brand.400');
  const gradientTo = useColorModeValue('accent.500', 'accent.400');
  
  return (
    <MotionButton
      ref={ref}
      size={size}
      colorScheme={gradient ? undefined : colorScheme}
      bgGradient={gradient ? `linear(to-r, ${gradientFrom}, ${gradientTo})` : undefined}
      color={gradient ? 'white' : undefined}
      _hover={{
        transform: hoverScale ? 'translateY(-2px)' : undefined,
        boxShadow: 'md',
        bgGradient: gradient ? `linear(to-r, ${gradientFrom}, ${gradientTo})` : undefined,
        opacity: gradient ? 0.9 : undefined,
      }}
      _active={{
        transform: 'translateY(0)',
        boxShadow: 'sm',
        opacity: gradient ? 0.8 : undefined,
      }}
      borderRadius="lg"
      fontWeight="semibold"
      // Framer Motion props only
      whileHover={hoverScale ? { scale: 1.03 } : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {children}
    </MotionButton>
  );
});

Button.displayName = 'Button';

export default Button;