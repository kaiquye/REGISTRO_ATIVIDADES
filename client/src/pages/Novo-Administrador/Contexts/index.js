import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {

    const CadastrarAdministrador = function () {

    }

    return (
        <AuthContext.Provider value={{CadastrarAdministrador}}>
            {children}
        </AuthContext.Provider>
    )
} 