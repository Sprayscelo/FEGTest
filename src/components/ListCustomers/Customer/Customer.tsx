import { CustomText } from "@components/CustomText/CustomText";

import Group from "@assets/Group.svg";
import Circle from "@assets/Circle.svg";

import { MaterialIcons } from "@expo/vector-icons";

import {
  CustomerContainer,
  EditButton,
  UserImageWrapper,
  Wrapper,
} from "./style";
import theme from "@theme/theme";

import { useNavigation } from "@react-navigation/native";
import { StackNavigatorRoutesProps } from "@routes/private.routes";
import { StyleSheet } from "react-native";
import { CustomerService } from "@service/LocalDatabaseService";
import { removeAlert } from "@utils/removeAlert";

export type CustomerProps = {
  id: number;
  name: string;
  cpf: string;
};

export function Customer({ id, name, cpf }: CustomerProps) {
  const navigation = useNavigation<StackNavigatorRoutesProps>();

  const removeCustomer = async () => {
    const deleteCustomer = await CustomerService.delete(id);
  };

  return (
    <CustomerContainer
      onPress={() => navigation.navigate("Editar Cliente", { id, name, cpf })}
    >
      <UserImageWrapper>
        <Circle style={{ position: "absolute" }} />
        <Group />
      </UserImageWrapper>
      <Wrapper>
        <CustomText fontSize="14px" text={name} />
        <CustomText
          style={{ lineHeight: 16, opacity: 0.5 }}
          fontSize="12px"
          text={cpf}
        />
      </Wrapper>
      <EditButton>
        <MaterialIcons
          style={styles.icon}
          name="delete"
          size={20}
          color="red"
          onPress={() => removeAlert(name, removeCustomer)}
        />
      </EditButton>
    </CustomerContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
});
