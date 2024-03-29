import React, { useRef } from 'react';
import Profile from '../assets/profile.jpg';
import { useOnScreen } from './Home';

const About = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);
	const sef = useRef<HTMLDivElement>(null);
	const isVisible2 = useOnScreen(sef);

	return (
		<div id='about' className='lg:h-screen w-full flex items-center'>
			<div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 '>
				<div className='mt-5 md:mr-20 bg-colorPurple p-10 rounded-xl z-10 text-white'>
					<h1
						className={`text-4xl font-bold inline border-b-4 border-white mb-6 transition duration-[1500ms] ${
							isVisible2 ? 'opacity-100 ' : 'opacity-0 translate-x-5 sm:translate-x-20'
						}`}
					>
						About
					</h1>
					<div className='mt-10'>
						<p
							ref={sef}
							className={`text-xl leading-loose transition duration-[1000ms] ${
								isVisible2
									? 'opacity-100 translate-x-0'
									: 'opacity-0 translate-x-5 sm:translate-x-20'
							}`}
						>
							I'm an recent IT graduate who specializes in creating, optimizing, and
							maintaining software with excellent debugging and problem-solving skills.
						</p>
						<br />
						<p
							className={`text-xl leading-loose transition duration-[1500ms] ${
								isVisible2
									? 'opacity-100 translate-x-0'
									: 'opacity-0 translate-x-5 sm:translate-x-20'
							}`}
						>
							My passion for programming started when I was in high school and I have
							been developing my skills ever since. I enjoy working on challenging
							projects and learning new technologies.
						</p>
					</div>
				</div>
				<div className='mt-10 md:mt-10 mb-10 md:mb-10 z-10' ref={ref}>
					<img
						src={Profile}
						alt='My Profile'
						className={`rounded-md border-2 shadow-2xl border-colorPurple mx-auto w-2/3 lg:w-full transition duration-[3000ms] ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					/>
					<div className='text-center mt-6'>
						<h2
							className={`text-2xl font-bold transition duration-[1500ms] ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-5 sm:translate-y-20'
							}`}
						>
							Julius Mari
						</h2>
						<p
							className={`text-lg text-gray-400 transition duration-[1500ms] ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-5 sm:translate-y-20'
							}`}
						>
							Web Developer
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
