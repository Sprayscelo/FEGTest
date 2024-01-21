import { CustomInput } from "./styles";

interface InputProps {
  width: string;
}

export function Input({ width }: InputProps) {
  return <CustomInput placeholderTextColor="#2D2D2D" width={width} />;
}
