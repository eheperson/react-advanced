
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [lightTheme, setLightTheme] = useState({text: '#222', background: '#d8ddf1'})
    const [darkTheme, setDarkTheme] = useState({text: "#fff",background: "#5c5c5c"})

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const states = {isDarkTheme, lightTheme, darkTheme}

    return(
        <ThemeContext.Provider value={{ ...states, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;