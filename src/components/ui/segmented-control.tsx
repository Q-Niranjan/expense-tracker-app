import { Pressable, Text, View } from 'react-native';

type SegmentedControlProps<T extends string> = {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  variant?: 'plain' | 'track';
};

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  variant = 'plain',
}: SegmentedControlProps<T>) {
  if (variant === 'track') {
    return (
      <View className="flex-row rounded-pill bg-primary-50 p-1">
        {options.map((option) => {
          const selected = option === value;

          return (
            <Pressable
              key={option}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              onPress={() => onChange(option)}
              className={`h-10 flex-1 items-center justify-center rounded-pill ${selected ? 'bg-background' : ''}`}
            >
              <Text
                className={
                  selected
                    ? 'font-inter-semibold text-footnote text-heading'
                    : 'font-inter text-footnote text-secondary'
                }
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  }

  return (
    <View className="flex-row items-center">
      {options.map((option) => {
        const selected = option === value;

        return (
          <Pressable
            key={option}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={() => onChange(option)}
            className={selected ? 'chip-active' : 'chip'}
          >
            <Text className={selected ? 'chip-text-active' : 'chip-text'}>{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
