import { TextInput, type TextInputProps } from "react-native";
import { SearchBarContainer } from "./style";

import Search from "@assets/Search.svg";

export function SearchBar({ ...props }: TextInputProps) {
  return (
    <SearchBarContainer>
      <Search />
      <TextInput style={{ width: "100%" }} {...props} />
    </SearchBarContainer>
  );
}
