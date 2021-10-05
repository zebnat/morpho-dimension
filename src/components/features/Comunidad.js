import React from 'react'
import Trolled from './shared/Trolled'

import { PageH1, PageP } from '../utils/PageDomElements'

const Comunidad = () => {
    return (
        <>
            <PageH1>Características de Comunidad</PageH1>
            <PageP>Aquí encontrarás características especiales relacionadas con la comunidad de usuarios</PageP>
            <Trolled />
        </>
    )
}

export default Comunidad