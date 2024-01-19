import { useContext } from "react";
import { AuthContext, AuthData } from "../context/auth";

export function useAuth(): AuthData {
  const context = useContext(AuthContext);
  return context;
}
