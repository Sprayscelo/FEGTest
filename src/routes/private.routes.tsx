import React from "react";

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { ListCustomers } from "@screens/ListCustomers/ListCustomers";
import { CreateCustomer } from "@screens/CreateCustomer/CreateCustomer";
import { EditCustomer } from "@screens/EditCustomer/EditCustomer";

import { type CustomerProps } from "@components/ListCustomers/Customer/Customer";

export type PrivateRoute = {
  Clientes: undefined;
  "Criar Cliente": undefined;
  "Editar Cliente": CustomerProps;
};

export type StackNavigatorRoutesProps = NativeStackNavigationProp<PrivateRoute>;

const { Navigator, Screen } = createNativeStackNavigator<PrivateRoute>();

export function PrivateRoute() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Clientes"
    >
      <Screen name="Clientes" component={ListCustomers}></Screen>
      <Screen name="Criar Cliente" component={CreateCustomer}></Screen>
      <Screen name="Editar Cliente" component={EditCustomer}></Screen>
    </Navigator>
  );
}
