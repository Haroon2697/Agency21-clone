import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1e6e41] text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <img
          src="/logo1.png"
          alt="Avenue5 Logo"
          className="h-12 mr-12" // Adjust the height (h-12) as per your need
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-lg font-medium">
          {['ABOUT', 'PROPERTIES', 'PROJECTS', 'BLOG', 'CAREERS', 'CONTACT'].map((item, idx) => (
            <a
              key={idx}
              href={`/${item.toLowerCase()}`}
              className="relative hover:text-yellow-300 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Search and Inquiry Button for Desktop */}
        <div className="hidden lg:flex items-center space-x-4 ">
          <input
            type="text"
            placeholder="Property ID"
            className="w-40 bg-white text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
          />
          <button
            className="bg-[#2e8b57] text-white hover:bg-[#236e44] px-4 py-2 rounded-md transition-all duration-300 shadow-md"
          >
            SEND INQUIRY
          </button>
          <button
            className="bg-[#2e8b57] text-white hover:bg-[#236e44] px-4 py-2 rounded-md transition-all duration-300 shadow-md"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white p-3"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {/* Sidebar for Mobile View */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 left-0 w-64 overflow-scroll bg-white h-full z-50 transform transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Logo and Close Button */}
          <div className="flex justify-between items-center p-4">
            <a className="text-3xl font-bold leading-none" href="#">
              <img
                src="/logo1.png"
                alt="Avenue5 Logo"
                className="h-12" // Adjust the height (h-12) as per your need
              />
            </a>
            <button
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close navigation"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Box for Mobile */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search anything"
              className="w-full bg-gray-100 text-black py-2 px-4 rounded-lg"
            />
          </div>

          {/* Menu Links */}
          <ul className="mt-0 space-y-4 p-4" style={{ paddingLeft: '22px' }}>
            {['ABOUT', 'PROPERTIES', 'PROJECTS', 'BLOG', 'CAREERS', 'CONTACT'].map((item, idx) => (
              <li key={idx}>
                <a
                  className="text-lg text-gray-800 hover:text-gray-600"
                  href={`/${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="p-4">
            <button className="block mb-4 w-full bg-green-600 text-white hover:bg-green-700 rounded-lg py-2">
              Send Inquiry
            </button>
            <button
              className="bg-[#2e8b57] w-full text-white hover:bg-[#236e44] px-4 py-2 rounded-md transition-all duration-300 shadow-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
