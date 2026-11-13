import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { router } from 'expo-router';
import { Image, Pressable, View } from 'react-native';

import { icons, type IconName } from '@/constants/icon';
import { colors } from '@/constants/theme';

const TAB_ICONS: Record<string, { idle: IconName; active?: IconName }> = {
  home: { idle: 'home', active: 'homeActive' },
  statistics: { idle: 'statistics', active: 'statisticsActive' },
  wallet: { idle: 'wallet' },
  profile: { idle: 'profile' },
};

export function TabBar({ state, descriptors, navigateToTab, insets }: BottomTabBarProps) {
  const bottomInset = Math.max(insets.bottom, 10);

  return (
    <View className="relative bg-background">
      <View className="tab-bar" style={{ height: 64 + bottomInset, paddingBottom: bottomInset }}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const iconSet = TAB_ICONS[route.name];

          if (!iconSet) {
            return null;
          }

          const source = focused && iconSet.active ? icons[iconSet.active] : icons[iconSet.idle];

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={descriptors[route.key]?.options.title ?? route.name}
              onPress={() => navigateToTab(route.key)}
              className="h-14 flex-1 items-center justify-center"
            >
              <Image
                source={source}
                resizeMode="contain"
                tintColor={focused && !iconSet.active ? colors.primary : undefined}
                style={{ width: 24, height: 24 }}
              />
              <View className={`mt-1 size-1 rounded-full ${focused ? 'bg-primary' : 'bg-transparent'}`} />
            </Pressable>
          );
        })}
      </View>
      <View pointerEvents="box-none" className="absolute inset-x-0 items-center" style={{ top: -22 }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add expense"
          onPress={() => router.push('/add-expense')}
          className="fab"
          style={{
            shadowColor: colors.primary700,
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.28,
            shadowRadius: 12,
            elevation: 6,
          }}
        >
          <Image source={icons.plus} resizeMode="contain" style={{ width: 28, height: 28 }} />
        </Pressable>
      </View>
    </View>
  );
}
