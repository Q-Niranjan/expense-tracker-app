import { Pressable, Text, View } from 'react-native';

const ROWS = [
  [
    { digit: 1, letters: '' },
    { digit: 2, letters: 'ABC' },
    { digit: 3, letters: 'DEF' },
  ],
  [
    { digit: 4, letters: 'GHI' },
    { digit: 5, letters: 'JKL' },
    { digit: 6, letters: 'MNO' },
  ],
  [
    { digit: 7, letters: 'PQRS' },
    { digit: 8, letters: 'TUV' },
    { digit: 9, letters: 'WXYZ' },
  ],
] as const;

type NumericKeypadProps = {
  onDigit: (digit: number) => void;
  onDelete: () => void;
  bottomInset: number;
};

export function NumericKeypad({ onDigit, onDelete, bottomInset }: NumericKeypadProps) {
  return (
    <View className="bg-[#E6E7E9] px-1.5 pt-2" style={{ paddingBottom: Math.max(bottomInset, 10) }}>
      {ROWS.map((row) => (
        <View key={row[0].digit} className="mb-1.5 flex-row gap-1.5">
          {row.map((key) => (
            <Pressable
              key={key.digit}
              accessibilityRole="button"
              accessibilityLabel={String(key.digit)}
              onPress={() => onDigit(key.digit)}
              className="h-[52px] flex-1 items-center justify-center rounded-lg bg-background"
            >
              <Text className="font-inter text-headline text-heading">{key.digit}</Text>
              <Text className="font-inter text-[9px] tracking-widest text-secondary">{key.letters}</Text>
            </Pressable>
          ))}
        </View>
      ))}
      <View className="flex-row gap-1.5">
        <View className="h-[52px] flex-1 items-center justify-center">
          <Text className="font-inter-medium text-caption text-secondary">+ * #</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="0"
          onPress={() => onDigit(0)}
          className="h-[52px] flex-1 items-center justify-center rounded-lg bg-background"
        >
          <Text className="font-inter text-headline text-heading">0</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Delete"
          onPress={onDelete}
          className="h-[52px] flex-1 items-center justify-center"
        >
          <Text className="font-inter text-title text-heading">⌫</Text>
        </Pressable>
      </View>
    </View>
  );
}
