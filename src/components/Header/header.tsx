import React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import { HeaderContainer, Wrapper } from "./styles";

import Frame from "@assets/Frame.svg";

import { CustomText } from "@components/Text/text";
import { StackNavigatorRoutesProps } from "@routes/private.routes";

export function Header() {
  const { name } = useRoute();
  const { canGoBack, pop } = useNavigation<StackNavigatorRoutesProps>();
  return (
    <HeaderContainer>
      {canGoBack() && (
        <Wrapper>
          <Frame onPress={() => pop()}></Frame>
        </Wrapper>
      )}
      <CustomText
        text={name}
        fontSize="14px"
        color="#4E4E4E"
        fontWeight={600}
      ></CustomText>
    </HeaderContainer>
  );
}
