import styled from "styled-components/native";

export const LoginDetailsContainer = styled.View`
  margin-top: 88px;
  display: flex;
  flex-direction: "column";
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.View<{ styles?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ styles }) => styles}
`;
