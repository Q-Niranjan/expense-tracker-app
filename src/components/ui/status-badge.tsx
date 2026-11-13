import { Text, View } from 'react-native';

import type { TransactionType } from '@/constants/data';

type StatusBadgeProps = {
  type: TransactionType;
};

export function StatusBadge({ type }: StatusBadgeProps) {
  const income = type === 'income';

  return (
    <View
      className={`rounded-pill px-3 py-1 ${income ? 'bg-primary-100' : ''}`}
      style={income ? undefined : { backgroundColor: 'rgba(249, 91, 81, 0.12)' }}
    >
      <Text className={`font-inter-medium text-caption ${income ? 'text-primary' : 'text-danger'}`}>
        {income ? 'Income' : 'Expense'}
      </Text>
    </View>
  );
}
