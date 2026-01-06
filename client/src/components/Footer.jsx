import React from "react";
import { assets } from "../assets/assets";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white via-slate-50 to-white border-t border-slate-200">
      
      {/* Soft background glow */}
      <div className="absolute -top-24 -left-24 h-[100px] bg-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-[100px] bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-4">
          <img
            src={assets.logo}
            alt="BG-Magify Logo"
            className="h-9 opacity-90"
          />
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} BG-Magify. All rights reserved.
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-md
                       flex items-center justify-center
                       hover:shadow-lg hover:-translate-y-1 transition"
          >
            <Facebook size={18} />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-md
                       flex items-center justify-center
                       hover:shadow-lg hover:-translate-y-1 transition"
          >
            <Twitter size={18} />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-md
                       flex items-center justify-center
                       hover:shadow-lg hover:-translate-y-1 transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
