import React from 'react'

export default ({ children }) => {
    return (
        <footer className="h-16 px-10 flex items-center justify-center space-x-4 bg-gray-50 dark:bg-purple-900 dark:text-white">
            {children}
        </footer>
    )
}