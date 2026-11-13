import { Image, Pressable, Text, View, type ImageSourcePropType } from 'react-native';

import { icons } from '@/constants/icon';

type SelectFieldProps = {
  label: string;
  value: string;
  image: ImageSourcePropType;
  onPress?: () => void;
};

export function SelectField({ label, value, image, onPress }: SelectFieldProps) {
  return (
    <View className="gap-2">
      <Text className="text-field-label">{label}</Text>
      <Pressable accessibilityRole="button" onPress={onPress} className="input gap-3">
        <Image source={image} resizeMode="cover" style={{ width: 28, height: 28, borderRadius: 14 }} />
        <Text className="flex-1 font-inter text-callout text-heading" numberOfLines={1}>
          {value}
        </Text>
        <Image source={icons.chevronDown} resizeMode="contain" style={{ width: 16, height: 16 }} />
      </Pressable>
    </View>
  );
}
