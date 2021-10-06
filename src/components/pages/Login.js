import React from 'react'

import { PageH1 } from '../utils/PageDomElements'

import LoginForm from '../LoginForm'

const Login = () => {
    return (
        <>
            <PageH1>Entra con tu cuenta</PageH1>
            <LoginForm />
        </>
    )
}

export default Login