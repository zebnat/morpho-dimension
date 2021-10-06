import React from 'react'

import { PageH1, PageH2, PageP, SpreadedLinks } from '../utils/PageDomElements'
import { UserContext } from '../../services/context/UserContext'
import { Redirect } from 'react-router'
import { expToLevel } from '../utils/user'

const Profile = () => {
    return (
        <UserContext.Consumer>
            {({ userState, userDispatch }) => {
                const level = expToLevel(userState.exp)
                const legacyProfile = `https://www.macrojuegos.com/perfil/${userState.name}`
                return (
                    <>
                        {!userState.isLogged && <Redirect to="/login" />}
                        <PageH1>Morpho Perfil</PageH1>
                        <PageP>Información sobre tu cuenta a lo cutre. Recuerda que esto está en desarrollo.</PageP>
                        <span onClick={()=>{
                            userDispatch({ type: 'PERFORM_LOGOUT' })
                        }} className="m-2 p-1 rounded bg-purple-500 text-white pointer">LOGOUT</span>
                        <PageP>Nombre: <a href={legacyProfile} rel="noopener noreferer">{userState.name}</a></PageP>
                        <PageP>Nivel: {level.level}</PageP>
                        <PageP>TotalExp: {userState.exp}</PageP>
                        <PageH2>¿Algo que decir?</PageH2>
                        <SpreadedLinks list={[
                            { to: '/contacto', anchor: 'Contacta', router: true }
                        ]} />
                    </>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Profile