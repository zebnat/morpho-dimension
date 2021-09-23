import React from 'react'

import { PageH1, PageH2, PageH3, SpreadedLinks, PageP } from '../utils/PageDomElements';
import butterfly from '../../resources/vid/butterfly.mp4'

export default () => {
    return (
        <>
            <div className="flex flex-col align-center justify-center align-center">
                <video className="block" autoPlay loop>
                    <source src={butterfly} type="video/mp4" />
                    Tu navegador no carga la intro.
                </video>
                <PageH1 className="text-center">¡Bienvenid@!</PageH1>
            </div>
            
            
        </>
    )
}