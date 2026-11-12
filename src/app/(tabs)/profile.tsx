import { Show, useClerk, useUser } from '@clerk/expo';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View>
      <Show when="signed-in">
        <Text>Hello, {user?.firstName ?? 'friend'}</Text>
        <Pressable onPress={() => signOut()}>
          <Text>Sign out</Text>
        </Pressable>
      </Show>
      <Show when="signed-out">
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
      </Show>
    </View>
  );
}