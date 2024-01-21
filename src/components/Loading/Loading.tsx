import { View, ActivityIndicator } from "react-native";

import { styles } from "./style";

interface LoadingProps {
  color?: string;
  size?: number | "small" | "large";
}

export function Loading({ size, color, ...props }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size={size} {...props} />
    </View>
  );
}
