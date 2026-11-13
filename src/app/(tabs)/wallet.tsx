import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderBackground } from '@/components/layout/header-background';
import { TransactionList } from '@/components/transaction/transaction-list';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { UpcomingBillItem } from '@/components/wallet/upcoming-bill-item';
import { WalletActions } from '@/components/wallet/wallet-actions';
import { WalletBalance } from '@/components/wallet/wallet-balance';
import { transactions, upcomingBills, walletTabs } from '@/constants/data';
import { icons } from '@/constants/icon';
import { colors } from '@/constants/theme';

export default function WalletScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<(typeof walletTabs)[number]>('Transactions');

  return (
    <View className="screen">
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-8">
        <View className="relative pb-8">
          <HeaderBackground />
          <View className="screen-padding gap-7" style={{ paddingTop: insets.top + 28 }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Connect wallet"
              onPress={() => router.push('/connect-wallet')}
              className="absolute right-6 z-10 size-10 items-center justify-center"
              style={{ top: insets.top + 8 }}
            >
              <Image
                source={icons.creditCard}
                resizeMode="contain"
                tintColor={colors.onPrimary}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
            <WalletBalance />
            <WalletActions onPay={() => setTab('Upcoming Bills')} />
          </View>
        </View>
        <View className="screen-padding gap-5">
          <SegmentedControl variant="track" options={walletTabs} value={tab} onChange={setTab} />
          {tab === 'Transactions' ? (
            <TransactionList transactions={transactions} />
          ) : (
            <View className="gap-3">
              {upcomingBills.map((bill) => (
                <UpcomingBillItem key={bill.id} bill={bill} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
