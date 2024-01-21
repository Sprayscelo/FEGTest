import { TextInput, type TextInputProps } from "react-native";
import { SearchBarContainer } from "./style";

import Search from "@assets/Search.svg";

export function SearchBar({ ...props }: TextInputProps) {
  return (
    <SearchBarContainer>
      <Search></Search>
      <TextInput style={{ width: "100%" }} {...props}></TextInput>
    </SearchBarContainer>
  );
}
