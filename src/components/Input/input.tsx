import { CustomInput } from "./styles";

interface InputProps {
  width: string;
}

export function Input({ width }: InputProps) {
  return <CustomInput width={width}></CustomInput>;
}
