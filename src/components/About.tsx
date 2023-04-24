import React, { useRef } from 'react';
import Profile from '../assets/profile.jpg';
import { useOnScreen } from './Home';

const About = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	return (
		<div
			id='about'
			className='lg:h-screen w-full text-white bg-gradient-to-b from-gray-800 via-black to-black'
		>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='mt-5 md:mr-20'>
					<h1
						className={`text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-300 mb-6 transition duration-[1500ms] ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						About
					</h1>
					<div className='mt-10 text-gray-400'>
						<p
							className={`text-xl leading-loose transition duration-[1000ms] ${
								isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
							}`}
						>
							I'm an IT student who specializes in creating, optimizing, and
							maintaining software with excellent debugging and problem-solving skills.
						</p>
						<br />
						<p
							className={`text-xl leading-loose transition duration-[1500ms] ${
								isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
							}`}
						>
							My passion for programming started when I was in high school and I have
							been developing my skills ever since. I enjoy working on challenging
							projects and learning new technologies.
						</p>
					</div>
				</div>
				<div className='mt-10 md:mt-10 mb-10 md:mb-10' ref={ref}>
					<img
						src={Profile}
						alt='My Profile'
						className={`rounded-md border-2 border-yellow-300 mx-auto w-2/3 lg:w-full transition duration-[3000ms] ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					/>
					<div className='text-center mt-6'>
						<h2
							className={`text-2xl font-bold transition duration-[1500ms] ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
							}`}
						>
							Julius Mari
						</h2>
						<p
							className={`text-lg text-gray-400 transition duration-[1500ms] ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
							}`}
						>
							Software Developer
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
