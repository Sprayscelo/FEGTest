import theme from "@theme/theme";
import styled from "styled-components/native";

export const CustomerContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 5px;
  border-bottom-color: ${theme.colors.inputBorderColor};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

export const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  margin-bottom: 11px;
  margin-top: 10px;
`;

export const UserImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 41px;
  margin-left: 20px;
  border-bottom: 1px;
`;

export const AddButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0%;
  right: 0%;
  border-radius: 28px;
  width: 56px;
  height: 56px;
  background-color: ${theme.colors.primary};
  border: 1.36px solid ${theme.colors.inputBorderColor};
  margin-right: 10px;
  margin-bottom: 18px;
`;

export const EditButton = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: 17px;
`;
