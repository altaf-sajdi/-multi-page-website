import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold flex items-center gap-2">
          <Home className="w-6 h-6" />
          MyWebsite
        </NavLink>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 hover:text-indigo-200 transition-colors ${
                isActive ? 'text-indigo-200' : ''
              }`
            }
          >
            <Home className="w-4 h-4" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-1 hover:text-indigo-200 transition-colors ${
                isActive ? 'text-indigo-200' : ''
              }`
            }
          >
            <Info className="w-4 h-4" />
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-1 hover:text-indigo-200 transition-colors ${
                isActive ? 'text-indigo-200' : ''
              }`
            }
          >
            <Mail className="w-4 h-4" />
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;