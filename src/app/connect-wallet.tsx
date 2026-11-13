import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AccountOption } from '@/components/connect-wallet/account-option';
import { CardForm } from '@/components/connect-wallet/card-form';
import { DebitCardPreview } from '@/components/connect-wallet/debit-card-preview';
import { HeaderBackground } from '@/components/layout/header-background';
import { ScreenHeader } from '@/components/layout/screen-header';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { accountOptions, connectWalletTabs } from '@/constants/data';
import type { IconName } from '@/constants/icon';

const accountIcons: Record<string, IconName> = {
  'bank-link': 'bank',
  microdeposits: 'currencyDollar',
  paypal: 'paypal',
};

export default function ConnectWalletScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<(typeof connectWalletTabs)[number]>('Cards');
  const [selectedAccount, setSelectedAccount] = useState('bank-link');

  return (
    <View className="screen">
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-10">
        <View className="relative">
          <HeaderBackground />
          <View className="screen-padding pb-16" style={{ paddingTop: insets.top + 8 }}>
            <ScreenHeader tone="light" title="Connect Wallet" />
          </View>
        </View>
        <View className="screen-padding -mt-8 gap-5">
          <SegmentedControl variant="track" options={connectWalletTabs} value={tab} onChange={setTab} />
          {tab === 'Cards' ? (
            <View className="gap-5">
              <DebitCardPreview />
              <CardForm />
            </View>
          ) : (
            <View className="gap-3">
              {accountOptions.map((account) => (
                <AccountOption
                  key={account.id}
                  title={account.title}
                  description={account.description}
                  icon={accountIcons[account.id]}
                  selected={selectedAccount === account.id}
                  onPress={() => setSelectedAccount(account.id)}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
