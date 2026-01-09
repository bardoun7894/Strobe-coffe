
import React from 'react';
import { Coffee, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#2c2d2a]/5 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3 text-[#2c2d2a]">
              <img src="/assets/logo.png" alt="Strobe Coffee" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-sm text-[#2c2d2a]/40">© 2024 Strobe Coffee Roasters.</p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-[#2c2d2a]/60">
            <a href="#" className="flex items-center gap-2 hover:text-[#b7926a] transition-colors">
              <Instagram size={16} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-[#b7926a] transition-colors">
              <Twitter size={16} /> Twitter
            </a>
            <a href="#" className="hover:text-[#b7926a] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#b7926a] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
