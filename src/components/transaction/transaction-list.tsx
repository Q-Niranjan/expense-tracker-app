import { View } from 'react-native';

import { TransactionItem } from '@/components/transaction/transaction-item';
import type { Transaction } from '@/constants/data';

type TransactionListProps = {
  transactions: Transaction[];
};

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <View className="gap-3">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </View>
  );
}
