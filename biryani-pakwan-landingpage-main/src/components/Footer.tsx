import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <UtensilsCrossed className="text-white w-6 h-6" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Haroon <span className="text-secondary">Biryani</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The most authentic biryani experience in Al-Falah, Karachi. 
              We take pride in our traditional recipes and quality ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Reviews', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-secondary">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span className="text-white">12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-white">02:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="text-white">12:00 PM - 12:00 AM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-secondary">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Subscribe to get special offers and updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-background border border-white/10 rounded-xl px-4 py-2 w-full outline-none focus:border-primary transition-all"
              />
              <button className="bg-primary px-4 py-2 rounded-xl font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Haroon Biryani & Pakwan Center. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <Link
            to="home"
            smooth={true}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-all shadow-lg shadow-primary/20"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
