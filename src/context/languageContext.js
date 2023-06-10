import React from "react";

const LanguageContext = React.createContext();

export function useLanguageContext() {
    return React.useContext(LanguageContext)
}

export function LanguageProvider({children}) {
    
    const [language, setLanguage] = React.useState('en-US')

    const value = {
        language,
        setLanguage
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}