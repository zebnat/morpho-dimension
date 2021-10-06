import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Comunidad from './features/Comunidad';
import Juegos from './features/Juegos';
import Cuenta from './features/Cuenta';

import { PageP } from './utils/PageDomElements'

const Features = ({ children }) => (
    <>
        <Router>
            <PageP>Las siguientes características están disponibles</PageP>
            <div className="flex justify-center p-4 mb-4 rounded bg-purple-300 flex-wrap">
                {[
                    { text: 'Comunidad', to: '/principal/comunidad' },
                    { text: 'Juegos', to: '/principal/juegos' },
                    { text: 'Cuenta', to: '/principal/cuenta' },
                ].map((e, i) => <Link key={i} className="hover:text-indigo-600 text-white dark:text-white m-2 p-2 rounded bg-purple-500 " to={e.to}>{e.text}</Link>)}
            </div>
            <Switch>
                <Route exact path="/principal/juegos">
                    <Juegos />
                </Route>
                <Route exact path="/principal/comunidad">
                    <Comunidad />
                </Route>
                <Route exact path="/principal/cuenta">
                    <Cuenta />
                </Route>
            </Switch>
        </Router>
    </>
)

export default Features