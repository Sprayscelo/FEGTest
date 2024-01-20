import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Login } from "@screens/Login/login";

export type PublicRoute = {
  Login: undefined;
};
export type StackNavigatorRoutesProps = NativeStackNavigationProp<PublicRoute>;

const { Navigator, Screen } = createNativeStackNavigator<PublicRoute>();

export function PublicRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login}></Screen>
    </Navigator>
  );
}
