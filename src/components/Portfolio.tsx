import Sample from '../assets/Portfolio/sample.jpg'

const Portfolio = () => {
  const portfolioList = [
    {
      id  : 1,
      src : Sample,
    },
  ]
  let isHaveData
  if (portfolioList.length == 0) {
    isHaveData = false
  }else{
    isHaveData = true
  }
  
  function portfolioData(){
    return <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="pb-8">
      <p className="text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-500">Portfolio</p>
      <p className="py-6">This is my work</p>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
      {
        portfolioList.map(({id, src}) =>(
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg  overflow-hidden">
          <img src={src} alt="Sample" className="rounded-md duration-200 hover:scale-105"/>
          <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              Demo
            </button>
            <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              Code
            </button>
          </div>
        </div>
        ))
      }
    </div>
  </div>
  }
  function errorMessage(){
    return<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="pb-8">
      <p className="text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-500">Portfolio</p>
      <p className="py-6">There is nothing right here for now</p>
    </div>
  </div>
  }
  return (
    <div id="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white">
      
      {isHaveData ? portfolioData() : errorMessage()}
    </div>
  )
}

export default Portfolio