import React from 'react'
import { Transition } from '@headlessui/react'

const Trolled = () => {
    return (
        <div className="flex flex-col items-center justify-center py-60 bg-black text-white">
            <p>No hay nada aquí aún hahaha</p>
            <Transition
                appear={true}
                show={true}
                enter="transition-transform duration-500"
                enterFrom="transform -rotate-180"
                enterTo="transform rotate-180"
                leave="transition-transform duration-1000"
                leaveFrom="transform rotate-180"
                leaveTo="transform rotate-0"
            >
                <img className="filter invert" src="https://av.macrojuegos.com/users/0/1/normal.jpg?r=33178" alt="haha" />
            </Transition>

        </div>

    )
}

export default Trolled