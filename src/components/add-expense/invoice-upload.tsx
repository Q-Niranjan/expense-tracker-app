import { Image, Pressable, Text, View } from 'react-native';

import { icons } from '@/constants/icon';
import { colors } from '@/constants/theme';

type InvoiceUploadProps = {
  label?: string;
  onPress?: () => void;
};

export function InvoiceUpload({ label = 'Add Invoice', onPress }: InvoiceUploadProps) {
  return (
    <View className="gap-2">
      <Text className="text-field-label">INVOICE</Text>
      <Pressable accessibilityRole="button" onPress={onPress} className="input-dashed flex-row gap-2">
        <Image
          source={icons.plus}
          resizeMode="contain"
          tintColor={colors.secondary}
          style={{ width: 16, height: 16 }}
        />
        <Text className="font-inter text-body text-secondary">{label}</Text>
      </Pressable>
    </View>
  );
}
