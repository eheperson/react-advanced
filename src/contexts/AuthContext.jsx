import React from "react";
import { useState, createContext} from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeAuthStatus = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const states = {isLoggedIn}

    return(
        <AuthContext.Provider value={{...states, changeAuthStatus:changeAuthStatus}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;