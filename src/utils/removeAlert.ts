import { Alert } from "react-native";

export function removeAlert(
  name: string,
  onAccept: () => void,
  onDecline?: () => void
) {
  Alert.alert(
    "Tem certeza?",
    `Você tem certeza que deseja deletar o usuário:\n\n${name.toUpperCase()}`,
    [
      {
        text: "Sim",
        onPress: async () => onAccept(),
      },
      {
        text: "Não",
        onPress: () => (onDecline ? onDecline() : null),
      },
    ],
    { cancelable: true }
  );
}
