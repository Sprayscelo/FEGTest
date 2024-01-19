import styled from "styled-components/native";

import theme from "@theme/theme";

export const LogoContainer = styled.View`
  display: grid;
  align-items: center;
  justify-content: center;
  width: "100%";
  gap: 15px;
`;

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.Text<{ color?: string; fontSize: string }>`
  color: ${({ color }) => color};
  font-family: ${theme.fonts.logo};
  font-size: ${({ fontSize }) => fontSize};
`;
