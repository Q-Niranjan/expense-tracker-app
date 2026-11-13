import { Image, Pressable, Text } from 'react-native';

import { icons, type IconName } from '@/constants/icon';
import { colors } from '@/constants/theme';

type ProfileMenuItemProps = {
  label: string;
  icon: IconName;
  accent?: boolean;
  onPress?: () => void;
};

export function ProfileMenuItem({ label, icon, accent = false, onPress }: ProfileMenuItemProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} className="flex-row items-center gap-4 py-3">
      <Image
        source={icons[icon]}
        resizeMode="contain"
        tintColor={accent ? undefined : colors.heading}
        style={{ width: 22, height: 22 }}
      />
      <Text className="text-item-title">{label}</Text>
    </Pressable>
  );
}
