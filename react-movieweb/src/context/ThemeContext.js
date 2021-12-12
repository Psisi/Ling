import React from "react";

const ThemeContext = React.createContext ({
    theme: 'light',
    updateTheme: (theme) => {
        this.theme = theme;
    }
});
const ThemeContextProvider = ThemeContext.Provider;
export {
    ThemeContext,
    ThemeContextProvider
};