import type { ReactNode } from 'react';
import { Text, TextInput, View, type KeyboardTypeOptions } from 'react-native';

type TextFieldProps = {
  label: string;
  value: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  focused?: boolean;
  left?: ReactNode;
  right?: ReactNode;
};

export function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  focused = false,
  left,
  right,
}: TextFieldProps) {
  return (
    <View className="gap-2">
      <Text className="text-field-label">{label}</Text>
      <View className={focused ? 'input-focused' : 'input'}>
        {left}
        {onChangeText ? (
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor="#666666"
            className="flex-1 font-inter text-callout text-heading"
            style={{ padding: 0 }}
          />
        ) : (
          <Text className="flex-1 font-inter text-callout text-heading" numberOfLines={1}>
            {value}
          </Text>
        )}
        {right}
      </View>
    </View>
  );
}
