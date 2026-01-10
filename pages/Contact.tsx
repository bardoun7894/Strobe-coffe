
import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif text-[#2c2d2a]">Contact Us</h1>
        <p className="text-[#2c2d2a]/60 text-lg max-w-xl mx-auto">
          Whether you have a question about our beans, want to book a private event, or just want to say hi, we'd love to hear from you.
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-[#2c2d2a]/5 p-8 md:p-12 border border-[#2c2d2a]/5">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-[#2c2d2a]/40 ml-1">Full Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-[#fcfaf7] border-transparent rounded-xl px-6 py-4 focus:border-[#b7926a] focus:ring-0 transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-[#2c2d2a]/40 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-[#fcfaf7] border-transparent rounded-xl px-6 py-4 focus:border-[#b7926a] focus:ring-0 transition-all shadow-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-[#2c2d2a]/40 ml-1">Your Message</label>
            <textarea
              rows={5}
              placeholder="Tell us everything..."
              className="w-full bg-[#fcfaf7] border-transparent rounded-xl px-6 py-4 focus:border-[#b7926a] focus:ring-0 transition-all shadow-sm"
            ></textarea>
          </div>
          <button className="w-full flex items-center justify-center gap-3 bg-[#2c2d2a] text-[#fcfaf7] px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-lg transition-all">
            Send Message <Send size={20} />
          </button>
        </form>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#b7926a]/15 text-[#b7926a] flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
            <Phone size={24} />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2c2d2a]/40">Phone</h4>
            <p className="font-bold">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#b7926a]/15 text-[#b7926a] flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2c2d2a]/40">Email</h4>
            <p className="font-bold">Contact@strobecoffee.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
