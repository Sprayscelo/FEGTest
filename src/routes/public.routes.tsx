import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Login } from "@screens/Login/login";

const { Navigator, Screen } = createNativeStackNavigator();

export type PublicRoute = {
  Login: undefined;
  // ListCostumers: undefined;
  // CreateCostumer: undefined;
};

export type PublicRoutes = NativeStackNavigationProp<PublicRoute>;

export function PublicRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login}></Screen>
    </Navigator>
  );
}
