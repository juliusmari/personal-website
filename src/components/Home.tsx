import { Link } from 'react-scroll';
import { AiOutlineRight } from 'react-icons/ai';
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

const Home = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	return (
		<div
			id='home'
			className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
		>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<p
						className={`text-yellow-300 font-semibold pb-2 max-w-md transition duration-[1000ms] ${
							isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
						}`}
					>
						Hi, my name is
					</p>
					<h1
						className={`text-6xl md:text-8xl font-bold pb-2 text-gray-200 transition duration-[1500ms] ${
							isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
						}`}
					>
						Julius Mari Chan
					</h1>
					<h2
						className={`text-3xl md:text-5xl font-bold pb-2 text-gray-500 transition duration-[2000ms] ${
							isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
						}`}
					>
						There is always one more bug to fix.
					</h2>
					<div ref={ref}>
						<p>{isVisible ? 'Visible' : 'Not visible'}</p>
					</div>
					<p
						className={`text-gray-500 pb-2 max-w-lg transition duration-[2500ms] ${
							isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
						}`}
					>
						I'm an IT student who specializes in creating, optimizing, and maintaining
						software with excellent debugging and problem-solving skills. Currently,
						I'm an intern at{' '}
						<span className='text-yellow-300 inline hover:border-b-2 border-yellow-300'>
							<a target='_blank' href='https://www.hoolisoftware.com/'>
								Hooli Software.
							</a>
						</span>
					</p>
					<Link
						to='portfolio'
						smooth
						duration={1000}
						className={`group text-yellow-300 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent border-2 border-yellow-300 cursor-pointer hover:bg-yellow-300 hover:bg-opacity-10 transition duration-[3000ms] ${
							isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
						}`}
					>
						Portfolio
						<span className='group-hover:rotate-90 duration-1000'>
							<AiOutlineRight size={15} className='ml-1' />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
