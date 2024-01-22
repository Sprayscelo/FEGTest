import { Header } from "@components/Header/Header";
import { CustomText } from "@components/CustomText/CustomText";

import {
  CreateCostumerContainer,
  DetailsContainer,
  TitleContainer,
  Wrapper,
  WrapperButton,
} from "./style";
import { CustomInput } from "@components/CustomInput/styles";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { CustomerService } from "@service/LocalDatabaseService";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigatorRoutesProps } from "@routes/private.routes";
import { useState } from "react";
import { Alert } from "react-native";

import formatCPF from "@utils/validateCpf";
import { CustomerProps } from "@components/ListCustomers/Customer/Customer";
import { removeAlert } from "@utils/removeAlert";

export function EditCustomer() {
  const navigation = useNavigation<StackNavigatorRoutesProps>();
  const route = useRoute();

  const { id, name, cpf } = route.params as CustomerProps;

  const [newCpf, setNewCpf] = useState(cpf);
  const [newName, setNewName] = useState(name);

  const editCustomer = async () => {
    if (!cpf) {
      return Alert.alert("CPF inválido", "Por favor preencha o campo CPF");
    }
    if (!formatCPF(cpf)) {
      return Alert.alert("CPF inválido", "Por favor preencha um CPF válido!");
    }
    if (!name) {
      return Alert.alert("Nome inválido", "Por favor preencha o campo NOME");
    }

    const updateCustomer = await CustomerService.update({
      id,
      cpf: newCpf,
      name: newName,
    });

    if (!updateCustomer) return;

    navigation.navigate("Clientes");
  };

  const removeCustomer = async () => {
    const removeCustomer = await CustomerService.delete(id);

    if (!removeCustomer) return;

    navigation.navigate("Clientes");
  };

  return (
    <CreateCostumerContainer style={{ flex: 1 }}>
      <Header />
      <TitleContainer>
        <CustomText
          fontWeight={600}
          fontSize="16px"
          text={"Informações do cliente"}
        />
      </TitleContainer>
      <DetailsContainer>
        <Wrapper>
          <CustomText fontSize="16px" color="#000" text={"Nome"} />
          <CustomInput
            value={newName}
            onChangeText={(value) => setNewName(value)}
            placeholder="Digite o nome ou razão social"
            inputMode="text"
            width="100%"
            style={{ paddingTop: 13, paddingBottom: 10, paddingLeft: 15 }}
          />
        </Wrapper>
        <Wrapper>
          <CustomText fontSize="16px" color="#000" text={"CPF"} />
          <CustomInput
            value={newCpf}
            onChangeText={(value) => setNewCpf(value)}
            placeholder="000.000.000-00"
            keyboardType="numeric"
            inputMode="numeric"
            width="100%"
            style={{ paddingTop: 13, paddingBottom: 10, paddingLeft: 15 }}
          />
        </Wrapper>
      </DetailsContainer>
      <WrapperButton style={{ flex: 2 }}>
        <CustomButton
          onPress={() => editCustomer()}
          text={"Salvar"}
          width="45%"
        />
        <CustomButton
          onPress={() => removeAlert(name, removeCustomer)}
          text={"Excluir"}
          width="45%"
          color="red"
        />
      </WrapperButton>
    </CreateCostumerContainer>
  );
}
