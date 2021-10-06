import React, { useEffect, useContext, useRef, useState } from 'react'
import { UserContext } from '../services/context/UserContext'
import { randomString } from './utils/user'
import LoginApi from '../services/api/login'
import { useHistory } from 'react-router-dom'

import mlogo from '../resources/images/mlogo.png'

const LoginForm = () => {
    const router = useHistory()

    const { userState, userDispatch } = useContext(UserContext)
    const userInput = useRef();
    const userPass = useRef();

    const csrf = randomString(80);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [code, setCode] = useState(null);
    const [state, setState] = useState(null);

    const loginApi = new LoginApi(() => {
        router.push('/login')
    }, () => {
        alert('loginApi failed')
    })

    useEffect(() => {
        const url = new URL(window.location.href);
        var hash = url.hash.substr(1);

        var result = hash.split('&').reduce(function (res, item) {
            var parts = item.split('=');
            res[parts[0]] = parts[1];
            return res;
        }, {});

        if (result['code'] && result['state']) {
            setCode(result['code'])
            setState(result['state'])
        }
    }, [])

    useEffect(() => {
        if (userState.isLogged === true) {
            router.push("/principal")
        }
        // eslint-disable-next-line
    }, [userState.isLogged])

    const submitLogin = async () => {
        const username = userInput.current.value;
        const password = userPass.current.value;

        if (code && state) {
            if (username && password) {
                // this will be fired from submit form
                let loginResponse;
                try {
                    setLoading(true)
                    loginResponse = await loginApi.login(username, password, process.env.REACT_APP_CLIENT_ID, code, state)
                    userDispatch({
                        type: 'UPDATE_STATE', payload: {
                            isLogged: true,
                            name: loginResponse.nombre,
                            id: loginResponse.id,
                            exp: parseInt(loginResponse.exp),
                            token: loginResponse.access_token
                        }
                    })
                    setLoading(false)
                } catch (err) {
                    // this will change LOGIN UI
                    switch (err.message) {
                        case '4003':
                            setError('Nombre de usuario inválido')
                            break;
                        case '4004':
                            setError('Contraseña inválida')
                            break;
                        default:
                            setError(err.message)
                    }
                    setLoading(false)
                }
            }
        }
    }

    if (userState.isLogged) return <p>¡Bienvenido {userState.name}!, te llevamos a la página principal.</p>

    return (
        loading ? <p>Loading...</p> :
            code && state ?
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" >
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Usuario
                        </label>
                        <input ref={userInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input ref={userPass} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                        <p className="text-red text-xs italic">Escribe tu contraseña.</p>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={submitLogin} className="bg-purple-900 border-black text-white font-bold py-2 px-4 rounded" type="button">
                            Entrar
                        </button>
                    </div>
                    {error && <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {error}
                    </span>}
                </div > :
                <div className="text-center">
                    <span>Entrar con</span>
                    <img className="inline cursor-pointer	" src={mlogo} alt="Entrar con macrojuegos"
                        onClick={() => {
                            window.location.href = `https://www.macrojuegos.com/apiv3/auth/grant/?client_id=${process.env.REACT_APP_CLIENT_ID}&state=${csrf}`;

                        }} />
                </div>
    )
}


export default LoginForm