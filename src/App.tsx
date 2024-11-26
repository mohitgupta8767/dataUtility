import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src='https://media.licdn.com/dms/image/v2/D560BAQHXaxftySwb3Q/company-logo_200_200/company-logo_200_200/0/1711703564987/adani_ai_labs_logo?e=1740614400&v=beta&t=sLIsI24PaKGEe6PJjAoxh-XUDB6oluhCWiHPYLn_zr0' alt='logo' height={40} width={40} />
        <div className="text-2xl font-bold text-gray-800">AEML DATA Utility Tool</div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default App;
