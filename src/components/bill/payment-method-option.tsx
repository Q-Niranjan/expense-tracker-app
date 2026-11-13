import { Image, Pressable, Text, View } from 'react-native';

import { icons, type IconName } from '@/constants/icon';
import { colors } from '@/constants/theme';

type PaymentMethodOptionProps = {
  label: string;
  icon: IconName;
  selected?: boolean;
  onPress?: () => void;
};

export function PaymentMethodOption({ label, icon, selected = false, onPress }: PaymentMethodOptionProps) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      onPress={onPress}
      className={`flex-row items-center gap-3 rounded-card px-4 py-3 ${selected ? 'bg-primary-50' : 'bg-surface'}`}
    >
      <View className="icon-box">
        <Image source={icons[icon]} resizeMode="contain" style={{ width: 26, height: 26 }} />
      </View>
      <Text className="flex-1 text-item-title">{label}</Text>
      <View
        className="items-center justify-center rounded-full"
        style={{
          width: 22,
          height: 22,
          borderWidth: 1.5,
          borderColor: selected ? colors.primary : colors.border,
        }}
      >
        {selected ? (
          <View className="rounded-full bg-primary" style={{ width: 12, height: 12 }} />
        ) : null}
      </View>
    </Pressable>
  );
}
