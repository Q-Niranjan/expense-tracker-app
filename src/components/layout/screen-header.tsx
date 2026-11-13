import { router } from 'expo-router';
import { Image, Pressable, Text, View, type ImageSourcePropType } from 'react-native';

import { icons } from '@/constants/icon';
import { colors } from '@/constants/theme';

type ScreenHeaderProps = {
  title: string;
  tone?: 'dark' | 'light';
  rightIcon?: ImageSourcePropType;
  rightLabel?: string;
  onRightPress?: () => void;
};

export function ScreenHeader({
  title,
  tone = 'dark',
  rightIcon,
  rightLabel = 'More',
  onRightPress,
}: ScreenHeaderProps) {
  const light = tone === 'light';

  return (
    <View className="h-12 flex-row items-center">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
            return;
          }
          router.replace('/(tabs)/home');
        }}
        className="size-10 items-center justify-center"
      >
        <Image
          source={light ? icons.chevronLeftWhite : icons.chevronLeft}
          resizeMode="contain"
          style={{ width: 22, height: 22 }}
        />
      </Pressable>
      <Text
        className={`flex-1 text-center font-inter-semibold text-title ${light ? 'text-on-primary' : 'text-heading'}`}
      >
        {title}
      </Text>
      {rightIcon ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={rightLabel}
          onPress={onRightPress}
          className="size-10 items-center justify-center"
        >
          <Image
            source={rightIcon}
            resizeMode="contain"
            tintColor={light ? colors.onPrimary : colors.heading}
            style={{ width: 22, height: 22 }}
          />
        </Pressable>
      ) : (
        <View className="size-10" />
      )}
    </View>
  );
}
