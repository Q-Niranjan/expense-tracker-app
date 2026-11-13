import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BillSummary } from '@/components/bill/bill-summary';
import { PaymentMethodOption } from '@/components/bill/payment-method-option';
import { HeaderBackground } from '@/components/layout/header-background';
import { ScreenHeader } from '@/components/layout/screen-header';
import { ScreenTabBar } from '@/components/layout/screen-tab-bar';
import { billQuotes, paymentMethods, upcomingBills } from '@/constants/data';
import { icons } from '@/constants/icon';
import { images } from '@/constants/image';

export default function BillDetailsScreen() {
  const insets = useSafeAreaInsets();
  const { id: rawId } = useLocalSearchParams<{ id: string }>();
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const bill = upcomingBills.find((item) => item.id === id);
  const quote = id ? billQuotes[id] : undefined;
  const [methodId, setMethodId] = useState(paymentMethods[0].id);

  if (!bill || !quote) {
    return (
      <View className="screen">
        <StatusBar style="dark" />
        <View className="screen-padding" style={{ paddingTop: insets.top + 8 }}>
          <ScreenHeader title="Bill Details" />
        </View>
        <View className="flex-1 items-center justify-center">
          <Text className="text-item-subtitle">This bill is unavailable.</Text>
        </View>
      </View>
    );
  }

  return (
    <View className="screen">
      <StatusBar style="light" />
      <View className="relative bg-primary pb-16">
        <HeaderBackground />
        <View className="screen-padding" style={{ paddingTop: insets.top + 8 }}>
          <ScreenHeader tone="light" title="Bill Details" rightIcon={icons.moreHorizontal} rightLabel="More options" />
        </View>
      </View>

      <View
        className="bg-background"
        style={{
          flex: 1,
          minHeight: 0,
          marginTop: -40,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          overflow: 'hidden',
        }}
      >
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 28, paddingBottom: 16 }}
        >
          <View className="flex-row items-center gap-3">
            <View className="icon-box">
              <Image
                source={bill.image ? images[bill.image] : icons[bill.icon ?? 'lightning']}
                resizeMode="contain"
                style={{ width: 28, height: 28 }}
              />
            </View>
            <View>
              <Text className="text-item-title">{quote.statementTitle}</Text>
              <Text className="text-item-subtitle mt-0.5">{bill.dueDate}</Text>
            </View>
          </View>

          <View className="mt-5">
            <BillSummary price={quote.price} fee={quote.fee} />
          </View>

          <Text className="mt-6 font-inter-semibold text-callout text-heading">Select payment method</Text>
          <View className="mt-3 gap-3">
            {paymentMethods.map((method) => (
              <PaymentMethodOption
                key={method.id}
                label={method.label}
                icon={method.icon}
                selected={method.id === methodId}
                onPress={() => setMethodId(method.id)}
              />
            ))}
          </View>
        </ScrollView>

        <View style={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 20 }}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push({ pathname: '/bill-payment', params: { billId: bill.id, method: methodId } })}
            className="items-center justify-center bg-primary"
            style={{ height: 56, borderRadius: 28 }}
          >
            <Text className="btn-primary-text">Pay Now</Text>
          </Pressable>
        </View>
      </View>
      <ScreenTabBar />
    </View>
  );
}
