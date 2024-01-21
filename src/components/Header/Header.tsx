import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";

import { HeaderContainer, Wrapper } from "./styles";

import Frame from "@assets/Frame.svg";

import { CustomText } from "@components/CustomText/CustomText";
import { StackNavigatorRoutesProps } from "@routes/private.routes";
import { TouchableOpacity } from "react-native";
import theme from "@theme/theme";
import { useAuth } from "@hooks/useAuth";

export function Header() {
  const { name } = useRoute();
  const { canGoBack, pop } = useNavigation<StackNavigatorRoutesProps>();
  const { logout } = useAuth();

  return (
    <HeaderContainer>
      <Wrapper>
        {canGoBack() && (
          <TouchableOpacity onPress={() => pop()}>
            <Frame style={{ pointerEvents: "none" }} />
          </TouchableOpacity>
        )}
      </Wrapper>
      <CustomText
        text={name}
        fontSize="14px"
        color="#4E4E4E"
        fontWeight={600}
      />
      <MaterialIcons
        name="logout"
        size={24}
        color={theme.colors.primary}
        style={{ paddingRight: 15 }}
        onPress={() => logout()}
      />
    </HeaderContainer>
  );
}
