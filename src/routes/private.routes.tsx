import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { ListCostumers } from "@screens/ListCostumers/listCostumers";
import { CreateCostumer } from "@screens/CreateCostumer/createCostumer";

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
      <Screen name="Clientes" component={ListCostumers}></Screen>
      <Screen name="Criar Cliente" component={CreateCostumer}></Screen>
    </Navigator>
  );
}
