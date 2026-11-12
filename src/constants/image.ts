import type { ImageSourcePropType } from 'react-native';

import avatar1 from '@/assets/images/avatar-1.png';
import avatar2 from '@/assets/images/avatar-2.png';
import avatar3 from '@/assets/images/avatar-3.png';
import avatar4 from '@/assets/images/avatar-4.png';
import avatar5 from '@/assets/images/avatar-5.png';
import profileAvatar from '@/assets/images/profile-avatar.png';
import logoNetflix from '@/assets/images/logo-netflix.png';
import logoPaypal from '@/assets/images/logo-paypal.png';
import logoSpotify from '@/assets/images/logo-spotify.png';
import logoStarbucks from '@/assets/images/logo-starbucks.png';
import logoUpwork from '@/assets/images/logo-upwork.png';
import logoYoutube from '@/assets/images/logo-youtube.png';
import headerBackground from '@/assets/images/header-bg.png';
import headerDecoration from '@/assets/images/header-decoration.png';
import onboardingBackground from '@/assets/images/onboarding-bg.png';
import onboardingMan from '@/assets/images/onboarding-man.png';
import onboardingCoin from '@/assets/images/onboarding-coin.png';
import onboardingDonut from '@/assets/images/onboarding-donut.png';
import splashTexture from '@/assets/images/splash-texture.png';
import bankCard from '@/assets/images/bank-card.png';
import bankCardBack from '@/assets/images/bank-card-back.png';

export const images = {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  profileAvatar,
  logoNetflix,
  logoPaypal,
  logoSpotify,
  logoStarbucks,
  logoUpwork,
  logoYoutube,
  headerBackground,
  headerDecoration,
  onboardingBackground,
  onboardingMan,
  onboardingCoin,
  onboardingDonut,
  splashTexture,
  bankCard,
  bankCardBack,
} satisfies Record<string, ImageSourcePropType>;

export type ImageName = keyof typeof images;
