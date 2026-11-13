import { Text, View } from 'react-native';

type DetailRowProps = {
  label: string;
  value: string;
  tone?: 'default' | 'income' | 'expense' | 'strong';
};

const valueTone = {
  default: 'font-inter-medium text-ink',
  income: 'font-inter-medium text-primary',
  expense: 'font-inter-medium text-danger',
  strong: 'font-inter-semibold text-ink',
} as const;

export function DetailRow({ label, value, tone = 'default' }: DetailRowProps) {
  return (
    <View className="flex-row items-center justify-between py-2">
      <Text className="font-inter text-body text-secondary">{label}</Text>
      <Text className={`text-body ${valueTone[tone]}`}>{value}</Text>
    </View>
  );
}
