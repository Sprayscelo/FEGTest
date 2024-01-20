import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import { Logo } from "@components/Logo/logo";
import { CustomText } from "@components/Text/text";
import { CustomInput } from "@components/Input/styles";
import { CustomButton } from "@components/Button/button";

import { LoginDetailsContainer, Wrapper } from "./style";

import { useAuth } from "@hooks/useAuth";

import validator from "validator";

export function Login() {
  const { isEmail } = validator;

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendLogin = () => {
    if (!email || !isEmail(email)) {
      return Alert.alert(
        "Usuário invalido",
        "Por favor digite um email válido"
      );
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
        <Wrapper styles="margin-bottom: 5px">
          <CustomText text="Acesse sua conta" color="#4E4E4E" fontSize="16px" />
        </Wrapper>
        <Wrapper styles="gap: 15px">
          <CustomInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            width="75.2%"
            placeholder="Digite seu e-mail"
          ></CustomInput>
          <CustomInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            width="75.2%"
            placeholder="Digite sua senha"
          ></CustomInput>
        </Wrapper>
        <Wrapper styles="margin-top: 37px">
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
});
