import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { Avatar } from '@/components/ui/avatar';
import { formatSignedCurrency, type Transaction } from '@/constants/data';
import { images } from '@/constants/image';

type TransactionItemProps = {
  transaction: Transaction;
  highlighted?: boolean;
};

export function TransactionItem({ transaction, highlighted = false }: TransactionItemProps) {
  const amountClass = highlighted
    ? 'text-amount text-on-primary'
    : transaction.type === 'income'
      ? 'text-amount-income'
      : 'text-amount-expense';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push(`/transaction/${transaction.id}`)}
      className={highlighted ? 'list-row-active gap-3' : 'flex-row items-center gap-3 py-1.5'}
    >
      {transaction.imageStyle === 'avatar' ? (
        <Avatar source={images[transaction.image]} size={48} />
      ) : (
        <View className="icon-box">
          <Image
            source={images[transaction.image]}
            resizeMode="contain"
            style={{ width: 28, height: 28 }}
          />
        </View>
      )}
      <View className="flex-1">
        <Text className={highlighted ? 'font-inter-medium text-callout text-on-primary' : 'text-item-title'}>
          {transaction.title}
        </Text>
        <Text
          className={
            highlighted ? 'mt-0.5 font-inter text-footnote text-on-primary-muted' : 'text-item-subtitle mt-0.5'
          }
        >
          {transaction.date}
        </Text>
      </View>
      <Text className={amountClass}>{formatSignedCurrency(transaction.amount, transaction.type)}</Text>
    </Pressable>
  );
}
