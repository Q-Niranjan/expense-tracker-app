import { Text, View } from 'react-native';

type ChartTooltipProps = {
  value: string;
};

export function ChartTooltip({ value }: ChartTooltipProps) {
  return (
    <View className="rounded-pill bg-primary-100 px-2.5 py-1">
      <Text className="font-inter-medium text-caption text-primary-700">{value}</Text>
    </View>
  );
}
