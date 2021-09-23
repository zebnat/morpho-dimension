import React, { useEffect, useState } from 'react'
import { ArrowSmUpIcon } from '@heroicons/react/solid'

export default () => {

    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.scrollY > 150) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return function cleanup(){
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        visible && <div className="fixed bottom-20 right-4 h-10 w-10 bg-gray-700 rounded text-white cursor-pointer flex align-center justify-center" onClick={scrollToTop}><ArrowSmUpIcon className="h-10 w-10"/></div>
    )

}