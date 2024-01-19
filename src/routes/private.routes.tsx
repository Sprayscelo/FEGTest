import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ListCostumers } from "@screens/ListCostumers/listCostumers";
import { CreateCostumer } from "@screens/CreateCostumer/createCostumer";

const { Navigator, Screen } = createNativeStackNavigator();

export type PrivateRoute = {
  ListCostumer: undefined;
  CreateCostumers: undefined;
};

export type PrivateRoutes = NativeStackNavigationProp<PrivateRoute>;

export function PrivateRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ListCostumers" component={ListCostumers}></Screen>
      <Screen name="CreateCostumers" component={CreateCostumer}></Screen>
    </Navigator>
  );
}
