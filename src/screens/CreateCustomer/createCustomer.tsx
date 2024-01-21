import { Header } from "@components/Header/header";
import { CustomText } from "@components/Text/text";

import {
  CreateCostumerContainer,
  DetailsContainer,
  TitleContainer,
  Wrapper,
  WrapperButton,
} from "./style";
import { CustomInput } from "@components/Input/styles";
import { CustomButton } from "@components/Button/button";
import { CustomerService } from "@service/LocalDatabaseService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigatorRoutesProps } from "@routes/private.routes";
import { useState } from "react";
import { Alert } from "react-native";

import formatCPF from "@utils/validateCpf";

export function CreateCustomer() {
  const navigation = useNavigation<StackNavigatorRoutesProps>();

  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");

  const createCustomer = async () => {
    if (!cpf) {
      return Alert.alert("CPF inválido", "Por favor preencha o campo CPF");
    }
    if (!formatCPF(cpf)) {
      return Alert.alert("CPF inválido", "Por favor preencha um CPF válido!");
    }
    if (!name) {
      return Alert.alert("Nome inválido", "Por favor preencha o campo NOME");
    }

    const insertCustomer = await CustomerService.insert(cpf, name);

    if (!insertCustomer) return;

    navigation.navigate("Clientes");
  };

  return (
    <CreateCostumerContainer style={{ flex: 1 }}>
      <Header></Header>
      <TitleContainer>
        <CustomText
          fontWeight={600}
          fontSize="16px"
          text={"Informações do cliente"}
        ></CustomText>
      </TitleContainer>
      <DetailsContainer>
        <Wrapper>
          <CustomText fontSize="16px" color="#000" text={"Nome"}></CustomText>
          <CustomInput
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Digite o nome ou razão social"
            inputMode="text"
            width="100%"
            style={{ paddingTop: 13, paddingBottom: 10, paddingLeft: 15 }}
          ></CustomInput>
        </Wrapper>
        <Wrapper>
          <CustomText fontSize="16px" color="#000" text={"CPF"}></CustomText>
          <CustomInput
            value={cpf}
            onChangeText={(value) => setCpf(value)}
            placeholder="000.000.000-00"
            keyboardType="numeric"
            inputMode="numeric"
            width="100%"
            style={{ paddingTop: 13, paddingBottom: 10, paddingLeft: 15 }}
          ></CustomInput>
        </Wrapper>
      </DetailsContainer>
      <WrapperButton style={{ flex: 2 }}>
        <CustomButton
          onPress={() => createCustomer()}
          text={"Cadastrar"}
          width="100%"
        ></CustomButton>
      </WrapperButton>
    </CreateCostumerContainer>
  );
}
