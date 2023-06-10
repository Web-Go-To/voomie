import React from "react";
import { darkTheme  } from "./themes";

const ThemeContext = React.createContext();

export function useThemeContext() {
    return React.useContext(ThemeContext)
}

export function ThemeProvider({children}) {
    const [themeSetting, setThemeSetting] = React.useState(darkTheme)

    const value = {
        themeSetting,
        setThemeSetting
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}