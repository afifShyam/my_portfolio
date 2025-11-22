import { ReactNode } from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef, useColorModeValue } from '@chakra-ui/react';
import { motionChakra } from '../../utils/motion';

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  gradient?: boolean;
  hoverScale?: boolean;
}

const MotionButton = motionChakra(ChakraButton);

const Button = forwardRef<ButtonProps, 'button'>(({
  children,
  gradient = false,
  hoverScale = true,
  colorScheme = 'brand',
  size = 'md',
  ...rest
}: ButtonProps, ref) => {
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
      whileHover={hoverScale ? { scale: 1.03 } : undefined}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {children}
    </MotionButton>
  );
});

Button.displayName = 'Button';

export default Button;
