
import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="text-5xl font-serif text-[#2c2d2a]">Find Us</h1>
          <p className="text-[#2c2d2a]/60 text-lg">We're nestled in the heart of the city, providing a calm escape for coffee enthusiasts.</p>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#b7926a]/15 text-[#b7926a] flex shrink-0 items-center justify-center">
              <MapPin size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Our Address</h3>
              <p className="text-[#2c2d2a]/60 leading-relaxed">
                42 Specialty Lane <br />
                Coffee Quarter, NY 10001
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#b7926a]/15 text-[#b7926a] flex shrink-0 items-center justify-center">
              <Clock size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Opening Hours</h3>
              <div className="grid grid-cols-2 gap-x-8 text-[#2c2d2a]/60 text-sm">
                <span>Mon - Fri</span> <span>07:00 - 18:00</span>
                <span>Saturday</span> <span>08:00 - 19:00</span>
                <span>Sunday</span> <span>09:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#2c2d2a] text-[#fcfaf7] px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-lg transition-all">
          <Navigation size={20} /> Open in Google Maps
        </button>
      </div>

      <div className="relative">
        <div className="aspect-square bg-[#eae6de] rounded-[2.5rem] overflow-hidden shadow-sm border-8 border-white p-4">
          {/* Static Map Illustration (Placeholder Image) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.20437399107!2d30.956954!3d29.973556000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857002b0b9607%3A0x691e9c45afe983a4!2sStrobe%20Coffee!5e0!3m2!1sar!2sma!4v1768002312332!5m2!1sar!2sma"
            className="w-full h-full rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Strobe Coffee Location"
          ></iframe>
        </div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#b7926a]/5 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  );
};

export default Location;
