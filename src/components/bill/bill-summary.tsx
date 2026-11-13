import { View } from 'react-native';

import { DetailRow } from '@/components/ui/detail-row';
import { formatCurrency } from '@/constants/data';
import { colors } from '@/constants/theme';

type BillSummaryProps = {
  price: number;
  fee: number;
  signedFee?: boolean;
};

export function BillSummary({ price, fee, signedFee = false }: BillSummaryProps) {
  const total = Math.round((price + fee) * 100) / 100;

  return (
    <View>
      <DetailRow label="Price" value={formatCurrency(price)} />
      <DetailRow label="Fee" value={signedFee ? `- ${formatCurrency(fee)}` : formatCurrency(fee)} />
      <View className="my-2" style={{ height: 1, backgroundColor: colors.border }} />
      <DetailRow label="Total" value={formatCurrency(total)} tone="strong" />
    </View>
  );
}
