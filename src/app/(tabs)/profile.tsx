import { Show, useClerk } from '@clerk/expo';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfileMenuItem } from '@/components/profile/profile-menu-item';
import { profileMenu } from '@/constants/data';
import type { IconName } from '@/constants/icon';

const menuIcons: Record<string, { icon: IconName; accent?: boolean }> = {
  invite: { icon: 'diamond', accent: true },
  account: { icon: 'user' },
  personal: { icon: 'users' },
  message: { icon: 'envelope' },
  security: { icon: 'shield' },
  privacy: { icon: 'lock' },
};

export default function ProfileScreen() {
  const { signOut } = useClerk();

  return (
    <View className="screen">
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-8">
        <ProfileHeader />
        <View className="screen-padding mt-6">
          {profileMenu.map((item) => {
            const icon = menuIcons[item.id];
            if (!icon) {
              return null;
            }

            return <ProfileMenuItem key={item.id} label={item.label} icon={icon.icon} accent={icon.accent} />;
          })}
          <Show when="signed-in">
            <Pressable accessibilityRole="button" onPress={() => signOut()} className="mt-4 py-3">
              <Text className="font-inter-medium text-callout text-danger">Sign out</Text>
            </Pressable>
          </Show>
          <Show when="signed-out">
            <Link href="/(auth)/sign-in" asChild>
              <Pressable accessibilityRole="button" className="mt-4 py-3">
                <Text className="font-inter-medium text-callout text-primary">Sign in</Text>
              </Pressable>
            </Link>
          </Show>
        </View>
      </ScrollView>
    </View>
  );
}
