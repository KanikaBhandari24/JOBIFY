import React from "react";
import {FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Jobi<span className="text-3xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">Fy</span>
          </h2>
          <p className="text-sm">
            Dream, Apply & Reach the Sky.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Jobs</li>
            <li className="hover:text-blue-400 cursor-pointer">Browse</li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Career Tips</li>
            <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-400 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 md:sm:space-x-3">
            <a href="https://github.com/KanikaBhandari24" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition">
              <FaGithub />
            </a>
            <a href="https://x.com/Kanikaa78" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/kanika-bhandari-001k/" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-5 pt-5 text-center text-sm text-gray-500">
        Created by @<a href="https://portfolio2-iota-hazel.vercel.app/" target="_blank" className="underline cursor-pointer hover:text-blue-400 ">KanikaBhandari</a> | © {new Date().getFullYear()} JobiFy.
      </div>
    </footer>
  );
};

export default Footer;
