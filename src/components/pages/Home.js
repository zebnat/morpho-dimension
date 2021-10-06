import React, { useState } from 'react'

import butterfly from '../../resources/vid/butterfly.mp4'
import butterflyOgg from '../../resources/vid/butterfly.ogg'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'

const Home = () => {

    const [introDone, setIntroDone] = useState(false)

    return (
        <>
            <video className="absolute z-0 h-screen bg-black" autoPlay loop src={butterfly}>
                <source src={butterflyOgg} type="video/ogg" />
                <source src={butterfly} type="video/mp4" />
                Tu navegador no carga la intro.
            </video>
            <div className="absolute z-1 flex items-center justify-center h-screen w-screen text-white text-4xl lg:text-7xl p-10 bg-black bg-opacity-50">
                {!introDone && <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Bienvenido')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(4500)
                            .typeString(' a.')
                            .pauseFor(800)
                            .typeString('.')
                            .pauseFor(800)
                            .typeString('.')
                            .pauseFor(2500)
                            .typeString(' Morpho Dimension')
                            .pauseFor(5000)
                            .callFunction(() => {
                                setIntroDone(true)
                            })
                            .start();
                    }}
                />}
                {introDone && <Link to="/principal"><span className="bg-purple-900 text-white rounded text-black p-4 cursor-pointer">Empezar</span></Link>}
            </div>

        </>
    )
}

export default Home