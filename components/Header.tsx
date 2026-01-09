
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Menu', path: '/menu' },
    { label: 'Location', path: '/location' },
    { label: 'Story', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#2c2d2a]/5 bg-[#fcfaf7]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-[#2c2d2a]">
          <img src="/assets/logo.png" alt="Strobe Coffee Logo" className="w-14 h-14 object-contain" />
          <span className="text-xl font-bold tracking-tight">Strobe Coffee</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${isActive(item.path) ? 'text-[#b7926a]' : 'text-[#2c2d2a]/70 hover:text-[#2c2d2a]'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-[#b7926a] hover:bg-[#a17e58] text-[#fcfaf7] text-xs font-bold h-10 px-5 rounded-lg transition-all shadow-sm">
            Order Online
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#2c2d2a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fcfaf7] border-b border-[#2c2d2a]/10 p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-[#2c2d2a]"
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full bg-[#b7926a] text-[#fcfaf7] py-3 rounded-xl font-bold">
            Order Online
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
