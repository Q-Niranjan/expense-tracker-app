import { Image, type ImageSourcePropType } from 'react-native';

type AvatarProps = {
  source: ImageSourcePropType;
  size?: number;
};

export function Avatar({ source, size = 48 }: AvatarProps) {
  return (
    <Image
      source={source}
      resizeMode="cover"
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
}
