import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Birthday",
    "Wedding",
    "Baby & Kids",
    "Parties",
    "Trending",
    "Contact",
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 fixed top-0 left-0 z-50">
      {/* Left Section: Logo + Brand */}
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

      {/* Right Section */}
      <div className="flex items-center gap-5 md:gap-8">
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li
              key={link}
              className="text-gray-800 text-lg cursor-pointer transition-colors duration-300 hover:text-[#e79098]"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Search Icon */}
        <Search
          size={22}
          className="cursor-pointer text-gray-700 hover:text-[#e79098] transition-colors duration-300"
        />

        {/* Login Button */}
        <button className="px-5 py-2 rounded-xl backdrop-blur-md bg-white/40 border border-white/20 text-gray-800 font-semibold hover:bg-white/60 hover:text-[#e79098] transition-all duration-300 shadow-sm">
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer text-gray-700 hover:text-[#e79098] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/20 backdrop-blur-lg border-t border-white/30 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-5 py-6">
            {links.map((link) => (
              <li
                key={link}
                className="text-gray-800 text-lg cursor-pointer hover:text-[#e79098] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
