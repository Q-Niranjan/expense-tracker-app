import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BalanceCard } from '@/components/home/balance-card';
import { HomeHeader } from '@/components/home/home-header';
import { SendAgainList } from '@/components/home/send-again-list';
import { HeaderBackground } from '@/components/layout/header-background';
import { TransactionList } from '@/components/transaction/transaction-list';
import { SectionHeader } from '@/components/ui/section-header';
import { sendAgain, transactions } from '@/constants/data';
import { useUser } from '@clerk/expo';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { user } = useUser();
  return (
    <View className="screen">
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-12">
        <View className="relative pb-6">
          <HeaderBackground />
          <View className="screen-padding" style={{ paddingTop: insets.top + 16 }}>
            <HomeHeader />
            <View className="mt-7">
              <BalanceCard />
            </View>
          </View>
        </View>
        <View className="screen-padding gap-8">
          <View className="gap-4">
            <SectionHeader
              title="Transactions History"
              actionLabel="See all"
              onActionPress={() => router.push('/(tabs)/wallet')}
            />
            <TransactionList transactions={transactions} />
          </View>
          <View className="gap-5">
            <SectionHeader title="Send Again" actionLabel="See all" />
            <SendAgainList contacts={sendAgain} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
