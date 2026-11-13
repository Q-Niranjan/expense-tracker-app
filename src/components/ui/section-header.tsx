import { Pressable, Text, View } from 'react-native';

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  return (
    <View className="section-header">
      <Text className="text-section-title">{title}</Text>
      {actionLabel ? (
        <Pressable accessibilityRole="button" hitSlop={8} onPress={onActionPress}>
          <Text className="text-link">{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}
