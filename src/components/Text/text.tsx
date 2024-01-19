import { Text } from "./style";

interface CustomTextProps {
  color: string;
  fontSize: string;
  text: string;
}

export function CustomText({ color, fontSize, text }: CustomTextProps) {
  return (
    <Text color={color} fontSize={fontSize}>
      {text}
    </Text>
  );
}
