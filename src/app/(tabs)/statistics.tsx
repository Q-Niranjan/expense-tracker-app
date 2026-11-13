import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScreenHeader } from '@/components/layout/screen-header';
import { SpendingChart } from '@/components/statistics/spending-chart';
import { TransactionItem } from '@/components/transaction/transaction-item';
import { SegmentedControl } from '@/components/ui/segmented-control';
import {
  expenseChart,
  incomeChart,
  statisticPeriods,
  statisticTypes,
  topSpending,
  transactions,
  type Transaction,
} from '@/constants/data';
import { icons } from '@/constants/icon';
import { colors } from '@/constants/theme';

export default function StatisticsScreen() {
  const insets = useSafeAreaInsets();
  const [period, setPeriod] = useState<(typeof statisticPeriods)[number]>('Day');
  const [kind, setKind] = useState<(typeof statisticTypes)[number]>('Expense');
  const [highestFirst, setHighestFirst] = useState(true);

  const chart = kind === 'Expense' ? expenseChart : incomeChart;
  const rows = (kind === 'Expense' ? topSpending : transactions.filter((item) => item.type === 'income'))
    .slice()
    .sort((left, right) => (highestFirst ? right.amount - left.amount : left.amount - right.amount));

  return (
    <View className="screen">
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-8">
        <View className="screen-padding" style={{ paddingTop: insets.top + 8 }}>
          <ScreenHeader title="Statistics" rightIcon={icons.download} rightLabel="Download" />
          <View className="mt-5 flex-row items-center justify-between gap-2">
            <SegmentedControl options={statisticPeriods} value={period} onChange={setPeriod} />
            <Pressable
              accessibilityRole="button"
              onPress={() => setKind((current) => (current === 'Expense' ? 'Income' : 'Expense'))}
              className="flex-row items-center gap-1"
            >
              <Text className="font-inter text-footnote text-secondary">
                {kind === 'Expense' ? 'Expenses' : 'Income'}
              </Text>
              <Image
                source={icons.chevronDown}
                resizeMode="contain"
                tintColor={colors.secondary}
                style={{ width: 14, height: 14 }}
              />
            </Pressable>
          </View>
          <View className="mt-6">
            <SpendingChart points={chart} highlightLabel="May" />
          </View>
          <View className="mt-8 gap-3">
            <View className="section-header">
              <Text className="text-section-title">Top Spending</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Sort spending"
                onPress={() => setHighestFirst((current) => !current)}
              >
                <Image
                  source={icons.sort}
                  resizeMode="contain"
                  tintColor={colors.secondary}
                  style={{ width: 18, height: 18 }}
                />
              </Pressable>
            </View>
            {rows.map((transaction: Transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                highlighted={kind === 'Expense' && transaction.id === '2'}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
