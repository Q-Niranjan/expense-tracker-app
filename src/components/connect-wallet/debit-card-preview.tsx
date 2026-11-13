import { Image, View } from 'react-native';

import { images } from '@/constants/image';

export function DebitCardPreview() {
  return (
    <View className="overflow-hidden rounded-card">
      <Image source={images.bankCard} resizeMode="contain" className="h-[190px] w-full" />
    </View>
  );
}
