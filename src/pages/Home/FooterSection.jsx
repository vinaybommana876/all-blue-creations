import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Logo from "../../assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="text-gray-900 border-t border-white/30 bg-gradient-to-br from-white to-[#eab7bd]">
      {/* === Newsletter Section === */}
      <section className="max-w-6xl mx-auto py-5 px-4 md:px-12 text-center">
             <h2 className="text-4xl md:text-5xl p-2 font-extrabold bg-gradient-to-r from-[#e79098] to-black bg-clip-text text-transparent mb-4">
        Make every occasion count
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 mb-10">
          Stay ahead with exclusive tips and inspiration for your next celebration
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-white/40 bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 w-full sm:w-72"
          />
          <button className="bg-pink-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-500 transition">
            Subscribe
          </button>
        </div>
        <div className="mt-6">
          <span className="text-gray-800 font-semibold text-lg">Excellent 4.8</span>{" "}
          <span className="text-gray-600">Based on +1K reviews</span>
        </div>
      </section>

      {/* === Quick Links Section === */}


      {/* === Follow & Social Links Section === */}
      <section className="max-w-6xl mx-auto py-6 px-4 md:px-12 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
         <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-12 h-12 md:w-20 md:h-20 object-contain"
                />
        
                <h1 className="text-sm md:text-2xl font-extrabold bg-gradient-to-r from-[#e79098] to-black bg-clip-text text-transparent">
                  All Blue Creations
                </h1>
              </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Facebook className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" />
          <Instagram className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" />
          <Twitter className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" />
          <Linkedin className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" />
          <Youtube className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" />
          {/* <Tiktok className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" /> */}
          {/* <Pinterest className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" /> */}
          <Mail className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" />
        </div>
      </section>

      {/* === Bottom Copyright === */}
      <div className="text-center text-gray-700 py-6 px-5 border-t border-white/30">
        ©All Blue Creations 2025. All rights reserved. &nbsp;
        <span className="cursor-pointer underline">Privacy policy</span> |{" "}
        <span className="cursor-pointer underline">Terms of use</span> |{" "}
        <span className="cursor-pointer underline">Site map</span>
      </div>
    </footer>
  );
};

export default FooterSection;
