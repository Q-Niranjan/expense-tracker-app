import { Text, View } from 'react-native';

import { balance, formatCurrency } from '@/constants/data';

export function WalletBalance() {
  return (
    <View className="items-center gap-1">
      <Text className="font-inter text-footnote text-on-primary-muted">Total Balance</Text>
      <Text className="text-display-amount">{formatCurrency(balance.total)}</Text>
    </View>
  );
}
