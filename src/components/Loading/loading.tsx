import { View, ActivityIndicator } from "react-native";

interface LoadingProps {
  color?: string;
  size?: number | "small" | "large";
}

export function Loading({ size, color, ...props }: LoadingProps) {
  return (
    <View>
      <ActivityIndicator color={color} size={size} {...props} />
    </View>
  );
}
