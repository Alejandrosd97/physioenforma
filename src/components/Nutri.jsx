import React from 'react'

export default function Nutri() {
  return (
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 w-5/6 m-auto min-h-[100vh] gap-x-10'>
        <div className="lg:col-span-7 flex flex-col justify-between">
            <div className='border-b-2 mt-8 md:mt-0 border-blue-400 pb-4'>
                <h4 className="text-slate-600 text-2xl ">Nutrición Deportiva</h4>
                <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
                <a href={`/tratamiento/1`} class=" mt-3 inline-block rounded-md bg-blue-400 px-2 py-1 hover:bg-blue-500 text-lg">INFO</a>
            </div>
            <div className='border-b-2 mt-8 border-blue-400 pb-4'>
                <h4 className="text-slate-600 text-2xl">Pérdida de peso</h4>
                <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
                <a href={`/tratamiento/1`} class=" mt-3 inline-block rounded-md bg-blue-400 px-2 py-1 hover:bg-blue-500 text-lg">INFO</a>
            </div>
            <div className='border-b-2 mt-8 border-blue-400 pb-4'>
                <h4 className="text-slate-600 text-2xl">Intolerancias</h4>
                <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
                <a href={`/tratamiento/1`} class=" mt-3 inline-block rounded-md bg-blue-400 px-2 py-1 hover:bg-blue-500 text-lg">INFO</a>
            </div>
            <div className='border-b-2 mt-8 border-blue-400 pb-4'>
                <h4 className="text-slate-600 text-2xl">Dietas veganas</h4>
                <p className='text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit exercitationem soluta molestias impedit sequi fuga pariatur blanditiis illo illum.</p>
                <a href={`/tratamiento/1`} class=" mt-3 inline-block rounded-md bg-blue-400 px-2 py-1 hover:bg-blue-500 text-lg">INFO</a>
            </div>
        </div>  
        <div className="lg:col-span-5 col-span-12">
        <div className="w-full h-full">
            <img className="w-full h-full object-cover rounded-2xl" src="../nutricionista.jpg" alt="no existe"/>
        </div>
    </div>  
    </div>
  )
}
