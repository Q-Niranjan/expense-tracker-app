import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BillSummary } from '@/components/bill/bill-summary';
import { PaymentSuccess } from '@/components/bill/payment-success';
import { HeaderBackground } from '@/components/layout/header-background';
import { ScreenHeader } from '@/components/layout/screen-header';
import { ScreenTabBar } from '@/components/layout/screen-tab-bar';
import { billQuotes, paymentMethods, upcomingBills } from '@/constants/data';
import { icons } from '@/constants/icon';
import { images } from '@/constants/image';

export default function BillPaymentScreen() {
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ billId: string; method: string }>();
  const billId = Array.isArray(params.billId) ? params.billId[0] : params.billId;
  const methodId = Array.isArray(params.method) ? params.method[0] : params.method;
  const bill = upcomingBills.find((item) => item.id === billId) ?? upcomingBills[0];
  const quote = billQuotes[bill.id];
  const method = paymentMethods.find((item) => item.id === methodId) ?? paymentMethods[0];
  const [paid, setPaid] = useState(false);

  return (
    <View className="screen">
      <StatusBar style="light" />
      <View className="relative bg-primary pb-16">
        <HeaderBackground />
        <View className="screen-padding" style={{ paddingTop: insets.top + 8 }}>
          <ScreenHeader tone="light" title="Bill Payment" rightIcon={icons.moreHorizontal} rightLabel="More options" />
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
        {paid ? (
          <PaymentSuccess
            billName={quote.statementTitle}
            methodLabel={method.label}
            price={quote.price}
            fee={quote.fee}
            date={bill.dueDate}
          />
        ) : (
          <>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 32, paddingBottom: 16 }}
            >
              <View className="items-center">
                <View className="icon-box">
                  <Image
                    source={bill.image ? images[bill.image] : icons[bill.icon ?? 'lightning']}
                    resizeMode="contain"
                    style={{ width: 28, height: 28 }}
                  />
                </View>
                <Text className="mt-5 text-center font-inter text-body leading-6 text-secondary">
                  You will pay <Text className="font-inter-semibold text-primary">{quote.statementTitle}</Text>
                  {'\n'}for one month with <Text className="font-inter-semibold text-primary">{method.payWith}</Text>
                </Text>
              </View>
              <View className="mt-8">
                <BillSummary price={quote.price} fee={quote.fee} />
              </View>
            </ScrollView>
            <View style={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 20 }}>
              <Pressable
                accessibilityRole="button"
                onPress={() => setPaid(true)}
                className="items-center justify-center bg-primary"
                style={{ height: 56, borderRadius: 28 }}
              >
                <Text className="btn-primary-text">Confirm and Pay</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
      <ScreenTabBar />
    </View>
  );
}
