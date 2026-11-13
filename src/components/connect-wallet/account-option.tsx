import { Image, Pressable, Text, View } from 'react-native';

import { icons, type IconName } from '@/constants/icon';

type AccountOptionProps = {
  title: string;
  description: string;
  icon: IconName;
  selected?: boolean;
  onPress?: () => void;
};

export function AccountOption({ title, description, icon, selected = false, onPress }: AccountOptionProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      className={`flex-row items-center gap-3 rounded-card p-4 ${selected ? 'bg-primary-50' : 'bg-surface'}`}
    >
      <View className="icon-box">
        <Image source={icons[icon]} resizeMode="contain" style={{ width: 26, height: 26 }} />
      </View>
      <View className="flex-1">
        <Text className="text-item-title">{title}</Text>
        <Text className="text-item-subtitle mt-0.5">{description}</Text>
      </View>
      {selected ? (
        <Image source={icons.checkCircle} resizeMode="contain" style={{ width: 22, height: 22 }} />
      ) : null}
    </Pressable>
  );
}
