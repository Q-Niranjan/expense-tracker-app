import { View } from 'react-native';

import { Avatar } from '@/components/ui/avatar';
import type { Contact } from '@/constants/data';
import { images } from '@/constants/image';

type SendAgainListProps = {
  contacts: Contact[];
};

export function SendAgainList({ contacts }: SendAgainListProps) {
  const centerIndex = Math.floor(contacts.length / 2);

  return (
    <View className="flex-row items-center justify-between">
      {contacts.map((contact, index) => (
        <View key={contact.id} className="size-14 items-center justify-center">
          <Avatar source={images[contact.image]} size={52} />
        </View>
      ))}
    </View>
  );
}
