import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { icons, type IconName } from '@/constants/icon';
import { colors } from '@/constants/theme';

const actions: { label: string; icon: IconName; href?: '/add-expense' }[] = [
  { label: 'Add', icon: 'plus', href: '/add-expense' },
  { label: 'Pay', icon: 'qrCode' },
  { label: 'Send', icon: 'send' },
];

type WalletActionsProps = {
  onPay?: () => void;
};

export function WalletActions({ onPay }: WalletActionsProps) {
  return (
    <View className="flex-row items-center justify-around">
      {actions.map((action) => (
        <Pressable
          key={action.label}
          accessibilityRole="button"
          accessibilityLabel={action.label}
          onPress={() => {
            if (action.href) {
              router.push(action.href);
              return;
            }
            if (action.label === 'Pay') {
              onPay?.();
            }
          }}
          className="items-center gap-2"
        >
          <View
            className="size-14 items-center justify-center rounded-full"
            style={{ borderWidth: 1, borderColor: 'rgba(255,255,255,0.45)' }}
          >
            <Image
              source={icons[action.icon]}
              resizeMode="contain"
              tintColor={colors.onPrimary}
              style={{ width: 22, height: 22 }}
            />
          </View>
          <Text className="font-inter text-caption text-on-primary">{action.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
