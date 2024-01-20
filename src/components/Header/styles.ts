import styled from "styled-components/native";

import theme from "@theme/theme";
import { Dimensions } from "react-native";

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 46px;
  background-color: ${theme.colors.headerColor};
`;

export const Wrapper = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 15px;
  position: absolute;
  height: 46px;
  width: ${Dimensions.get("screen").width}px;
`;
