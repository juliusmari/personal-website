import React from 'react'
import imgGoLang from '../assets/Experience/go.png'
import imgTypeScript from '../assets/Experience/typescript.png'
import imgPython from '../assets/Experience/python.png'
import imgJavaScript from '../assets/Experience/javascript.png'
import imgJava from '../assets/Experience/java.png'
import imgPHP from '../assets/Experience/php.png'
import imgCSharp from '../assets/Experience/csharp.png'
import imgCPluslus from '../assets/Experience/cplusplus.png'
import imgHTML from '../assets/Experience/html.jpg'
import imgCSS from '../assets/Experience/css.png'
import imgBootStrap from '../assets/Experience/bootstrap.png'
import imgTailwind from '../assets/Experience/tailwind.png'
import imgSASS from '../assets/Experience/sass.png'
import imgGRPC from '../assets/Experience/grpc.png'
import imgMySQL from '../assets/Experience/mysql.png'
import imgPostgreSQL from '../assets/Experience/postgresql.png'
import imgOracle from '../assets/Experience/oracle.png'


const Experience = () => {
const techLinks = [
    {
        id:1,
        src:imgGoLang,
        title:'Go Lang',
        style:'shadow-md shadow-golang' 
    },
    {
        id:2,
        src:imgTypeScript,
        title:'TypeScript',
        style:'shadow-typescript',
    },
    {
        id:3,
        src:imgPython,
        title:'Python',
        style:'shadow-python',
    },
    {
        id:4,
        src:imgJavaScript,
        title:'JavaScript',
        style:'shadow-javascript',
    },
    {
        id:5,
        src:imgJava,
        title:'Java',
        style:'shadow-java',
    },
    {
        id:6,
        src:imgPHP,
        title:'PHP',
        style:'shadow-php',
    },
    {
        id:7,
        src:imgCSharp,
        title:'C#',
        style:'shadow-csharp',
    },
    {
        id:8,
        src:imgCPluslus,
        title:'C++',
        style:'shadow-cplusplus',
    },
    {
        id:9,
        src:imgHTML,
        title:'HTML',
        style:'shadow-html',
    },
    {
        id:10,
        src:imgCSS,
        title:'CSS',
        style:'shadow-css',
    },
    {
        id:11,
        src:imgBootStrap,
        title:'BootStrap',
        style:'shadow-bootstrap',
    },
    {
        id:12,
        src:imgTailwind,
        title:'Tailwind',
        style:'shadow-tailwind',
    },
    {
        id:13,
        src:imgSASS,
        title:'SASS',
        style:'shadow-sass',
    },
    {
        id:14,
        src:imgGRPC,
        title:'gRPC',
        style:'shadow-grpc',
    },
    {
        id:15,
        src:imgMySQL,
        title:'MySQL',
        style:'shadow-mysql',
    },

    {
        id:16,
        src:imgPostgreSQL,
        title:'PostgreSQL',
        style:'shadow-postgresql',
    },

    {
        id:17,
        src:imgOracle,
        title:'Oracle',
        style:'shadow-oracle',
    },


]
return (
    <div id="experience" className="bg-gradient-to-b from-gray-800 to-black  min:h-screen w-full">
        <div className="max-w-screen-lg mx-auto p-4 b flex flex-col justify-center w-full h-full text-white">
            <div>
            <p className="text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-500">Experience</p>
                <p className="py-6">These are the technologies I've worked with.</p>
            </div>
            <div className="w-full text- grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    techLinks.map(({id, src, title, style}) => (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style}>
                        <img src={src} alt="Loading Image" className="w-20 mx-auto"/>
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