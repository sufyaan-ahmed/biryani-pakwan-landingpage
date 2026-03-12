import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-widest uppercase text-sm"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mt-2 mb-8"
            >
              Visit Us or <br />
              <span className="text-primary">Order Online</span>
            </motion.h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Craving the best biryani in town? We're just a call or a short drive away. 
              Whether you want to dine-in or take away, we're ready to serve you.
            </p>

            <div className="space-y-6">
              <motion.a
                href="tel:+923112467473"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-surface rounded-3xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold">+92 311 2467473</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/923112467473"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-surface rounded-3xl border border-white/5 hover:border-secondary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">WhatsApp Order</p>
                  <p className="text-xl font-bold">Chat with us</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-surface rounded-3xl border border-white/5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-background transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold leading-tight">B-10 Jamia Millia Road, Al Falah Housing Society, Karachi</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.151917784796!2d67.17752679931617!3d24.878328331120635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c2d945bdd9%3A0x4c35510c19c1f208!2sHAROON%20BIRYANI%20AND%20PAKWAN%20CENTER!5e0!3m2!1sen!2s!4v1773138646567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <div className="absolute bottom-6 right-6">
                <a
                  href="https://maps.app.goo.gl/HnF5ETwDMBy9q1Hp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl"
                >
                  <ExternalLink size={18} />
                  Open Maps
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-8 rounded-3xl border border-white/5"
            >
              <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
