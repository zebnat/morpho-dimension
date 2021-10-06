import React from 'react'
import {
    Link
} from "react-router-dom";
const Main = ({ children }) => (
    <main className="min-h-screen items-center z-0 px-6 py-10 lg:py-20 bg-white dark:bg-purple-400 h-auto flex justify-center">
        <div className="w-full md:w-1/2 lg:w-3/4">
            <div className="sm:hidden flex justify-center p-4 mb-4 rounded bg-purple-300 flex-wrap">
                {[
                    { text: 'Principal', to: '/principal' },
                    { text: '¿Qué?', to: '/acerca-de' },
                    { text: 'Condiciones', to: '/terminos-de-uso' },
                    { text: 'Contacto', to: '/contacto' },
                ].map((e, i) => <Link key={i} className="hover:text-indigo-600 text-white dark:text-white m-2 p-2 rounded bg-purple-500 " to={e.to}>{e.text}</Link>)}
            </div>

            {children}
        </div>
    </main>
)

export default Main