import { useAuth } from '@clerk/expo';
import { useHostedAuth } from '@clerk/expo/hosted-auth';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';

import { hostedAuthRedirectUrl } from '@/constants/hosted-auth';

export default function SignInScreen() {
  const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const { startHostedAuth } = useHostedAuth();
  const router = useRouter();
  const startHostedAuthRef = useRef(startHostedAuth);
  const openedClerk = useRef(false);

  startHostedAuthRef.current = startHostedAuth;

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(tabs)/home');
      return;
    }

    if (openedClerk.current) {
      return;
    }

    openedClerk.current = true;
    void startHostedAuthRef.current({ mode: 'sign-in', redirectUrl: hostedAuthRedirectUrl });
  }, [isSignedIn, router]);

  return null;
}
