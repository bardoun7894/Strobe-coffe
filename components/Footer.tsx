
import React from 'react';
import { Coffee, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3 text-primary">
              <img src="/assets/logo.png" alt="Strobe Coffee" className="h-24 w-auto object-contain dark:invert transition-all duration-300" />
            </div>
            <p className="text-sm text-primary/40">© 2024 Strobe Coffee Roasters.</p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-primary/60">
            <a href="https://www.instagram.com/strobecoffee?igsh=ZThmamN3M285ODM%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Instagram size={16} /> Instagram
            </a>
            <a href="https://www.facebook.com/share/1K7t1ueuCQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Facebook size={16} /> Facebook
            </a>
            <a href="https://wa.me/201500000293" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
