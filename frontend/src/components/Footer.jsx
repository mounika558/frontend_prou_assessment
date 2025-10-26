import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-amber-100 text-amber-800 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center md:items-start gap-8">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold">Kuku Cafe</h2>
          <p className="text-amber-700 max-w-md text-base" >
            Where artisan coffee meets exceptional dining. Visit us for an unforgettable culinary experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 flex flex-col text-amber-700 hover:text-amber-500">
            <Link to='/about'>About</Link>
            <Link to='/Menu'>Menu</Link>
            <Link to='/Contact'>Contact</Link>
            
          </ul>
        </div>

        <div className=" flex  space-x-6 text-amber-700">
            <FaFacebook className="text-amber-700 h-8 w-8">Facebook</FaFacebook>
            <FaInstagram className="text-amber-700 h-8 w-8">Instagram</FaInstagram>
            <FaYoutube className="text-amber-700 h-8 w-8">Yoututbe</FaYoutube>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center border-t border-amber-700 mt-8 pt-4 text-sm text-amber-700">
        ©2025 Kuku Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
