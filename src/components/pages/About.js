import React from 'react'

import { PageH1, PageH2, PageP, SpreadedLinks } from '../utils/PageDomElements'
export default () => {
    return (
        <>
            <PageH1>¡Hola Morpho Dimension!</PageH1>
            <PageP>Este lugar es una especie de mundo paralelo. Te habrás dado cuenta que estás como en una página ligeramente diferente a Macrojuegos.</PageP>
            <PageP>Piensa en ello como si fuese el DLC de un videojuego, una expansión, Addon o Extensión de Macrojuegos 😁.</PageP>
            <PageH2>¿Mundo paralelo? ¿Huh?</PageH2>
            <PageP>El desarrollo de características para la comunidad en Macrojuegos no ha avanzado demasiado desde que los Admin dejaron de trabajar para Panaworld. Morpho Dimension es una iniciativa por parte de uno de los antiguos administradores de la página, el admin Zebnat, que con permiso de la compañía Panaworld podrá programar aquí características que... ¡se conectan con tu cuenta de macrojuegos!</PageP>
            <PageP>Conectando con tu cuenta de Macrojuegos podrá afectar a cualquier cosa que Zebnat desee de tu cuenta, siempre y cuando esté programada. El potencial es muy elevado.</PageP>
            <PageH2>¿Por qué creó esto?</PageH2>
            <PageP>Zebnat quiso desarrollar algunas características para la comunidad de la que formó parte de forma desinteresada. En parte, también para agredecer a las personas que disfrutan viendo sus directos y haciendo cosas en conjunto. Potenciar la experiencia.</PageP>
            <PageP>En este lugar, los usuarios podrán tener acceso a cualquier cosa que Zebnat crea posible programar, siempre y cuando disponga del tiempo para hacerlo (claro está). También podrían llegar a tener algunas cosas que no estén conectadas con Macrojuegos sino con otros Servicios que son propiedad de Zebnat.</PageP>
            <PageP>Zeb también utiliza esto como parte de su aprendizaje. Todo buen programador debe estar siempre "Destornillador en mano" y "Afilando sus herramientas". Dicho de otro modo, desde aquí podrá aprovechar y utilizar tecnologías punteras sin que afecten a Macrojuegos. La velocidad del desarrollo en ese sentido está garantizada.</PageP>
            <PageH2>Compatible con todos los dispositivos</PageH2>
            <PageP>Morpho Dimension está preparada al 100% para ser utilizada desde cualquier dispositivo que disponga de un navegador, ofreciendo un rendimiento bastante interesante.</PageP>
            <PageH2>Servicio Desacoplado</PageH2>
            <PageP>¡Nos ponemos técnicos 🤪! Al ser un servicio completamente desacoplado de Macrojuegos, en caso de desacuerdo con Panaworld podrá desconectarse facilmente de la página.</PageP>
            <PageH2>¿Qué puedes hacer tú?</PageH2>
            <PageP>A Zeb le gusta saber qué se cuece en la comunidad. Lo que está bien, lo que está mal, lo que se puede mejorar. Si quieres ayudar a mejorar este servicio puedes simplemente estar activo en todas las redes por las que Zeb está presente o mejor aún, asistir en directo a sus Streamings de Twitch hablando y jugando con él. Puedes visitar si quieres la página de contacto a continuación.</PageP>
            <SpreadedLinks list={[
                {to: '/contacto', anchor: 'Encuentra a Zeb', router: true}
            ]} />
        </>
    )
}