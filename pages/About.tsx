
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-24">
      <section className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif text-[#2c2d2a]">About <br /> Strobe Coffee</h1>
            <p className="text-2xl text-[#b7926a] italic font-serif leading-relaxed">Crafting energy for the intentional soul.</p>
          </div>
          
          <div className="space-y-6 text-[#2c2d2a]/70 leading-relaxed text-lg">
            <p>
              Founded in 2018, Strobe Coffee began as a humble pop-up in an old warehouse. Our vision was simple: to strip away the pretension of specialty coffee and focus on the raw, pulse-pounding energy of a perfectly brewed cup.
            </p>
            <p>
              We name our shop 'Strobe' because of the rhythmic energy of the roasting process—the flashing moment when a bean reaches its peak potential. We believe every cup should be a momentary strobe light in your day, bringing clarity and focus.
            </p>
            <p>
              Today, we partner directly with sustainable farms in Ethiopia, Colombia, and Vietnam, ensuring every bean in our hopper tells a story of ethical labor and environmental stewardship. We don't just sell coffee; we brew moments.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative">
             <img 
               src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-full object-cover" 
               alt="Modern coffee shop interior" 
             />
             <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]"></div>
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#b7926a]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-10 -left-10 w-64 h-64 bg-[#2c2d2a]/5 rounded-full blur-2xl -z-10"></div>
        </div>
      </section>

      <section className="bg-[#2c2d2a] text-[#fcfaf7] rounded-[2.5rem] p-12 md:p-24 text-center space-y-8">
         <h2 className="text-3xl md:text-5xl font-serif">"Coffee is not a commodity, <br /> it's a conversation."</h2>
         <div className="w-16 h-1 bg-[#b7926a] mx-auto"></div>
         <p className="text-[#fcfaf7]/60 max-w-xl mx-auto">
           Join us in our flagship Downtown Roastery to experience the pulse of specialty coffee firsthand. We host monthly cupping sessions and barista workshops for enthusiasts of all levels.
         </p>
      </section>
    </div>
  );
};

export default About;
