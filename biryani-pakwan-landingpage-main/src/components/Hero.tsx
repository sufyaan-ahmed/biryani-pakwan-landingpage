import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-scroll';
import { HandWrittenTitle } from './ui/hand-writing-text';
import ScrollExpandMedia from './ui/scroll-expansion-hero';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://www.youtube.com/watch?v=uxbzeONiFAc"
        bgImageSrc="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop"
        title="Haroon Biryani"
        date="Since 2019"
        scrollToExpand="Scroll to Explore"
      >
        <div className="relative w-full min-h-screen flex items-center justify-center py-20">
          {/* Content Background Image (Full Screen) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop"
              alt="Delicious Biryani Background"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
          </div>

          <div className="max-w-5xl mx-auto w-full relative z-10 px-6">
            <motion.div
              className="flex flex-col items-center text-center"
            >
            <HandWrittenTitle 
              title="Haroon Biryani & Pakwan Center" 
              subtitle="Serving the Best Biryani in Al-Falah Housing Society"
            />

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="menu"
                smooth={true}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-primary/20"
              >
                <ShoppingBag size={20} />
                Order Now
              </Link>
              <a
                href="tel:+923112467473"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://maps.app.goo.gl/HnF5ETwDMBy9q1Hp7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-background px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-secondary/20"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400"
            >
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">4.1 / 5</span>
                <span>Google Rating</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Rs 1 – 500</span>
                <span>Price Range</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col hidden md:flex">
                <span className="text-white font-bold text-xl">Al-Falah</span>
                <span>Karachi, PK</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ScrollExpandMedia>
    </section>
  );
}
