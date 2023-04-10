import React from 'react'
import HTML from '../assets/Experience/html.jpg'
import NextJS from '../assets/Experience/nextjs.png'
import Redux from '../assets/Experience/redux.png'
import Typescript from '../assets/Experience/typescript.png'
import Vite from '../assets/Experience/vite.png'
import Tailwind from '../assets/Experience/tailwind.png'
const Experience = () => {
const techLinks = [
    {
        id:1,
        src:HTML,
        title:'HTML',
        style:'shadow-md shadow-orange-500' 
    },
    {
        id:2,
        src:Tailwind,
        title:'Tailwind',
        style:'shadow-blue-500',
    },
    {
        id:3,
        src:NextJS,
        title:'NextJS',
        style:'shadow-white',
    },
    {
        id:4,
        src:Redux,
        title:'Redux',
        style:'shadow-violet-500',
    },
    {
        id:5,
        src:Vite,
        title:'Vite',
        style:'shadow-amber-400',
    },
    {
        id:6,
        src:Typescript,
        title:'Typescript',
        style:'shadow-blue-400',
    },

]
return (
    <div id="experience" className="bg-gradient-to-b from-gray-800 to-black min:h-screen w-full">
        <div className="max-w-screen-lg mx-auto p-4 b flex flex-col justify-center w-full h-screen text-white">
            <div className="mt-10">
            <p className="text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-500">Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div className="w-full text- grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    techLinks.map(({id, src, title, style}) => (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style}>
                        <img src={src} alt="" className="w-20 mx-auto"/>
                        <p className="mt-4 pb-1">{title}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience