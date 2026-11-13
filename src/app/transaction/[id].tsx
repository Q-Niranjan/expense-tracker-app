import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderBackground } from '@/components/layout/header-background';
import { ScreenHeader } from '@/components/layout/screen-header';
import { AmountSummary } from '@/components/transaction/amount-summary';
import { Avatar } from '@/components/ui/avatar';
import { DetailRow } from '@/components/ui/detail-row';
import { StatusBadge } from '@/components/ui/status-badge';
import {
  formatCurrency,
  topSpending,
  transactionDetails,
  transactions,
  type Transaction,
  type TransactionDetail,
} from '@/constants/data';
import { icons } from '@/constants/icon';
import { images } from '@/constants/image';
import { colors } from '@/constants/theme';

const detailTabs = [
  { href: '/(tabs)/home', icon: icons.home, label: 'Home' },
  { href: '/(tabs)/statistics', icon: icons.statistics, label: 'Statistics' },
  { href: '/(tabs)/wallet', icon: icons.wallet, label: 'Wallet', active: true },
  { href: '/(tabs)/profile', icon: icons.profile, label: 'Profile' },
] as const;

function findTransaction(id: string) {
  return transactions.find((item) => item.id === id) ?? topSpending.find((item) => item.id === id);
}

function detailFor(transaction: Transaction): TransactionDetail {
  const designed = transactionDetails[transaction.id];
  if (designed) {
    return designed;
  }

  const income = transaction.type === 'income';
  return {
    id: transaction.id,
    type: transaction.type,
    counterpartyLabel: income ? 'From' : 'To',
    counterparty: transaction.title,
    time: '10:00 AM',
    date: transaction.date,
    amountLabel: income ? 'Earnings' : 'Spending',
    amount: transaction.amount,
    fee: 0,
    total: transaction.amount,
  };
}

export default function TransactionDetailsScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const transaction = findTransaction(id ?? '');
  const [detailsOpen, setDetailsOpen] = useState(true);

  if (!transaction) {
    return (
      <View className="screen">
        <StatusBar style="dark" />
        <View className="screen-padding" style={{ paddingTop: insets.top + 8 }}>
          <ScreenHeader title="Transaction Details" />
        </View>
        <View className="flex-1 items-center justify-center">
          <Text className="text-item-subtitle">This transaction is unavailable.</Text>
        </View>
      </View>
    );
  }

  const detail = detailFor(transaction);
  const headline = detail.type === 'income' ? detail.total : detail.amount;

  return (
    <View className="screen">
      <StatusBar style="light" />
      <View className="relative bg-primary pb-16">
        <HeaderBackground />
        <View className="screen-padding" style={{ paddingTop: insets.top + 8 }}>
          <ScreenHeader
            tone="light"
            title="Transaction Details"
            rightIcon={icons.moreHorizontal}
            rightLabel="More options"
          />
        </View>
      </View>

      <View
        className="flex-1 bg-background"
        style={{ marginTop: -40, borderTopLeftRadius: 32, borderTopRightRadius: 32, overflow: 'hidden' }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 32, paddingBottom: 16 }}
        >
          <View className="items-center">
            {transaction.imageStyle === 'avatar' ? (
              <Avatar source={images[transaction.image]} size={72} />
            ) : (
              <View
                className="items-center justify-center rounded-full bg-primary-50"
                style={{ width: 72, height: 72 }}
              >
                <Image
                  source={images[transaction.image]}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
              </View>
            )}
            <View className="mt-3">
              <StatusBadge type={detail.type} />
            </View>
            <Text
              className="mt-3 font-inter-bold tracking-tight text-ink"
              style={{ fontSize: 24, lineHeight: 30 }}
            >
              {formatCurrency(headline)}
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: detailsOpen }}
            onPress={() => setDetailsOpen((open) => !open)}
            className="mt-8 flex-row items-center justify-between"
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
            <View className="mt-4">
              <DetailRow
                label="Status"
                value={detail.type === 'income' ? 'Income' : 'Expense'}
                tone={detail.type}
              />
              <DetailRow label={detail.counterpartyLabel} value={detail.counterparty} />
              <DetailRow label="Time" value={detail.time} />
              <DetailRow label="Date" value={detail.date} />
              <AmountSummary detail={detail} />
            </View>
          ) : null}
        </ScrollView>

        <View className="pt-2 pb-5" style={{ paddingHorizontal: 40 }}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Download Receipt"
            className="h-14 items-center justify-center rounded-pill border border-primary"
          >
            <Text className="font-inter-semibold text-callout text-primary">Download Receipt</Text>
          </Pressable>
        </View>
      </View>

      <View
        className="flex-row bg-background shadow-tab-bar"
        style={{ height: 64 + Math.max(insets.bottom, 8), paddingBottom: Math.max(insets.bottom, 8) }}
      >
        {detailTabs.map((tab) => (
          <Pressable
            key={tab.href}
            accessibilityRole="button"
            accessibilityLabel={tab.label}
            accessibilityState={'active' in tab && tab.active ? { selected: true } : {}}
            onPress={() => router.replace(tab.href)}
            className="flex-1 items-center justify-center"
          >
            <Image
              source={tab.icon}
              resizeMode="contain"
              tintColor={'active' in tab && tab.active ? colors.primary : undefined}
              style={{ width: 24, height: 24 }}
            />
            <View
              className={`mt-1 size-1 rounded-full ${'active' in tab && tab.active ? 'bg-primary' : 'bg-transparent'}`}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
