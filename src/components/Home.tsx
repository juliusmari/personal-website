import { Link } from 'react-scroll';

import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>) {
	const [isIntersecting, setIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)),
		[ref]
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return isIntersecting;
}

const MovingCircle = () => {
	const numberOfCircles = 20; // Number of circles to generate

	const circles = Array.from({ length: numberOfCircles }, (_, index) => {
		const randomTranslateX = Math.random() * 100; // Generate random value between 0 and 100
		const randomTranslateY = Math.random() * 100; // Generate random value between 0 and 100
		const animationDelay = Math.random() * 2; // Generate random animation delay between 0 and 2 seconds

		const animationStyle = {
			animationDelay: `${animationDelay}s`,
		};

		return (
			<div
				key={index}
				className='-z-0 absolute w-24 h-24 rounded-full bg-white border-colorPurple border-2 animate-move-up'
				style={{
					left: `${randomTranslateX}%`,
					top: `${randomTranslateY}%`,
					...animationStyle,
				}}
			></div>
		);
	});

	return <>{circles}</>;
};

const Home = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	return (
		<div ref={ref} id='home' className=' h-fit sm:h-screen w-full z-10'>
			{/* <MovingCircle />
			<style>
				{`
          @keyframes move-up {
            0% {
              transform: translateY(100vh) translateX(${Math.random() * 100}%);
            }
            100% {
              transform: translateY(-50%) translateX(${Math.random() * 100}%);
            }	
          }

          .animate-move-up {
            animation-name: move-up;
            animation-duration: 10s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
			</style> */}
			<div className='max-w-screen-lg mx-auto flex flex-col text-colorBlack items-center h-full px-4 md:flex-row'>
				<div className='flex flex-col py-20 sm:py-0 justify-center items-center w-full h-full'>
					<h1
						className={`text-6xl flex flex-col gap-2 sm:gap-6 sm:flex-row items-center md:text-8xl font-bold pb-2 transition duration-[1500ms] ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 translate-x-5 sm:translate-x-20'
						}`}
					>
						<span>Julius Mari</span>
						<span>Chan</span>
					</h1>
					<h2
						className={`text-2xl md:text-3xl font-light pb-2  transition duration-[500ms] ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 translate-x-5 sm:translate-x-20'
						}`}
					>
						There is always one more bug to fix.
					</h2>
					<Link
						to='portfolio'
						smooth
						duration={1000}
						className={`group mt-10 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent border-2 bg-white border-colorPurple font-extrabold text-colorPurple cursor-pointer hover:text-white hover:bg-colorPurple transition duration-[300ms] ${
							isVisible
								? 'opacity-100 translate-x-0 '
								: 'opacity-0  translate-y-5 sm:translate-y-20'
						}`}
					>
						Portfolio
						{/* <span className='group-hover:rotate-90 duration-500'>
							<AiOutlineRight size={15} className='ml-1' />
						</span> */}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
