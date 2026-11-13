import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { InvoiceUpload } from '@/components/add-expense/invoice-upload';
import { NumericKeypad } from '@/components/add-expense/numeric-keypad';
import { HeaderBackground } from '@/components/layout/header-background';
import { ScreenHeader } from '@/components/layout/screen-header';
import { SelectField } from '@/components/ui/select-field';
import { TextField } from '@/components/ui/text-field';
import { addExpenseDraft, formatCurrency } from '@/constants/data';
import { icons } from '@/constants/icon';
import { images, type ImageName } from '@/constants/image';
import { colors } from '@/constants/theme';

const merchants: { name: string; image: ImageName }[] = [
  { name: 'Netflix', image: 'logoNetflix' },
  { name: 'Youtube', image: 'logoYoutube' },
  { name: 'Spotify', image: 'logoSpotify' },
  { name: 'Starbucks', image: 'logoStarbucks' },
];

const MAX_CENTS = 99_999_999;

export default function AddExpenseScreen() {
  const insets = useSafeAreaInsets();
  const [cents, setCents] = useState(Math.round(addExpenseDraft.amount * 100));
  const [merchantIndex, setMerchantIndex] = useState(0);
  const [invoiceAdded, setInvoiceAdded] = useState(false);
  const merchant = merchants[merchantIndex];

  return (
    <View className="screen">
      <StatusBar style="light" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerClassName="grow"
        keyboardShouldPersistTaps="handled"
      >
        <View className="relative">
          <HeaderBackground />
          <View className="screen-padding pb-16" style={{ paddingTop: insets.top + 8 }}>
            <ScreenHeader tone="light" title="Add Expense" rightIcon={icons.moreHorizontal} />
          </View>
        </View>
        <View className="screen-padding -mt-8 gap-4 pb-6">
          <View className="card gap-4 px-4 py-5">
            <SelectField
              label="NAME"
              value={merchant.name}
              image={images[merchant.image]}
              onPress={() => setMerchantIndex((current) => (current + 1) % merchants.length)}
            />
            <TextField
              label="AMOUNT"
              value={formatCurrency(cents / 100)}
              focused
              right={
                <Pressable accessibilityRole="button" hitSlop={8} onPress={() => setCents(0)}>
                  <Text className="font-inter text-body text-primary">Clear</Text>
                </Pressable>
              }
            />
            <TextField
              label="DATE"
              value={addExpenseDraft.date}
              right={
                <Image
                  source={icons.calendar}
                  resizeMode="contain"
                  tintColor={colors.secondary}
                  style={{ width: 18, height: 18 }}
                />
              }
            />
            <InvoiceUpload
              label={invoiceAdded ? 'invoice.pdf' : 'Add Invoice'}
              onPress={() => setInvoiceAdded((current) => !current)}
            />
          </View>
        </View>
      </ScrollView>
      <NumericKeypad
        bottomInset={insets.bottom}
        onDigit={(digit) => setCents((current) => Math.min(current * 10 + digit, MAX_CENTS))}
        onDelete={() => setCents((current) => Math.floor(current / 10))}
      />
    </View>
  );
}
