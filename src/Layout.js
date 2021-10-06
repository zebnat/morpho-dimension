// layout
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';

import {
    useHistory
} from "react-router-dom";

// context
import { defaultUser, UserContext } from './services/context/UserContext';
import React, { useReducer, useEffect } from 'react'
import userReducer from './services/reducers/userReducer';
import LoginApi from './services/api/login';

function Layout({ children }) {
    const [userState, userDispatch] = useReducer(userReducer, defaultUser);
    const history = useHistory();

    // create login api instance
    const loginApi = new LoginApi(function onForbidden() {
        history.push("/login")
    }, function onError() {
        alert('loginApi failed')
    })

    // userState changes -> fire save state

    useEffect(() => {
        if (JSON.stringify(defaultUser) !== JSON.stringify(userState)) {
            userDispatch({ type: 'SAVE_STATE', payload: userState })
        }
        // eslint-disable-next-line
    }, [JSON.stringify(userState), userState])

    const handleStorage = (e) => {
        if (e.key === 'userState') {
            userDispatch({ type: 'SAVE_STATE', payload: JSON.parse(e.newValue) })
        }
    }

    // on mount listen to storage change, then fire save state
    useEffect(() => {
        window.addEventListener('storage', handleStorage);
        const userStateJSONstring = localStorage.getItem('userState')
        if (userStateJSONstring !== null) {
            userDispatch({ type: 'SAVE_STATE', payload: JSON.parse(userStateJSONstring) })
        }

        return function () {
            window.removeEventListener('storage', handleStorage);
        }
    }, [])

    // if isLogged changes invalidates token and full client logout
    useEffect(() => {
        if (!userState.isLogged && userState.token) {
            (async function () {
                await loginApi.logout(userState.token);
                userDispatch({ type: 'RESET_USER' })
            })()
        }
        // eslint-disable-next-line
    }, [userState.isLogged, userState.token])

    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            <div className="animatedbg bg-morpho-pattern">
                <div className="lg:w-3/4 lg:m-auto">
                    <Header />
                    <ScrollToTop>
                        <Main>
                            {children}
                        </Main>
                    </ScrollToTop>
                    <Footer>
                        <span>Versión: {process.env.REACT_APP_VERSION}</span>
                    </Footer>
                </div>
            </div>
            <ScrollToTopButton />
        </UserContext.Provider>
    );
}

export default Layout;
