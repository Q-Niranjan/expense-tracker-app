import { DetailRow } from '@/components/ui/detail-row';
import { formatCurrency, type TransactionDetail } from '@/constants/data';

type AmountSummaryProps = {
  detail: Pick<TransactionDetail, 'amountLabel' | 'amount' | 'fee' | 'total'>;
};

export function AmountSummary({ detail }: AmountSummaryProps) {
  return (
    <>
      <DetailRow label={detail.amountLabel} value={formatCurrency(detail.amount)} />
      {detail.fee > 0 ? <DetailRow label="Fee" value={`- ${formatCurrency(detail.fee)}`} /> : null}
      <DetailRow label="Total" value={formatCurrency(detail.total)} tone="strong" />
    </>
  );
}
