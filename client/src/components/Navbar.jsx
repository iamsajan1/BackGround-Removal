import React from "react";
import { assets } from "../assets/assets";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-6 lg:mx-34 mt-4">
        <div
          className="flex items-center justify-between px-6 py-3 rounded-3xl
                     bg-gradient-to-r from-white/80 via-white/70 to-white/80
                     backdrop-blur-xl border border-white/20
                     shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
        >
          {/* Logo only */}
          <Link to="/" className="flex items-center">
            <img
              src={assets.logo}
              alt="BG-Magify Logo"
              className="h-10 sm:h-12 drop-shadow-md"
            />
          </Link>

          {/* CTA Button */}
          {isSignedIn ? (
             <div>
              <UserButton/>
             
            </div>
          ) : (
            <button
              onClick={() => openSignIn({})}
              className="group relative inline-flex items-center gap-2 px-6 py-3
                       rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400
                       text-black font-semibold text-sm shadow-lg
                       overflow-hidden hover:scale-105 transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Soft glow overlay */}
              <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
