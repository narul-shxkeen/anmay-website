import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavItem = ({ to, children, onClick, isMobile }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${
        isActive
          ? 'text-white bg-[#80a8bd]'
          : 'text-gray-700 hover:text-white hover:bg-gray-700'
      } px-3 py-2 rounded-md text-sm md:text-base transition duration-300 ease-in-out ${isMobile ? 'inline-block' : ''}`
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    // { to: "/literature", label: "Literature" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <div className="w-full fixed z-30 md:top-6 flex justify-center">
      <nav ref={navRef} className="nav shadow-md w-full md:w-auto rounded-none md:rounded-full">
        <div className="w-auto px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:block w-full">
              <div className="flex justify-center gap-2">
                {navItems.map((item) => (
                  <NavItem key={item.to} to={item.to} isMobile={false}>
                    {item.label}
                  </NavItem>
                ))}
              </div>
            </div>
            <div className="md:hidden flex justify-start w-full">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobile && isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-start px-4 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  isMobile={true}
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}