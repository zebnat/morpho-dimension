import React, { useEffect, useState, useContext } from 'react'

import { PageH1, PageH2, PageP, SpreadedLinks } from '../utils/PageDomElements'
import { UserContext } from '../../services/context/UserContext'
import { ThemeContext } from '../../services/context/ThemeContext'
import { useHistory } from 'react-router'
import { KeyIcon } from '@heroicons/react/solid'
import MorphoKeyRequired from '../modals/MorphoKeyRequired'
import Features from '../Features'

const MainPage = () => {
    const { theme } = useContext(ThemeContext)

    const [morphoKey, setMorphoKey] = useState(null)
    const history = useHistory();

    const { userState } = useContext(UserContext)

    useEffect(() => {
        setTimeout(() => {
            setMorphoKey(true)
        }, 3000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (!userState.isLogged) history.push("/login")
        }, 2000)
    }, [userState.isLogged, history])

    if (!userState.isLogged) return <p>Espera ...</p>

    return (
        <>
            <PageH1>Características Especiales</PageH1>
            <PageP>Aquí encontrarás características de la aplicación, pero necesitas la llave morpho.</PageP>
            {morphoKey === null && <div className="bg-black text-white p-4">
                <KeyIcon className="h-5 w-5 inline-block" /><span>Comprobando acceso morpho...</span>
            </div>}
            {morphoKey === false && <>
                <MorphoKeyRequired />
                <PageP>Lo siento, no tienes acceso. Puedes comprar la llave de morpho en el canal de Twitch de zebnat</PageP>
            </>}
            {morphoKey === true && <Features />}
            <PageH2>¿Algo que decir?</PageH2>
            <SpreadedLinks list={[
                { to: '/contacto', anchor: 'Contacta', router: true }
            ]} theme={theme.value}/>
        </>
    )
}

export default MainPage