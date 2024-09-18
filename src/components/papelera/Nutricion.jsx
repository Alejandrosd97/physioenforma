import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Fisio from './Fisio'
import Nutri from './Nutri'

export default function Nutricion() {

    const [slide, setSlide] = useState(true)

    const toggleButton = useRef()
    const fisioButton = useRef()
    const nutriButton = useRef()

    var referencia
    var fisio
    var nutri

    useEffect(() => {
        referencia = toggleButton.current
        fisio = fisioButton.current
        nutri = nutriButton.current
    }, [slide]);

    function leftBtn(e) {
        referencia.style.left = '0'
        fisio.style.transition = '0.5s'
        nutri.style.transition = '0.5s'
        setSlide(true)

    }

    function rightBtn(e) {
        referencia.style.left = '50%'
        fisio.style.transition = '0.5s'
        nutri.style.transition = '0.5s'
        setSlide(false)

    }


    
   

  return (
    <section className="bg-white py-[100px]">
        <h2 className='text-4xl text-slate-900 w-5/6 m-auto mb-[60px]'>NUESTROS SERVICIOS</h2>
        <div className='w-5/6 m-auto z-30 flex justify-between mb-[40px] relative'>
            <div onClick={()=> leftBtn(true)} ref={fisioButton} className='text-center w-1/2 cursor-pointer'>
                <span className='text-slate-900 text-2xl' >Fisioterapia</span>
            </div>
            <div onClick={()=> rightBtn(false)} ref={nutriButton} className='text-center w-1/2 cursor-pointer text-2xl'>
                <span className='text-slate-900'>Nutrición</span>
            </div>
            <span ref={toggleButton} className={`absolute transition-[left] duration-500 w-1/2 left-0 bottom-[-10px] h-[2px] bg-blue-400`}></span>
        </div>



        {/* <Fisio slide={slide} handleSlide={handleSlide}/>  */}
    {
        slide == true ? <Fisio slide={slide}/> : <Nutri slide={slide}/>
    }  

    </section>
    
)
}
