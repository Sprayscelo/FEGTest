import { TouchableOpacityProps } from "react-native";
import { Button } from "./styles";
import { CustomText } from "@components/CustomText/CustomText";

interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  width: string;
  text: string;
}

export function CustomButton({ color, width, text, ...props }: ButtonProps) {
  return (
    <Button {...props} color={color} width={width}>
      <CustomText text={text} color="#FFF" fontSize="20.168px" />
    </Button>
  );
}
