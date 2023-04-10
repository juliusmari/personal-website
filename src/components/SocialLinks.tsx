import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail, GrFacebook } from 'react-icons/gr';

const SocialLinks = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      if (scrollBottom >= documentHeight) {
        setShowSocialLinks(false);
      } else {
        setShowSocialLinks(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sideLinks = [
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/juliusmari',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/julius-mari-chan-120b92270',
      style: '',
    },
    {
      id: 3,
      child: (
        <>
          Gmail <GrMail size={30} />
        </>
      ),
      href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFPCTmlFXCtCtSrjSlcLqnTjfKqpSCvXjHWFbnjxzdcmWmndLDNbqDBfQpzpBhgRKnNV',
      style: '',
    },
    {
      id: 4,
      child: (
        <>
          Facebook <GrFacebook size={30} />
        </>
      ),
      href: 'https://web.facebook.com/ainschann/',
      style: 'rounded-br-md',
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <div
        className={`flex flex-col top-[35%] left-0 fixed transition-opacity ${
          showSocialLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ transition: 'opacity 0.3s ease-out' }}
      >
        <ul className="">
          {sideLinks.map(({ id, child, href, style }) => (
            <li
              key={id}
              className={
                'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 text-gray-300 hover:text-yellow-300' +
                ' ' +
                style
              }
            >
              <a href={href} target="_blank" rel="noreferrer" className="flex justify-between items-center  w-full ">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;