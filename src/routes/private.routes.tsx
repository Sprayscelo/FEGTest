import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { ListCustomers } from "@screens/ListCustomers/listCustomers";
import { CreateCustomer } from "@screens/CreateCustomer/createCustomer";

export type PrivateRoute = {
  Clientes: undefined;
  "Criar Cliente": undefined;
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
    </Navigator>
  );
}
