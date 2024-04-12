import React from 'react'
import { useState } from 'react'

export default function Navbar() {

    const [nav, setNav] = useState(false)

  return (
    <nav style={{justifyContent: 'space-between', backgroundColor: '#0c0c1d'}} className="flex py-6 items-center relative px-16 rounded-2xl">
	<span className="text-2xl text-white ">PHYSIOENFORMA</span>
	<ul style={{backgroundColor : '#0c0c1d'}} className={`${nav ? ' transition-opacity opacity-100' : ' transition-opacity duration-700 opacity-0 hidden'} duration-700 fixed z-10 top-0 w-full h-screen left-0 items-center text-2xl justify-center gap-12 flex flex-col md:flex-row md:static md:h-full md:w-auto md:bg-transparent md:text-lg md:gap-4 md:flex md:opacity-100`}>
		<li className="text-white hover:cursor-pointer hover:text-blue-400 transition duration-300"><a href="/">HOME</a></li>
		<li className="text-white hover:cursor-pointer hover:text-blue-400 transition duration-300"><a href="/nosotros">NOSOTROS</a> </li>
		<li className="text-white hover:cursor-pointer hover:text-blue-400 transition duration-300"><a href="#contacto">SERVICIOS</a></li>
		<li className="text-white hover:cursor-pointer hover:text-blue-400 transition duration-300"><a href="#contacto">CONTACTO</a></li>
	</ul>
    {
        
    }
    <div className='w-[30px] z-20 h-[30px] md:hidden hover:cursor-pointer'>
      <img onClick={()=>{setNav(!nav)}} 
          className='h-full w-full' 
          src={ nav ? "../closeMenu.svg" : "../openMenu.svg"} alt="no se ve" />
    </div>
</nav>
  )
}
