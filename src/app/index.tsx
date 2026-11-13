import { useAuth } from '@clerk/expo';
import { useHostedAuth } from '@clerk/expo/hosted-auth';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

import { hostedAuthRedirectUrl } from '@/constants/hosted-auth';
import { images } from '@/constants/image';
import { colors, gradients } from '@/constants/theme';

const gradientStart = { x: 0, y: 0 };
const gradientEnd = { x: 1, y: 1 };

export default function SplashScreen() {
  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const { startHostedAuth } = useHostedAuth();
  const startHostedAuthRef = useRef(startHostedAuth);
  const openedClerk = useRef(false);

  startHostedAuthRef.current = startHostedAuth;

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (isSignedIn) {
      router.replace('/(tabs)/home');
      return;
    }

    if (openedClerk.current) {
      return;
    }

    openedClerk.current = true;
    void startHostedAuthRef.current({ mode: 'sign-in', redirectUrl: hostedAuthRedirectUrl });
  }, [isLoaded, isSignedIn]);

  return (
    <LinearGradient colors={gradients.splash} start={gradientStart} end={gradientEnd} className="flex-1">
      <StatusBar style="light" />
      <Image
        source={images.splashTexture}
        resizeMode="cover"
        className="absolute top-0 right-0 bottom-0 left-0 opacity-10"
      />
      <View className="flex-1 items-center justify-center gap-6">
        <Text className="text-center font-inter-bold text-on-primary text-[50px] leading-[61px] tracking-[-2px]">
          Your Expense Tracker Application
        </Text>
        <ActivityIndicator color={colors.onPrimary} size="large" />
      </View>
    </LinearGradient>
  );
}
