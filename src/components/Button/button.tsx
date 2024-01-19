import { TouchableOpacityProps } from "react-native";
import { Button } from "./styles";
import { CustomText } from "@components/Text/text";

interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  width: string;
}

export function CustomButton({ color, width, ...props }: ButtonProps) {
  return (
    <Button {...props} color={color} width={width}>
      <CustomText text="Entrar" color="#FFF" fontSize="20.168px"></CustomText>
    </Button>
  );
}
