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
			className='w-full overflow-x-hidden overflow-y-hidden min:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
		>
			<div
				ref={ref}
				className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'
			>
				<div className='pb-8'>
					<h1
						className={`text-4xl text-gray-200 font-bold inline border-b-4 border-yellow-300 mb-6 transition duration-[1500ms] ${
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
								isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-96'
							}`}
						>
							<label
								htmlFor='email'
								className={`text-gray-200 font-medium mb-2  transition duration-[1500ms] ${
									isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-96'
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
								className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500'
							/>
						</div>
						<div
							className={`flex flex-col mb-4 transition duration-[1500ms] ${
								isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-96'
							}`}
						>
							<label
								htmlFor='name'
								className={`text-gray-200 font-medium mb-2  transition duration-[1500ms] ${
									isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-96'
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
								className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500'
							/>
						</div>
						<div
							className={`flex flex-col mb-4 transition duration-[1500ms] ${
								isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-96'
							}`}
						>
							<label
								htmlFor='message'
								className={`text-gray-200 font-medium mb-2 transition duration-[1500ms] ${
									isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-96'
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
								className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500'
							></textarea>
						</div>
						<button
							type='submit'
							className={`mt-8 mx-auto text-yellow-300 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent border-2 border-yellow-300 cursor-pointer hover:bg-yellow-300 hover:bg-opacity-10 transition duration-[1500ms] ${
								isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-96'
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
