import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreenAnimation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect called');
    const timer = setTimeout(() => {
      navigate('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  
  return (
    <div className=" z-[100] flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-purple-700 to-pink-600">
      <h1 className="text-4xl md:text-6xl text-white font-bold mb-8 animate-pulse">
        Welcome
      </h1>
      <div className="w-10 h-10 bg-white rounded-full animate-bounce"></div>
    </div>
  );
};

export default WelcomeScreenAnimation;