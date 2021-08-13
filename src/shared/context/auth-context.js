import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  gebruikerId: null,
  gebruiker: undefined,
  token: null,
  login: () => {},
  logout: () => {},
});
