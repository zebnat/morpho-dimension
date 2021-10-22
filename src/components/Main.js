import React from 'react'
import {
    Link
} from "react-router-dom";

import { ThemeContext } from '../services/context/ThemeContext';

const Main = ({ children }) => (
    <ThemeContext.Consumer>
        {({ theme }) =>
            <main className={`min-h-screen items-center md:items-start z-0 px-6 py-6 lg:py-10 bg-gray-200 dark:bg-primary_${theme.value}_2 dark:text-white h-auto flex justify-center`}>
                <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
                    <div className={`sm:hidden flex justify-center p-4 mb-4 rounded bg-secondary_${theme.value}_2 dark:bg-secondary_${theme.value}_1 flex-wrap`}>
                        {[
                            { text: 'Principal', to: '/principal' },
                            { text: '¿Qué?', to: '/acerca-de' },
                            { text: 'Condiciones', to: '/terminos-de-uso' },
                            { text: 'Contacto', to: '/contacto' },
                        ].map((e, i) => <Link key={i} className={`hover:text-indigo-600 m-2 p-2 rounded bg-secondary_${theme.value}_1 dark:bg-secondary_${theme.value}_3 text-black dark:text-white font-black filter drop-shadow-md`} to={e.to}>{e.text}</Link>)}
                    </div>

                    {children}
                </div>
            </main>
        }
    </ThemeContext.Consumer>
)

export default Main