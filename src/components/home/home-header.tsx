import { Image, Pressable, Text, View } from 'react-native';

import { Avatar } from '@/components/ui/avatar';
import { user } from '@/constants/data';
import { icons } from '@/constants/icon';
import { images } from '@/constants/image';

export function HomeHeader() {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-1 flex-row items-center gap-3 pr-3">
        <Avatar source={images.profileAvatar} size={50} />
        <View className="flex-1">
          <Text className="font-inter text-footnote text-on-primary-muted">{user.greeting}</Text>
          <Text className="font-inter-semibold text-title text-on-primary" numberOfLines={1}>
            {user.name}
          </Text>
        </View>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notifications"
        className="icon-button size-11"
      >
        <Image source={icons.bell} resizeMode="contain" style={{ width: 24, height: 24 }} />
      </Pressable>
    </View>
  );
}
