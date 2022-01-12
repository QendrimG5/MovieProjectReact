import { createContext, useContext } from "react";

const AuthContext = createContext({});

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
