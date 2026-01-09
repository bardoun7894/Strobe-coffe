
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sparkles, ShoppingBag, ArrowUpRight, Plus } from 'lucide-react';
import { FEATURED_DRINKS } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP Initial Entry & Animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-text', { y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' })
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-image', { x: 30, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.8');

  }, { scope: heroRef });

  return (
    <div className="space-y-24 py-0 overflow-x-hidden bg-background text-primary" ref={heroRef}>

      {/* Horizontal Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 px-6 overflow-hidden">
        {/* Background shape for visual interest */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#1a1816] rounded-l-[5rem] -z-10 hidden md:block"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Content */}
          <div className="space-y-8 z-10 hero-text order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
              <Sparkles size={16} />
              <span>New Harvest Arrival</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.05]">
              <span className="text-accent italic">Brew</span> <br />
              the moment.
            </h1>
            <p className="text-primary/60 text-lg md:text-xl leading-relaxed max-w-md">
              Experience the depth of our signature medium roast. Sourced ethically, roasted locally, and brewed to perfection.
            </p>

            <div className="hero-cta flex flex-wrap gap-4 pt-2">
              <Link to="/menu" className="h-14 px-8 rounded-2xl bg-primary text-background hover:bg-accent font-bold flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <ShoppingBag size={20} /> Order Now
              </Link>
              <Link to="/about" className="h-14 px-8 rounded-2xl border border-white/10 text-primary font-bold flex items-center gap-3 transition-all hover:bg-white/5 hover:-translate-y-1">
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Column: Static Image */}
          <div className="hero-image relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Composition of Bag and Cup */}
              <div className="absolute right-0 top-0 w-3/4 h-3/4 z-10">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800"
                  alt="Coffee Bag"
                  className="w-full h-full object-contain mix-blend-difference drop-shadow-2xl rotate-3 opacity-90"
                />
              </div>
              <div className="absolute left-0 bottom-0 w-2/3 h-2/3 z-20">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600"
                  alt="Coffee Cup"
                  className="w-full h-full object-contain mix-blend-normal drop-shadow-2xl"
                />
              </div>
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Visual Navigation Tiles */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {/* Menu Tile */}
          <Link to="/menu" className="group relative h-72 rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800"
              alt="Pour over coffee"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <span className="text-3xl font-serif text-white italic">The Menu</span>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          {/* Location Tile (Solid Color Break) */}
          <Link to="/location" className="group relative h-72 rounded-[2rem] overflow-hidden bg-[#1a1816] flex flex-col justify-between p-8 border border-white/5">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
              <MapPin size={24} />
            </div>
            <div className="space-y-2 z-10">
              <span className="text-3xl font-serif text-primary">Find Us</span>
              <p className="text-primary/50 text-sm">Coffee Quarter, NY</p>
            </div>
            {/* Abstract Map Lines Decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute top-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={20} />
            </div>
          </Link>

          {/* Contact Tile */}
          <Link to="/contact" className="group relative h-72 rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
              alt="People in cafe"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <span className="text-3xl font-serif text-white italic">Contact</span>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          {/* Story Tile */}
          <Link to="/about" className="group relative h-72 rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=800"
              alt="Barista pouring"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-accent/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <span className="text-3xl font-serif text-white">Our Story</span>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Featured Teaser */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Weekly Drop</span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary">Roaster's Choice</h2>
            <p className="text-primary/40 font-medium">This month's standout small-batches.</p>
          </div>
          <Link to="/menu" className="group flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all">
            <span>Full Collection</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-transparent group-hover:text-white transition-all">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {FEATURED_DRINKS.map((drink) => (
            <div key={drink.id} className="group cursor-default space-y-8">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-sm bg-[#1a1816] border border-white/5 relative">
                <img src={drink.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90" alt={drink.name} />
                {/* Floating Action Button */}
                <div className="absolute bottom-5 right-5 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                  <button className="w-12 h-12 bg-white text-[#2c2d2a] rounded-full flex items-center justify-center shadow-xl hover:bg-accent hover:text-white transition-colors">
                    <Plus size={24} />
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-serif text-primary">{drink.name}</h3>
                  <span className="font-bold text-accent text-lg">{drink.price}</span>
                </div>
                <p className="text-primary/50 text-md leading-relaxed">{drink.description}</p>
                {/* Attributes */}
                <div className="flex gap-2 pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase font-bold tracking-wider border border-white/20 px-2 py-1 rounded-md text-primary">Fair Trade</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider border border-white/20 px-2 py-1 rounded-md text-primary">Washed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
