import { TextProps } from "react-native";
import { Text } from "./style";

interface CustomTextProps extends TextProps {
  color: string;
  fontSize: string;
  text: string;
  fontWeight?: number;
}

export function CustomText({
  color,
  fontSize,
  text,
  fontWeight,
  ...props
}: CustomTextProps) {
  return (
    <Text color={color} fontSize={fontSize} fontWeight={fontWeight} {...props}>
      {text}
    </Text>
  );
}
