import React from 'react'
import { PageH1, PageH2, PageP, SpreadedLinks } from '../utils/PageDomElements'

export default () => {
    return (
        <>
            <PageH1>Condiciones del servicio</PageH1>
            <PageP>Esperamos que leas con atención estas condiciones del servicio.</PageP>
            <PageP>Este servicio es 100% gratuíto, tanto es así que ni siquiera tendrá publicidad. Por ello, no se deben tener exigencias en cuanto a su evolución. El servicio está siendo desarrollado rápidamente asi que puedes encontrar algún error.</PageP>
            <PageH2>Algo no funciona</PageH2>
            <PageP>Si algo no funciona bien, ponte en contacto con el Administrador de Morpho Dimension.</PageP>
            <SpreadedLinks list={[
                {to: '/contacto', anchor: 'Contactar', router: true}
            ]} />
            <PageH2>Acceso restringido</PageH2>
            <PageP>El admin puede decidir restringirte el acceso al servicio en cualquier momento. Sea por un uso indebido de las herramientas o por no respetar algunas de las normas de otros servicios. Por ejemplo, imagina que hubiese un nuevo sistema de comentarios, si incumplieses alguna norma ya no solo estarías faltando a las normas de macrojuegos, también a las de Morpho Dimension. ¡Podrías perder el acceso!</PageP>
            <PageP>Zeb también puede restringir acceso a cualquier lugar, bien sea por que está en fase de pruebas o por cualquier otro tipo de cuestión. No es motivo de queja ni demanda.</PageP>
            <PageH2>El servicio no avanza</PageH2>
            <PageP>El servicio puede estar parado mucho tiempo en caso que el desarrollador principal no pueda o no esté en disposición de programar y avanzarlo. No tienes ningún derecho a exigir nada al respecto. Siempre puedes dejar de utilizarlo si es que esto llega a ocurrir por demasiado tiempo. Recuerda que Zeb es humano y tiene otros empleos aparte.</PageP>
            <PageH2>Demanda de características fuera de Morpho</PageH2>
            <PageP>Seguramente pensarás que estaría mejor que muchas de estas cosas estuviesen mejor integradas en la página, pero lo lamento. Esto solo sería posible si la compañía decidiese invertir en ello, asi que no sirve de nada demandar ese tipo de características. Intenta estudiar qué podríamos tener aquí que nos sea de utilidad.</PageP>
        </>
    )
}