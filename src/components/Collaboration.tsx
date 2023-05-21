import { useRef } from 'react';
import Sample from '../assets/Portfolio/snap.svg';
import { useOnScreen } from './Home';

const Collaboration = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);
	const portfolioList = [
		{
			id: 1,
			src: Sample,
		},
	];
	let isHaveData;
	if (portfolioList.length == 0) {
		isHaveData = false;
	} else {
		isHaveData = true;
	}

	function portfolioData() {
		return (
			<div
				ref={ref}
				className='max-w-screen-lg p-4 mx-auto flex flex-col text-colorBlackjustify-center w-full h-fit md:h-full'
			>
				<div className='flex flex-col pb-8 items-center w-full'>
					<h1
						className={`text-4xl font-bold inline mb-6 mt-20 transition duration-[1500ms] ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						Collaboration
					</h1>
					<p
						className={`pb-6 transition font-medium text-xl duration-[2000ms] ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						{/* Here are a few past projects I've worked on. Want to see more? */}
						I'm proud to have collaborated with some awesome projects:
					</p>
				</div>
				<div
					className={`grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0 transition duration-[2500ms] ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-5 sm:translate-y-20'
					}`}
				>
					{portfolioList.map(({ id, src }) => (
						<div
							key={id}
							className='shadow-md shadow-gray-600 rounded-lg  overflow-hidden flex flex-col items-center'
						>
							<img
								src={src}
								alt='Sample'
								className='rounded-md duration-200 p-14 hover:scale-105'
							/>
							<div className='flex items-center justify-center'>
								<a href='https://www.snaptoapp.com/' target='_blank' rel='noreferrer'>
									<button className='px-5 py-2 m-4 duration-200 border-2 font-semibold text-colorPurple border-colorPurple hover:text-white hover:bg-colorPurple rounded-xl'>
										Visit Website
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
	function errorMessage() {
		return (
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-500'>
						Portfolio
					</p>
					<p className='py-6'>There is nothing right here for now</p>
				</div>
			</div>
		);
	}
	return (
		<div id='portfolio' className='w-full'>
			{isHaveData ? portfolioData() : errorMessage()}
		</div>
	);
};

export default Collaboration;
