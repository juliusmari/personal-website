import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="w-full min:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/5f4689d2-785e-4974-88b6-544485fa40a4" method="POST" className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-gray-200 font-medium mb-2">Name</label>
              <input type="text" name='name' id="name" placeholder="Enter your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500"/>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-200 font-medium mb-2">Email</label>
              <input type="text" name='email' id="email" placeholder="Enter your Email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500"/>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-gray-200 font-medium mb-2">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows={8} className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500"></textarea>
            </div>
            <button className="mt-8 mx-auto text-yellow-300 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent border-2 border-yellow-300 cursor-pointer hover:bg-yellow-300 hover:bg-opacity-10">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact