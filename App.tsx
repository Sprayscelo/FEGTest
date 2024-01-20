import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import theme from "@theme/theme";

import { Loading } from "@components/Loading/loading";

import { Routes } from "@routes/index";

import { AuthProvider } from "./src/context/auth";

import { useFonts } from "expo-font";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    PressStart2P_400Regular,
  });

  return !fontsLoaded ? (
    <Loading color={theme.colors.primary} size={60} />
  ) : (
    <NavigationContainer>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
