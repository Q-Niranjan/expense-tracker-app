import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import type { Bill } from '@/constants/data';
import { icons } from '@/constants/icon';
import { images } from '@/constants/image';

type UpcomingBillItemProps = {
  bill: Bill;
};

export function UpcomingBillItem({ bill }: UpcomingBillItemProps) {
  return (
    <View className="flex-row items-center gap-3 py-1.5">
      <View className="icon-box">
        <Image
          source={bill.image ? images[bill.image] : icons[bill.icon ?? 'lightning']}
          resizeMode="contain"
          style={{ width: 28, height: 28 }}
        />
      </View>
      <View className="flex-1">
        <Text className="text-item-title">{bill.title}</Text>
        <Text className="text-item-subtitle mt-0.5">{bill.dueDate}</Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Pay ${bill.title}`}
        onPress={() => router.push(`/bill/${bill.id}`)}
        className="rounded-pill border border-primary px-4 py-1.5"
      >
        <Text className="font-inter-medium text-body text-primary">Pay</Text>
      </Pressable>
    </View>
  );
}
