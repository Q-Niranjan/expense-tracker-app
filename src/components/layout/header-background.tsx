import { Image } from 'react-native';

import { images } from '@/constants/image';

export function HeaderBackground() {
  return (
    <>
      <Image
        source={images.headerBackground}
        resizeMode="stretch"
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
      <Image
        source={images.headerDecoration}
        resizeMode="contain"
        pointerEvents="none"
        className="absolute -right-4 top-0"
        style={{ width: 210, height: 172 }}
      />
    </>
  );
}
