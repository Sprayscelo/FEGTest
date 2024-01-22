import styled from "styled-components/native";

import theme from "@theme/theme";

export const Button = styled.TouchableOpacity<{
  color?: string;
  width: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color ?? theme.colors.primary};
  border-radius: 3px;
  width: ${({ width }) => width};
  padding-top: 12px;
  padding-bottom: 9px;
  height: 48px;
`;
