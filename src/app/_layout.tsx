import '@/global.css';

import { ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('../../assets/fonts/Inter_400Regular.ttf'),
    InterMedium: require('../../assets/fonts/Inter_500Medium.ttf'),
    InterSemiBold: require('../../assets/fonts/Inter_600SemiBold.ttf'),
    InterBold: require('../../assets/fonts/Inter_700Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

 return (
  <ClerkProvider publishableKey={publishableKey || ''} tokenCache={tokenCache}>
    <Slot />
    </ClerkProvider>
  )
}