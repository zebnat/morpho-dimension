import React from 'react'

import { PageH1, PageH2, PageH3, SpreadedLinks, PageP } from '../utils/PageDomElements';

export default () => {
    const socialNetworks = [
        {
            to: 'https://www.twitch.tv/zebnat',
            anchor: 'Twitch Stream',
            router: false
        },
        {
            to: 'https://www.twitter.com/zebnat',
            anchor: 'Twitter',
            router: false
        },
        {
            to: 'https://www.instagram.com/natz8585',
            anchor: 'Instagram',
            router: false
        },
        {
            to: 'https://danieldev.es',
            anchor: 'Danieldev.es',
            router: false
        },
        {
            to: '', 
            anchor: 'Discord: Zeb#9503',
            router: false
        },
        {
            to: 'https://www.macrojuegos.com/perfil/zebnat/',
            anchor: 'Macrojuegos',
            router: false
        }
    ];

    return (
        <>
            <PageH1>Contactar</PageH1>
            <PageH2>Desarrollador principal</PageH2>
            <PageP>Zebnat es la persona que mantiene el proyecto Morpho Dimension, pero a lo mejor en el futuro hay más. Si tienes algún problema o alguna duda severa relacionada con este producto puedes contactar a través de sus redes sociales con él. La respuesta no está garantizada.</PageP>
            <PageH3>Sus redes sociales:</PageH3>
            <SpreadedLinks list={socialNetworks} />
            <PageH2>¿Programador? ¿Interesado en el proyecto?</PageH2>
            <p className="py-2">Si quieres puedes echar una ojeada al proyecto en github.com y contactar también por esa vía.</p>
            <SpreadedLinks list={[
                {to: 'https://github.com/zebnat/morpho-dimension', anchor: 'Proyecto Github', router: false}
            ]} />
        </>
    )
}