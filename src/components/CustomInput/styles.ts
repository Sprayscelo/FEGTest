import styled from "styled-components/native";

import theme from "@theme/theme";

export const CustomInput = styled.TextInput<{ width: string }>`
  border: 1px solid ${theme.colors.inputBorderColor};
  border-radius: 3px;
  padding: 17.67px;
  width: ${({ width }) => width};
  font-family: ${theme.fonts.default};
`;
