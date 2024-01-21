import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import { Logo } from "@components/Logo/logo";
import { CustomText } from "@components/Text/text";
import { CustomInput } from "@components/Input/styles";
import { CustomButton } from "@components/Button/button";

import { LoginDetailsContainer, Wrapper } from "./style";

import { useAuth } from "@hooks/useAuth";

import validator from "validator";

import { Ionicons } from "@expo/vector-icons";
import EyeHide from "@assets/EyeHide.svg";

import theme from "@theme/theme";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const { isEmail } = validator;

  const { login } = useAuth();

  const sendLogin = () => {
    if (!email || !isEmail(email)) {
      return Alert.alert("Email invalido", "Por favor digite um email válido");
    }

    if (!password) {
      return Alert.alert("Senha inválida", "Por favor preencha o campo senha!");
    }

    if (!login({ email, password })) {
      return Alert.alert(
        "Usuário não cadastrado",
        "Este usuário não esta cadastrado"
      );
    }

    if (login({ email, password })) return;
  };

  return (
    <View style={styles.container}>
      <Logo />
      <LoginDetailsContainer>
        <Wrapper style={{ marginBottom: 5 }}>
          <CustomText text="Acesse sua conta" color="#4E4E4E" fontSize="16px" />
        </Wrapper>
        <Wrapper style={{ gap: 15 }}>
          <CustomInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            width="75.2%"
            placeholder="Digite seu e-mail"
          ></CustomInput>
          <Wrapper style={{ flexDirection: "row" }}>
            <CustomInput
              value={password}
              onChangeText={(value) => setPassword(value)}
              width="75.2%"
              placeholder="Digite sua senha"
              secureTextEntry={isPasswordVisible}
            ></CustomInput>
            {!isPasswordVisible ? (
              <Ionicons
                name="eye"
                size={16.825}
                color={theme.colors.primary}
                style={styles.icon}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            ) : (
              <EyeHide
                width={20}
                height={16.825}
                color={theme.colors.primary}
                style={styles.icon}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </Wrapper>
        </Wrapper>
        <Wrapper style={{ marginTop: 37 }}>
          <CustomButton
            onPress={() => sendLogin()}
            width="75.2%"
            text="Entrar"
          ></CustomButton>
        </Wrapper>
      </LoginDetailsContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 65,
  },
});
