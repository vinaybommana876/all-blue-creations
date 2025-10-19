// Loader.jsx
import React from "react";
import Logo from "../assets/prelogo.png"; // your logo

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Glassy blurred background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>

      {/* Loader content */}
      <div className="relative w-24 h-24"> {/* relative container for spinner + logo */}
        {/* Spinner */}
        <div
          className="absolute inset-0 m-auto animate-spin rounded-full border-t-4 border-b-4 h-24 w-24"
          style={{ borderColor: "#eab7bd transparent #eab7bd transparent" }}
        ></div>

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="absolute inset-0 m-auto h-23 w-23"
          style={{ opacity: 0, animation: "fadeIn 1s ease-in forwards" }}
        />
      </div>

      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
