// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/success', label: 'Success' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Growvy</h1>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center w-full">
          <div className="border-3 border-black rounded-full px-16 py-2">
            <nav className="flex space-x-1 md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium px-4 py-2 relative ${
                    isActive(item.path)
                      ? 'text-black font-bold'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${
                      isActive(item.path)
                        ? 'bg-black'
                        : 'bg-transparent group-hover:bg-gray-300'
                    }`}
                  ></div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="border-2 border-black rounded-2xl py-4 px-6">
            <nav className="flex flex-col space-y-3 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium text-lg ${
                    isActive(item.path)
                      ? 'text-black font-bold'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;
