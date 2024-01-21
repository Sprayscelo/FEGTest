import theme from "@theme/theme";
import styled from "styled-components/native";

export const SearchBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  border: 1px solid ${theme.colors.inputBorderColor};
  height: 44px;
  margin: 17px 21px;
`;
