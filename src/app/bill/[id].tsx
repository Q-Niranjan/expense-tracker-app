import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function BillDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="screen items-center justify-center">
      <Text className="text-screen-title">Bill Details {id}</Text>
    </View>
  );
}
