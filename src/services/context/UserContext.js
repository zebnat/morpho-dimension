import React from 'react'

const defaultUser = { 
    isLogged: false,
    id: null,
    name: "Anonymous",
    exp: 0,
    token: null
}

const UserContext = React.createContext(defaultUser);

export {defaultUser, UserContext}