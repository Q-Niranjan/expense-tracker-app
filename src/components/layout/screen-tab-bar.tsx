import { router } from 'expo-router';
import { Image, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { icons, type IconName } from '@/constants/icon';
import { colors } from '@/constants/theme';

const tabs: { href: '/(tabs)/home' | '/(tabs)/statistics' | '/(tabs)/wallet' | '/(tabs)/profile'; icon: IconName; label: string }[] = [
  { href: '/(tabs)/home', icon: 'home', label: 'Home' },
  { href: '/(tabs)/statistics', icon: 'statistics', label: 'Statistics' },
  { href: '/(tabs)/wallet', icon: 'wallet', label: 'Wallet' },
  { href: '/(tabs)/profile', icon: 'profile', label: 'Profile' },
];

type ScreenTabBarProps = {
  active?: (typeof tabs)[number]['label'];
};

export function ScreenTabBar({ active = 'Wallet' }: ScreenTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row bg-background shadow-tab-bar"
      style={{ height: 64 + Math.max(insets.bottom, 8), paddingBottom: Math.max(insets.bottom, 8) }}
    >
      {tabs.map((tab) => {
        const selected = tab.label === active;

        return (
          <Pressable
            key={tab.href}
            accessibilityRole="button"
            accessibilityLabel={tab.label}
            accessibilityState={selected ? { selected: true } : {}}
            onPress={() => router.replace(tab.href)}
            className="flex-1 items-center justify-center"
          >
            <Image
              source={icons[tab.icon]}
              resizeMode="contain"
              tintColor={selected ? colors.primary : undefined}
              style={{ width: 24, height: 24 }}
            />
            <View className={`mt-1 size-1 rounded-full ${selected ? 'bg-primary' : 'bg-transparent'}`} />
          </Pressable>
        );
      })}
    </View>
  );
}
