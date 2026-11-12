export type TransactionType = 'income' | 'expense';

export type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
};

export type Contact = {
  id: string;
  name: string;
};

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
  { id: '1', title: 'Upwork', date: 'Today', amount: 850, type: 'income' },
  { id: '2', title: 'Transfer', date: 'Yesterday', amount: 85, type: 'expense' },
  { id: '3', title: 'Paypal', date: 'Jan 30, 2022', amount: 1406, type: 'income' },
  { id: '4', title: 'Youtube', date: 'Jan 16, 2022', amount: 11.99, type: 'expense' },
];

export const topSpending: Transaction[] = [
  { id: '5', title: 'Starbucks', date: 'Jan 12, 2022', amount: 150, type: 'expense' },
  { id: '2', title: 'Transfer', date: 'Yesterday', amount: 85, type: 'expense' },
  { id: '4', title: 'Youtube', date: 'Jan 16, 2022', amount: 11.99, type: 'expense' },
];

export const sendAgain: Contact[] = [
  { id: '1', name: 'Contact 1' },
  { id: '2', name: 'Contact 2' },
  { id: '3', name: 'Contact 3' },
  { id: '4', name: 'Contact 4' },
  { id: '5', name: 'Contact 5' },
];

export const statisticPeriods = ['Day', 'Week', 'Month', 'Year'] as const;

export const statisticTypes = ['Expense', 'Income'] as const;

export const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

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
};

export const upcomingBills: Bill[] = [
  { id: 'youtube', title: 'Youtube', dueDate: 'Feb 28, 2022' },
  { id: 'electricity', title: 'Electricity', dueDate: 'Mar 28, 2022' },
  { id: 'house-rent', title: 'House Rent', dueDate: 'Mar 31, 2022' },
  { id: 'spotify', title: 'Spotify', dueDate: 'Feb 28, 2022' },
];

export const billDetail = {
  title: 'Youtube Premium',
  dueDate: 'Feb 28, 2022',
  price: 11.99,
  fee: 1.99,
  total: 13.98,
};

export const paymentMethods = [
  { id: 'debit-card', label: 'Debit Card' },
  { id: 'paypal', label: 'Paypal' },
];

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
