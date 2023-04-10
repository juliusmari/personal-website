import React from 'react';
import Profile from '../assets/profile.jpg';

const About = () => {
  return (
    <div id="about" className="lg:h-screen w-full text-white bg-gradient-to-b from-gray-800 via-black to-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mt-5 md:mr-20">
          <h1 className="text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-300 mb-6">About</h1>
          <div className="mt-10 text-gray-400">
            <p className="text-xl leading-loose">
              I'm an IT student who specializes in creating, optimizing, and maintaining software with excellent debugging and problem-solving skills.
            </p>
            <br />
            <p className="text-xl leading-loose ">
              My passion for programming started when I was in high school and I have been developing my skills ever since. I enjoy working on challenging projects and learning new technologies.
            </p>
          </div>
        </div>
        <div className='mt-10 md:mt-10 mb-10 md:mb-10'>
          <img
            src={Profile}
            alt="My Profile"
            className="rounded-md border-2 border-yellow-300 mx-auto w-2/3 lg:w-full"
          />
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold">Julius Mari</h2>
            <p className="text-lg text-gray-400">Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;