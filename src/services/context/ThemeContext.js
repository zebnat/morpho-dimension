import React from 'react'

const defaultTheme = { 
    value: 'default'
}

const ThemeContext = React.createContext(defaultTheme);

export {defaultTheme, ThemeContext}