import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type LoginProps = {
  email: string;
  password: string;
};

export type AuthData = {
  login: ({ email, password }: LoginProps) => boolean;
  logout: () => void;
  isLogged: boolean;
};

type AuthProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthData);

export function AuthProvider({ children }: AuthProps) {
  const [isLogged, setIsLogged] = useState(false);

  function login({ email, password }: LoginProps) {
    if (email === "marcelo_marchioro@hotmail.com" && password === "marcelo") {
      setIsLogged(true);
      return true;
    }
    return false;
  }

  function logout() {
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
