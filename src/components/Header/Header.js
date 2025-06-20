import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../image/logo.jpg';
import { PhoneIcon } from '@heroicons/react/24/solid';

const menuItems = [
  { name: "Packages", path: "/pacakages" },
  { name: "Our Facilities", path: "/facilities" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contactus" },
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M20.52 3.478A11.54 11.54 0 0012 0C5.372 0 0 5.373 0 12c0 2.12.55 4.104 1.5 5.853L0 24l6.277-1.477A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12 0-2.97-1.176-5.697-3.48-7.522zM12 21.75a9.765 9.765 0 01-5.093-1.44l-.364-.22-3.72.875.895-3.626-.236-.377a9.792 9.792 0 01-1.536-5.41c0-5.39 4.39-9.774 9.797-9.774 2.62 0 5.086 1.02 6.93 2.875a9.683 9.683 0 012.868 6.9c0 5.392-4.39 9.776-9.775 9.776zm5.33-7.5c-.29-.14-1.7-.84-1.96-.94-.26-.11-.45-.14-.64.15-.19.29-.74.94-.9 1.13-.16.19-.31.21-.58.07-.28-.14-1.18-.44-2.25-1.38-.83-.74-1.39-1.66-1.55-1.93-.16-.28-.02-.43.13-.57.13-.13.28-.31.42-.47.14-.15.19-.26.28-.43.09-.16.05-.31-.02-.45-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.82 1.17 3.02.14.19 2.02 3.07 4.9 4.3.68.29 1.21.46 1.63.59.68.21 1.3.18 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.11-.26-.18-.55-.32z" />
  </svg>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="dark:bg-gray-900 relative z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link className="block text-teal-600 dark:text-teal-300" to="/">
              <img src={Logo} alt="Library Logo" className="h-8" />
            </Link>
          </div>

          {/* Desktop Navigation and Buttons */}
          <div className="hidden md:flex items-center justify-between w-full ml-10">
            {/* Navigation Links */}
            <nav className="flex items-center gap-6 text-sm" aria-label="Global">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-white/75"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Call and WhatsApp Buttons */}
            <div className="flex items-center gap-4 ml-6">
              <Link
                to="tel:+919993938894"
                className="flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-red-500"
                aria-label="Call"
              >
                <PhoneIcon className="w-5 h-5" />
                Call
              </Link>

              <Link
                to="https://wa.me/+919993938894"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-green-500"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-sm bg-gray-100 p-2 text-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-gray-900 p-6 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={Logo} alt="Library Logo" className="h-8" />
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="text-white text-xl">✕</button>
        </div>

        <ul className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg hover:text-teal-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-4">
          <Link
            to="tel:+919993938894"
            className="block w-full text-center bg-red-600 text-white py-2 rounded flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <PhoneIcon className="w-5 h-5" />
            Call
          </Link>
          <Link
            to="https://wa.me/+919993938894"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-600 text-white py-2 rounded flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <WhatsAppIcon />
            WhatsApp
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
