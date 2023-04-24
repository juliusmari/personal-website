import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMail, GrFacebook } from 'react-icons/gr';

const Footer = () => {
	const [showSocialLinks, setShowSocialLinks] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = document.documentElement.clientHeight;
			let documentHeight = document.body.clientHeight;
			// {console.log(windowHeight, "asdas")} //253
			// {console.log(documentHeight, "azxczx")} //4600 4347
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop; //4091
			const scrollBottom = scrollTop + windowHeight;
			// {console.log(scrollTop, "scrolltotop")} //4091
			// {console.log(scrollBottom, "scrollBottom")} //4344
			documentHeight = documentHeight - windowHeight / 10;
			if (scrollBottom >= documentHeight) {
				setShowSocialLinks(true);
			} else {
				setShowSocialLinks(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<footer className='bg-gradient-to-b from-gray-800 to-black text-gray-300 py-4'>
			<div
				className={`flex justify-center space-x-2 sm:space-x-4 transition-opacity duration-300 ${
					showSocialLinks ? 'opacity-100' : 'opacity-0'
				}`}
				style={{ transition: 'opacity 0.3s ease-out' }}
			>
				<a
					href='https://github.com/juliusmari'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-yellow-300'
				>
					<FaGithub size={28} />
				</a>
				<a
					href='https://www.linkedin.com/in/julius-mari-chan-120b92270'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-yellow-300'
				>
					<FaLinkedin size={28} />
				</a>
				<a
					href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFPCTmlFXCtCtSrjSlcLqnTjfKqpSCvXjHWFbnjxzdcmWmndLDNbqDBfQpzpBhgRKnNV'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-yellow-300'
				>
					<GrMail size={28} />
				</a>
				<a
					href='https://web.facebook.com/ainschann/'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-yellow-500'
				>
					<GrFacebook size={28} />
				</a>
			</div>
			<div className='text-center mt-4'>
				<p>&copy; 2023 Julius Mari Chan</p>
			</div>
		</footer>
	);
};

export default Footer;
