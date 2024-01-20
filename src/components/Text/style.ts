import styled from "styled-components/native";

import theme from "@theme/theme";

export const Text = styled.Text<{
  color: string;
  fontSize: string;
  rest?: string;
  fontWeight?: number;
}>`
  color: ${({ color }) => color};
  font-family: ${theme.fonts.default};
  font-size: ${({ fontSize }) => fontSize};
  font-style: normal;
  line-height: 27px;
  font-family: ${({ fontWeight }) =>
    fontWeight ?? 0 > 400 ? theme.fonts.bold : theme.fonts.default};
  ${({ rest }) => rest}
`;
