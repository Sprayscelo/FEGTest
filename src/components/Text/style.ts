import styled from "styled-components/native";

import theme from "@theme/theme";

export const Text = styled.Text<{
  color: string;
  fontSize: string;
  rest?: string;
}>`
  color: ${({ color }) => color};
  font-family: ${theme.fonts.default};
  font-size: ${({ fontSize }) => fontSize};
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  ${({ rest }) => rest}
`;
