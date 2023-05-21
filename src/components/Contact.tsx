import React, { useRef, useState } from 'react';
import { useOnScreen } from './Home';

const Contact = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// Reset input values
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<div
			id='contact'
			className='w-full overflow-x-hidden text-colorBlack overflow-y-hidden min:h-screen p-4'
		>
			<div
				ref={ref}
				className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'
			>
				<div className='pb-8'>
					<h1
						className={`text-4xl text-colorBlack font-bold inline border-b-4 border-colorPurple mb-6 transition duration-[1500ms] ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						Contact
					</h1>
					<p
						className={`py-6 transition duration-[1500ms] ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						Submit the form below to get in touch with me
					</p>
				</div>
				<div className='flex justify-center items-center'>
					<form
						action='https://getform.io/f/5f4689d2-785e-4974-88b6-544485fa40a4'
						target='_blank'
						method='POST'
						className='flex flex-col w-full md:w-1/2'
					>
						<div
							className={`flex flex-col mb-4 transition duration-[1500ms] ${
								isVisible
									? 'opacity-100 translate-x-0'
									: 'opacity-0  translate-x-5 sm:translate-x-20'
							}`}
						>
							<label
								htmlFor='email'
								className={`font-medium mb-2  transition duration-[1500ms] ${
									isVisible
										? 'opacity-100 translate-x-0'
										: 'opacity-0 translate-x-5 sm:translate-x-20'
								}`}
							>
								Name
							</label>
							<input
								type='text'
								required
								min={5}
								name='name'
								id='name'
								placeholder='Enter your Name'
								value={name}
								onChange={(event) => setName(event.target.value)}
								className='p-2 bg-transparent border-2 rounded-md  focus:outline-none focus:border-colorPurple'
							/>
						</div>
						<div
							className={`flex flex-col mb-4 transition duration-[1500ms] ${
								isVisible
									? 'opacity-100 translate-x-0'
									: 'opacity-0 -translate-x-5 sm:-translate-x-20'
							}`}
						>
							<label
								htmlFor='name'
								className={` font-medium mb-2  transition duration-[1500ms] ${
									isVisible
										? 'opacity-100 translate-x-0'
										: 'opacity-0 -translate-x-5 sm:-translate-x-20'
								}`}
							>
								Email
							</label>
							<input
								type='email'
								name='email'
								required
								id='email'
								placeholder='Enter your Email'
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								className='p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-colorPurple'
							/>
						</div>
						<div
							className={`flex flex-col mb-4 transition duration-[1500ms] ${
								isVisible
									? 'opacity-100 translate-x-0'
									: 'opacity-0 translate-y-5 sm:translate-y-20'
							}`}
						>
							<label
								htmlFor='message'
								className={`font-medium mb-2 transition duration-[1500ms] ${
									isVisible
										? 'opacity-100 translate-x-0'
										: 'opacity-0 translate-y-5 sm:translate-y-20'
								}`}
							>
								Message
							</label>
							<textarea
								id='message'
								required
								minLength={15}
								maxLength={150}
								name='message'
								placeholder='Enter your message'
								rows={8}
								value={message}
								onChange={(event) => setMessage(event.target.value)}
								className='p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-colorPurple'
							></textarea>
						</div>
						<button
							type='submit'
							className={`mt-8 mx-auto text-colorPurple font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent border-2 border-colorPurple cursor-pointer hover:text-white hover:bg-colorPurple transition duration-[300ms] ${
								isVisible
									? 'opacity-100 translate-x-0'
									: 'opacity-0 translate-y-5 sm:translate-y-20'
							}`}
							onSubmit={handleSubmit}
						>
							Let's Talk
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
