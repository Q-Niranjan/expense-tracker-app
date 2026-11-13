import { Image, Text, View } from 'react-native';

import { balance, formatCurrency } from '@/constants/data';
import { icons } from '@/constants/icon';
import { colors } from '@/constants/theme';

function BalanceStat({
  label,
  amount,
  direction,
}: {
  label: string;
  amount: number;
  direction: 'up' | 'down';
}) {
  return (
    <View className="flex-1 flex-row items-center gap-2.5">
      <View className="icon-badge">
        <Image
          source={icons.arrowDown}
          resizeMode="contain"
          tintColor={colors.onPrimary}
          style={{
            width: 12,
            height: 12,
            transform: [{ rotate: direction === 'up' ? '180deg' : '0deg' }],
          }}
        />
      </View>
      <View>
        <Text className="font-inter text-caption text-on-primary-muted">{label}</Text>
        <Text className="font-inter-semibold text-callout text-on-primary">{formatCurrency(amount)}</Text>
      </View>
    </View>
  );
}

export function BalanceCard() {
  return (
    <View className="balance-card gap-4 shadow-card">
      <View className="flex-row items-start justify-between">
        <View className="gap-1">
          <View className="flex-row items-center gap-1">
            <Text className="font-inter text-footnote text-on-primary">Total Balance</Text>
            <Image
              source={icons.chevronDown}
              resizeMode="contain"
              tintColor={colors.onPrimary}
              style={{ width: 14, height: 14 }}
            />
          </View>
          <Text className="text-display-amount">{formatCurrency(balance.total)}</Text>
        </View>
        <Image
          source={icons.moreHorizontal}
          resizeMode="contain"
          tintColor={colors.onPrimary}
          accessibilityLabel="Balance options"
          style={{ width: 22, height: 6, marginTop: 6 }}
        />
      </View>
      <View className="h-px bg-overlay-light" />
      <View className="flex-row">
        <BalanceStat label="Income" amount={balance.income} direction="up" />
        <BalanceStat label="Expenses" amount={balance.expenses} direction="down" />
      </View>
    </View>
  );
}
