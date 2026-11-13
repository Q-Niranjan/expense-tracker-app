import type { IconName } from '@/constants/icon';
import type { ImageName } from '@/constants/image';

export type TransactionType = 'income' | 'expense';

export type TransactionImageStyle = 'logo' | 'avatar';

export type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  image: ImageName;
  imageStyle: TransactionImageStyle;
};

export type Contact = {
  id: string;
  name: string;
  image: ImageName;
};

export function formatCurrency(amount: number) {
  const absolute = Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `$ ${absolute}`;
}

export function formatSignedCurrency(amount: number, type: TransactionType) {
  const sign = type === 'income' ? '+' : '-';
  return `${sign} ${formatCurrency(amount)}`;
}

export type MenuItem = {
  id: string;
  label: string;
};

export const user = {
  name: 'Enjelin Morgeana',
  handle: '@enjelin_morgeana',
  greeting: 'Good afternoon,',
};

export const balance = {
  total: 2548,
  income: 1840,
  expenses: 284,
};

export const transactions: Transaction[] = [
  { id: '1', title: 'Upwork', date: 'Today', amount: 850, type: 'income', image: 'logoUpwork', imageStyle: 'logo' },
  { id: '2', title: 'Transfer', date: 'Yesterday', amount: 85, type: 'expense', image: 'avatar1', imageStyle: 'avatar' },
  { id: '3', title: 'Paypal', date: 'Jan 30, 2022', amount: 1406, type: 'income', image: 'logoPaypal', imageStyle: 'logo' },
  { id: '4', title: 'Youtube', date: 'Jan 16, 2022', amount: 11.99, type: 'expense', image: 'logoYoutube', imageStyle: 'logo' },
];

export const topSpending: Transaction[] = [
  { id: '5', title: 'Starbucks', date: 'Jan 12, 2022', amount: 150, type: 'expense', image: 'logoStarbucks', imageStyle: 'logo' },
  { id: '2', title: 'Transfer', date: 'Yesterday', amount: 85, type: 'expense', image: 'avatar1', imageStyle: 'avatar' },
  { id: '4', title: 'Youtube', date: 'Jan 16, 2022', amount: 11.99, type: 'expense', image: 'logoYoutube', imageStyle: 'logo' },
];

export const sendAgain: Contact[] = [
  { id: '1', name: 'Contact 1', image: 'avatar1' },
  { id: '2', name: 'Contact 2', image: 'avatar2' },
  { id: '3', name: 'Contact 3', image: 'avatar4' },
  { id: '4', name: 'Contact 4', image: 'avatar3' },
  { id: '5', name: 'Contact 5', image: 'avatar5' },
];

export const statisticPeriods = ['Day', 'Week', 'Month', 'Year'] as const;

export const statisticTypes = ['Expense', 'Income'] as const;

export const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

export type ChartPoint = {
  label: string;
  value: number;
};

export const expenseChart: ChartPoint[] = [
  { label: 'Mar', value: 980 },
  { label: 'Apr', value: 860 },
  { label: 'May', value: 1230 },
  { label: 'Jun', value: 1500 },
  { label: 'Jul', value: 1120 },
  { label: 'Aug', value: 1380 },
  { label: 'Sep', value: 1290 },
];

export const incomeChart: ChartPoint[] = [
  { label: 'Mar', value: 1100 },
  { label: 'Apr', value: 1340 },
  { label: 'May', value: 980 },
  { label: 'Jun', value: 1620 },
  { label: 'Jul', value: 1480 },
  { label: 'Aug', value: 1710 },
  { label: 'Sep', value: 1540 },
];

export const walletTabs = ['Transactions', 'Upcoming Bills'] as const;

export const connectWalletTabs = ['Cards', 'Accounts'] as const;

export const profileMenu: MenuItem[] = [
  { id: 'invite', label: 'Invite Friends' },
  { id: 'account', label: 'Account info' },
  { id: 'personal', label: 'Personal profile' },
  { id: 'message', label: 'Message center' },
  { id: 'security', label: 'Login and security' },
  { id: 'privacy', label: 'Data and privacy' },
];

export const addExpenseDraft = {
  name: 'Netflix',
  amount: 48,
  date: 'Tue, 22 Feb 2022',
};

export const appInfo = {
  name: 'mono',
  tagline: 'Spend Smarter\nSave More',
};

export const walletActions = ['Pay', 'Add', 'Send'] as const;

export type Bill = {
  id: string;
  title: string;
  dueDate: string;
  image?: ImageName;
  icon?: IconName;
};

export const upcomingBills: Bill[] = [
  { id: 'youtube', title: 'Youtube', dueDate: 'Feb 28, 2022', image: 'logoYoutube' },
  { id: 'electricity', title: 'Electricity', dueDate: 'Mar 28, 2022', icon: 'lightning' },
  { id: 'house-rent', title: 'House Rent', dueDate: 'Mar 31, 2022', icon: 'house' },
  { id: 'spotify', title: 'Spotify', dueDate: 'Feb 28, 2022', image: 'logoSpotify' },
];

export const debitCard = {
  name: 'IRVAN MOSES',
  number: '6219 8610 2888 8075',
  cvc: '',
  expiry: '22/01',
};

export const billDetail = {
  title: 'Youtube Premium',
  dueDate: 'Feb 28, 2022',
  price: 11.99,
  fee: 1.99,
  total: 13.98,
};

export const paymentMethods: { id: string; label: string; payWith: string; icon: IconName }[] = [
  { id: 'debit-card', label: 'Debit Card', payWith: 'BCA OneKlik', icon: 'creditCard' },
  { id: 'paypal', label: 'Paypal', payWith: 'Paypal', icon: 'paypal' },
];

export const billQuotes: Record<string, { statementTitle: string; price: number; fee: number }> = {
  youtube: { statementTitle: billDetail.title, price: billDetail.price, fee: billDetail.fee },
  electricity: { statementTitle: 'Electricity', price: 45, fee: 1.99 },
  'house-rent': { statementTitle: 'House Rent', price: 500, fee: 2.5 },
  spotify: { statementTitle: 'Spotify Premium', price: 9.99, fee: 0.99 },
};

export const accountOptions = [
  { id: 'bank-link', title: 'Bank Link', description: 'Connect your bank account to deposit & fund' },
  { id: 'microdeposits', title: 'Microdeposits', description: 'Connect bank in 5-7 days' },
  { id: 'paypal', title: 'Paypal', description: 'Connect you paypal account' },
];

export type TransactionDetail = {
  id: string;
  type: TransactionType;
  counterpartyLabel: 'From' | 'To';
  counterparty: string;
  time: string;
  date: string;
  amountLabel: 'Earnings' | 'Spending';
  amount: number;
  fee: number;
  total: number;
};

export const transactionDetails: Record<string, TransactionDetail> = {
  '1': {
    id: '1',
    type: 'income',
    counterpartyLabel: 'From',
    counterparty: 'Upwork Escrow',
    time: '10:00 AM',
    date: 'Feb 30, 2022',
    amountLabel: 'Earnings',
    amount: 870,
    fee: 20,
    total: 850,
  },
  '2': {
    id: '2',
    type: 'expense',
    counterpartyLabel: 'To',
    counterparty: 'Claire Jovalski',
    time: '04:30 PM',
    date: 'Feb 29, 2022',
    amountLabel: 'Spending',
    amount: 85,
    fee: 0.99,
    total: 84,
  },
};

export const billPaymentReceipt = {
  billName: 'Youtube Premium',
  paymentMethod: 'Debit Card',
  status: 'Completed',
  time: '08:15 AM',
  date: 'Feb 28, 2022',
  transactionId: '2092913832472..',
  price: 11.99,
  fee: 1.99,
  total: 13.98,
};
