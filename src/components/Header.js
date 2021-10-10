import React from 'react'
import {
    Link
} from "react-router-dom";
import { MoonIcon } from '@heroicons/react/solid'
import { SwitchHorizontalIcon } from '@heroicons/react/solid'

import { UserContext } from '../services/context/UserContext';
import avatarUrlGenerator from './utils/Avatar';

import { ThemeContext } from '../services/context/ThemeContext';

const Header = () => {
    const toogleDark = () => {
        const el = document.getElementsByTagName("html")[0];
        el.classList.toggle("dark");
    }

    return (
        <UserContext.Consumer>
            {({ userState }) => {
                return (
                    <ThemeContext.Consumer>
                        {({ theme, setTheme }) => {
                            return (
                                <header className="sticky top-0 z-10">
                                    <nav className={`flex justify-between h-12 px-5 filter drop-shadow-lg items-center bg-primary_${theme.value}_1 dark:bg-primary_${theme.value}_4 dark:text-white`}>
                                        <div className="flex items-center space-x-4">
                                            <Link to={'/'} className="flex items-center justify-start">
                                                <img className="h-10" width={40} height={40} alt="Morpho Dimension" src="/logo192.png" />
                                                <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Morpho D.</h1>
                                            </Link>

                                            <div className="hidden sm:flex justify-around space-x-4 ">
                                                {[
                                                    { text: 'Principal', to: '/principal' },
                                                    { text: '¿Qué?', to: '/acerca-de' },
                                                    { text: 'Condiciones', to: '/terminos-de-uso' },
                                                    { text: 'Contacto', to: '/contacto' },
                                                ].map((e, i) => <Link key={i} className="hover:text-indigo-600 text-gray-700 dark:text-white" to={e.to}>{e.text}</Link>)}
                                            </div>
                                        </div>
                                        <div className="flex space-x-4 items-center">
                                            <SwitchHorizontalIcon className="h5 w-5 cursor-pointer" onClick={() => {
                                                let newValue;
                                                //const newValue = (theme.value == 'default') ? 'cherryabby' : 'default';
                                                switch (theme.value) {
                                                    case 'default':
                                                        newValue = 'cherryabby'
                                                        break;
                                                    case 'cherryabby':
                                                        newValue = 'milertheme'
                                                        break;
                                                    case 'milertheme':
                                                        newValue = 'milertheme2'
                                                        break;
                                                    case 'milertheme2':
                                                        newValue = 'default'
                                                        break;
                                                    default:
                                                        newValue = 'default'
                                                        break;
                                                }

                                                setTheme({ value: newValue });
                                            }} />

                                            <MoonIcon className="h5 w-5 cursor-pointer" onClick={toogleDark} />

                                            {userState.isLogged ?
                                                <Link to="/profile"><img className="rounded-full border h-10 w-10" src={avatarUrlGenerator(userState.id, 'LITTLE')} alt={userState.name}></img></Link> :
                                                <Link className={`bg-white dark:bg-complementary_${theme.value}_3 py-1 px-3 rounded text-secondary_${theme.value}_4 dark:text-white font-bold text-sm`} to="/login">ENTRA</Link>}


                                        </div>
                                    </nav>
                                </header>
                            )

                        }}

                    </ThemeContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    )
}


export default Header