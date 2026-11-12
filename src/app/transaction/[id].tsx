import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function TransactionDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="screen items-center justify-center">
      <Text className="text-screen-title">Transaction Details {id}</Text>
    </View>
  );
}
