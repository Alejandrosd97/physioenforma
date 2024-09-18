import React from 'react'

export default function Fisio() {
  return (
    
    <div className='flex flex-col lg:grid lg:grid-cols-12 w-5/6 m-auto min-h-[100vh] gap-x-10'>
    <div className="col-span-12 lg:col-span-5">
        <div className="w-full h-full">
            <img className="h-full w-full object-cover rounded-2xl" src="../david.jpg" alt="no existe"/>
        </div>
    </div>
    <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
        <div className='border-b-2 mt-8 md:mt-0  border-blue-400 pb-4'>
            <h4 className="text-blue-400 text-2xl ">Fisioterapia Deportiva</h4>
            <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
            <a href={`/tratamiento/1`} class="font-bold mt-3 text-white px-4 py-2 inline-block rounded-md bg-slate-800  hover:bg-slate-900 text-lg">INFO</a>
        </div>
        <div className='border-b-2 mt-8 border-blue-400 pb-4'>
            <h4 className="text-blue-400 text-2xl">Rehabilitación</h4>
            <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
            <a href={`/tratamiento/2`} class="font-bold mt-3 text-white px-4 py-2 inline-block rounded-md bg-slate-800 px-2 py-1 hover:bg-slate-900 text-lg">INFO</a>
        </div>
        <div className='border-b-2 mt-8 border-blue-400 pb-4'>
            <h4 className="text-blue-400 text-2xl">Terapia manual</h4>
            <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
            <a href={`/tratamiento/3`} class="font-bold mt-3 text-white px-4 py-2 inline-block rounded-md bg-slate-800 px-2 py-1 hover:bg-slate-900 text-lg">INFO</a>
        </div>
        <div className='border-b-2 mt-8 border-blue-400 pb-4'>
            <h4 className="text-blue-400 text-2xl">Presoterapia</h4>
            <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
            <a href={`/tratamiento/4`} class="font-bold mt-3 text-white px-4 py-2 inline-block rounded-md bg-slate-800 px-2 py-1 hover:bg-slate-900 text-lg">INFO</a>
        </div>
    </div>    
        </div>
  )
}
