import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { TextField } from '@/components/ui/text-field';
import { debitCard } from '@/constants/data';

export function CardForm() {
  const [name, setName] = useState(debitCard.name);
  const [number, setNumber] = useState(debitCard.number);
  const [cvc, setCvc] = useState(debitCard.cvc);
  const [expiry, setExpiry] = useState(debitCard.expiry);

  return (
    <View className="gap-4">
      <View className="gap-1">
        <Text className="font-inter-semibold text-title text-heading">Add your debit Card</Text>
        <Text className="font-inter text-footnote text-secondary">
          This card must be connected to a bank account under your name.
        </Text>
      </View>
      <TextField label="NAME ON CARD" value={name} onChangeText={setName} focused />
      <View className="flex-row gap-3">
        <View className="flex-[1.7]">
          <TextField
            label="DEBIT CARD NUMBER"
            value={number}
            onChangeText={setNumber}
            keyboardType="number-pad"
          />
        </View>
        <View className="flex-1">
          <TextField label="CVC" value={cvc} onChangeText={setCvc} placeholder="CVC" keyboardType="number-pad" />
        </View>
      </View>
      <TextField label="EXPIRY DATE" value={expiry} onChangeText={setExpiry} placeholder="MM/YY" />
      <Pressable accessibilityRole="button" onPress={() => router.back()} className="btn-primary mt-2">
        <Text className="btn-primary-text">Add Card</Text>
      </Pressable>
    </View>
  );
}
