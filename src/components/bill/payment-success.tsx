import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { BillSummary } from '@/components/bill/bill-summary';
import { DetailRow } from '@/components/ui/detail-row';
import { billPaymentReceipt } from '@/constants/data';
import { icons } from '@/constants/icon';
import { colors } from '@/constants/theme';

type PaymentSuccessProps = {
  billName: string;
  methodLabel: string;
  price: number;
  fee: number;
  date: string;
};

export function PaymentSuccess({ billName, methodLabel, price, fee, date }: PaymentSuccessProps) {
  const [detailsOpen, setDetailsOpen] = useState(true);

  return (
    <View className="flex-1">
      <View className="items-center" style={{ paddingHorizontal: 24, paddingTop: 32 }}>
        <Image source={icons.checkCircle} resizeMode="contain" style={{ width: 56, height: 56 }} />
        <Text className="mt-4 font-inter-semibold text-title text-heading">Payment Successfully</Text>
        <Text className="mt-1 font-inter text-body text-secondary">{billName}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: detailsOpen }}
        onPress={() => setDetailsOpen((open) => !open)}
        className="flex-row items-center justify-between"
        style={{ marginTop: 32, paddingHorizontal: 24 }}
      >
        <Text className="font-inter-semibold text-callout text-heading">Transaction details</Text>
        <Image
          source={detailsOpen ? icons.chevronUp : icons.chevronDown}
          resizeMode="contain"
          tintColor={colors.secondary}
          style={{ width: 18, height: 18 }}
        />
      </Pressable>

      {detailsOpen ? (
        <View style={{ marginTop: 12, paddingHorizontal: 24 }}>
          <DetailRow label="Payment method" value={methodLabel} />
          <DetailRow label="Status" value={billPaymentReceipt.status} tone="income" />
          <DetailRow label="Time" value={billPaymentReceipt.time} />
          <DetailRow label="Date" value={date} />
          <View className="flex-row items-center justify-between py-2">
            <Text className="font-inter text-body text-secondary">Transaction ID</Text>
            <View className="flex-row items-center gap-2">
              <Text className="font-inter-medium text-body text-ink">{billPaymentReceipt.transactionId}</Text>
              <Image
                source={icons.copy}
                resizeMode="contain"
                tintColor={colors.primary}
                style={{ width: 16, height: 16 }}
              />
            </View>
          </View>
          <View className="mt-2">
            <BillSummary price={price} fee={fee} signedFee />
          </View>
        </View>
      ) : null}

      <View className="mt-auto" style={{ paddingHorizontal: 40, paddingTop: 16, paddingBottom: 20 }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Share Receipt"
          className="h-14 items-center justify-center rounded-pill border border-primary"
        >
          <Text className="font-inter-semibold text-callout text-primary">Share Receipt</Text>
        </Pressable>
      </View>
    </View>
  );
}
