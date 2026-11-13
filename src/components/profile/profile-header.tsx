import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderBackground } from '@/components/layout/header-background';
import { ScreenHeader } from '@/components/layout/screen-header';
import { Avatar } from '@/components/ui/avatar';
import { user } from '@/constants/data';
import { icons } from '@/constants/icon';
import { images } from '@/constants/image';

export function ProfileHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <View className="relative" style={{ height: 200 }}>
        <HeaderBackground />
        <View className="screen-padding" style={{ paddingTop: insets.top + 8 }}>
          <ScreenHeader tone="light" title="Profile" rightIcon={icons.bell} rightLabel="Notifications" />
        </View>
      </View>
      <View className="items-center" style={{ marginTop: -52 }}>
        <View className="rounded-full bg-background p-1">
          <Avatar source={images.profileAvatar} size={84} />
        </View>
        <Text className="mt-3 font-inter-semibold text-title text-heading">{user.name}</Text>
        <Text className="mt-1 font-inter text-body text-primary">{user.handle}</Text>
      </View>
    </View>
  );
}
