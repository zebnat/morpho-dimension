import React from 'react'

import { ThemeContext } from '../services/context/ThemeContext'

const Footer = ({ children }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) =>
                <footer className={`h-12 px-10 flex items-center justify-center space-x-4 bg-primary_${theme.value}_1 dark:bg-primary_${theme.value}_4 dark:text-white`}>
                    {children}
                </footer>
            }
        </ThemeContext.Consumer>
    )
}

export default Footer