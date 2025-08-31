import { memo } from 'react';
import { Tag, TagLabel, TagLeftIcon, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface SkillBadgeProps {
  icon?: IconType;
  label: string;
  colorScheme?: string;
}

const SkillBadge = memo(({ icon: Icon, label, colorScheme = 'brand' }: SkillBadgeProps) => {
  const bgColor = useColorModeValue(
    `${colorScheme}.100`,
    `${colorScheme}.900`
  );
  const textColor = useColorModeValue(
    `${colorScheme}.800`,
    `${colorScheme}.200`
  );

  return (
    <Tag
      size="md"
      borderRadius="full"
      variant="subtle"
      bgColor={bgColor}
      color={textColor}
      px={3}
      py={1}
      m={1}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      }}
      transition="all 0.2s"
    >
      {Icon && <TagLeftIcon as={Icon} boxSize="1.2em" mr={1} />}
      <TagLabel fontWeight="medium">{label}</TagLabel>
    </Tag>
  );
});

SkillBadge.displayName = 'SkillBadge';

export default SkillBadge;