import styled from "styled-components/native";

import theme from "@theme/theme";

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  background-color: ${theme.colors.headerColor};
  width: 100%;
`;

export const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  padding-left: 15px;
  height: 46px;
`;
