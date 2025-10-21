import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Logo from "../../assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="text-gray-900">
      {/* === Newsletter Section === */}
      <section className="max-w-6xl mx-auto py-12 px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Make every occasion count</h2>
        <p className="text-gray-700 mb-6">
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
      <section className="max-w-6xl mx-auto py-12 px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Invitations */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Invitations</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Wedding invites</li>
            <li>Save the date</li>
            <li>Engagement party</li>
            <li>Bridal shower</li>
            <li>RSVP cards</li>
            <li>Bachelorette Party</li>
          </ul>
        </div>

        {/* Birthday */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Birthday</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Birthday cards</li>
            <li>Milestone</li>
            <li>1st Birthday</li>
            <li>Kids</li>
            <li>Surprise</li>
          </ul>
        </div>

        {/* Baby & Kids */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Baby & Kids</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Baby shower</li>
            <li>Gender Reveal</li>
            <li>Baptism & Christening</li>
            <li>Baby sprinkle</li>
            <li>Birth announcements</li>
            <li>Communion</li>
          </ul>
        </div>

        {/* Party & Professional */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Party & Professional Events</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Housewarming</li>
            <li>Graduation Party</li>
            <li>Dinner Party</li>
            <li>Anniversary</li>
            <li>Retirement & Farewell</li>
            <li>Company Events</li>
          </ul>
        </div>
      </section>

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
      <div className="text-center text-gray-700 py-6 border-t border-white/30">
        ©All Blue Creations 2025. All rights reserved. &nbsp;
        <span className="cursor-pointer underline">Privacy policy</span> |{" "}
        <span className="cursor-pointer underline">Terms of use</span> |{" "}
        <span className="cursor-pointer underline">Site map</span>
      </div>
    </footer>
  );
};

export default FooterSection;
