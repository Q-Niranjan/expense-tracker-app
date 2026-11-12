import type { ImageSourcePropType } from 'react-native';

import arrowDownIcon from '@/assets/icons/arrow-down.png';
import bankIcon from '@/assets/icons/bank.png';
import bellIcon from '@/assets/icons/bell.png';
import calendarIcon from '@/assets/icons/calendar.png';
import checkCircleIcon from '@/assets/icons/check-circle.png';
import chevronDownIcon from '@/assets/icons/chevron-down.png';
import chevronLeftWhiteIcon from '@/assets/icons/chevron-left-white.png';
import chevronLeftIcon from '@/assets/icons/chevron-left.png';
import chevronUpIcon from '@/assets/icons/chevron-up.png';
import copyIcon from '@/assets/icons/copy.png';
import creditCardIcon from '@/assets/icons/credit-card.png';
import currencyDollarIcon from '@/assets/icons/currency-dollar.png';
import diamondIcon from '@/assets/icons/diamond.png';
import downloadIcon from '@/assets/icons/download.png';
import envelopeIcon from '@/assets/icons/envelope.png';
import homeActiveIcon from '@/assets/icons/home-active.png';
import homeIcon from '@/assets/icons/home.png';
import houseIcon from '@/assets/icons/house.png';
import lightningIcon from '@/assets/icons/lightning.png';
import lockIcon from '@/assets/icons/lock.png';
import moreHorizontalIcon from '@/assets/icons/more-horizontal.png';
import paypalIcon from '@/assets/icons/paypal.png';
import plusCircleIcon from '@/assets/icons/plus-circle.png';
import plusFillIcon from '@/assets/icons/plus-fill.png';
import plusIcon from '@/assets/icons/plus.png';
import profileIcon from '@/assets/icons/profile.png';
import qrCodeIcon from '@/assets/icons/qr-code.png';
import sendIcon from '@/assets/icons/send.png';
import shieldIcon from '@/assets/icons/shield.png';
import sortIcon from '@/assets/icons/sort.png';
import statisticsActiveIcon from '@/assets/icons/statistics-active.png';
import statisticsIcon from '@/assets/icons/statistics.png';
import userIcon from '@/assets/icons/user.png';
import usersIcon from '@/assets/icons/users.png';
import walletIcon from '@/assets/icons/wallet.png';

export const icons = {
  home: homeIcon,
  homeActive: homeActiveIcon,
  statistics: statisticsIcon,
  statisticsActive: statisticsActiveIcon,
  wallet: walletIcon,
  profile: profileIcon,
  plus: plusIcon,
  bell: bellIcon,
  chevronLeft: chevronLeftIcon,
  chevronLeftWhite: chevronLeftWhiteIcon,
  chevronDown: chevronDownIcon,
  chevronUp: chevronUpIcon,
  arrowDown: arrowDownIcon,
  moreHorizontal: moreHorizontalIcon,
  plusCircle: plusCircleIcon,
  calendar: calendarIcon,
  download: downloadIcon,
  sort: sortIcon,
  diamond: diamondIcon,
  user: userIcon,
  users: usersIcon,
  envelope: envelopeIcon,
  shield: shieldIcon,
  lock: lockIcon,
  checkCircle: checkCircleIcon,
  currencyDollar: currencyDollarIcon,
  paypal: paypalIcon,
  bank: bankIcon,
  creditCard: creditCardIcon,
  copy: copyIcon,
  house: houseIcon,
  lightning: lightningIcon,
  send: sendIcon,
  plusFill: plusFillIcon,
  qrCode: qrCodeIcon,
} satisfies Record<string, ImageSourcePropType>;

export type IconName = keyof typeof icons;
