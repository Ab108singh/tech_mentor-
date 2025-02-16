import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Custom CSS file for animation
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [animatedText, setAnimatedText] = useState('');
  const sentence =
    "The future of technology is here, and it starts with you. Join us to learn, grow, and innovate in the world of tech. Your journey begins now!"; // 40-word sentence
  const delay = 100; // Delay between each character (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= sentence.length) {
        setAnimatedText(sentence.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sentence]);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 text-white font-sans">
      {/* Left Text */}
      <Link to={'/'} className="text-xl font-bold whitespace-nowrap">The Tech_Mentor</Link>

      {/* Animated Text */}
      <div className="animated-text">
        {animatedText}
        <span className="cursor"></span> {/* Blinking cursor */}
      </div>

      {/* Sign Up Button */}
      <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap">
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;