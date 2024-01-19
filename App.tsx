import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { Routes } from "@routes/index";

import { AuthProvider } from "./src/context/auth";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
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
