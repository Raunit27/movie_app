import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex items-center justify-center gap-4 mb-2">
        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
          About
        </Link>
        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
          Contact
        </Link>
        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
          Privacy
        </Link>
        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
          Terms
        </Link>
        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
          Location
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm">Created by <span className="font-bold">@RmInTech</span></p>
      </div>
    </footer>
  );
};

export default Footer;
