
import React from 'react';
import { ExternalLink, Coffee, Filter, Leaf } from 'lucide-react';
import { FEATURED_DRINKS } from '../constants';

const Menu: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-20">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif italic text-[#2c2d2a]">The Menu</h1>
        <p className="text-lg text-[#2c2d2a]/60 leading-relaxed">
          Our menu changes weekly based on seasonal harvests and roaster favorites. We believe in quality over quantity, focusing on bringing out the unique characteristics of every bean.
        </p>
        <div className="pt-8">
          <a 
            href="https://example.com/menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#b7926a] text-[#fcfaf7] px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            View Live Menu <ExternalLink size={20} />
          </a>
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Current Highlights</h2>
          <div className="h-px flex-1 bg-[#2c2d2a]/10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_DRINKS.concat(FEATURED_DRINKS[0]).map((drink, idx) => (
            <div key={`${drink.id}-${idx}`} className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                   <h3 className="font-bold text-lg">{drink.name}</h3>
                   <span className="text-[#b7926a] font-bold">{drink.price}</span>
                </div>
                <p className="text-sm text-[#2c2d2a]/60 line-clamp-2">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#2c2d2a]/5">
        <div className="flex flex-col items-center text-center p-8 bg-[#eae6de]/20 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#b7926a]/20 text-[#b7926a] flex items-center justify-center">
            <Coffee size={24} />
          </div>
          <h4 className="font-bold">Artisan Roasts</h4>
          <p className="text-sm text-[#2c2d2a]/60">Ethically sourced beans, roasted in small batches to preserve flavor.</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 bg-[#eae6de]/20 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#b7926a]/20 text-[#b7926a] flex items-center justify-center">
            <Filter size={24} />
          </div>
          <h4 className="font-bold">Pour-Over Ritual</h4>
          <p className="text-sm text-[#2c2d2a]/60">Precision brewing methods to highlight clarity and delicate notes.</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 bg-[#eae6de]/20 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#b7926a]/20 text-[#b7926a] flex items-center justify-center">
            <Leaf size={24} />
          </div>
          <h4 className="font-bold">Plant Power</h4>
          <p className="text-sm text-[#2c2d2a]/60">Premium alternative milks and vegan-friendly seasonal treats.</p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
