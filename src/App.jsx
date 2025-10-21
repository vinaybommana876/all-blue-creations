import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/Home/HeroSection";
import DesignSection from "./pages/Home/DesignSection";
import Loader from "./components/Loader";
import Logo from "./assets/prelogo.png";
import BirthdaySection from "./pages/Home/BirthdaySection";
import WeddingSection from "./pages/Home/WeddingSection";
import BabyKidsSection from "./pages/Home/BabyKidsSection";
import PartySection from "./pages/Home/PartySection";
import CelebrateMoments from "./pages/Home/CelebrateMoments";
import ServicesSection from "./pages/Home/ServicesSection";
import FAQSection from "./pages/Home/FAQSection";
import TestimonialSection from "./pages/Home/TestimonialSection";
import FooterSection from "./pages/Home/FooterSection";

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true); // for initial preloader
  const [loading, setLoading] = useState(false); // for Loader component

  // Initial preloader
  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simulate async action
  };

  // Show initial preloader
  if (initialLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black relative">
        <div
          className="animate-spin rounded-full h-26 w-26 border-t-4 border-b-4"
          style={{ borderColor: "#eab7bd transparent #eab7bd transparent" }}
        ></div>

        <img
          src={Logo}
          alt="Logo"
          className="absolute h-25 w-25"
          style={{
            opacity: 0,
            animation: "fadeIn 1s ease-in forwards",
          }}
        />

        <style>
          {`
            @keyframes fadeIn {
              30% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}
        </style>
      </div>
    );
  }

  // Main app
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-[#eab7bd] relative">
      {loading && <Loader />} {/* Loader component */}
      <Navbar />
      <HeroSection />
      <DesignSection />
      <div className="mb-10 md:mb-10">
        <BirthdaySection />
      </div>
      <div className="mb-10 md:mb-10">
        <WeddingSection />
      </div>
      <div className="mb-10 md:mb-10">
        <BabyKidsSection />
      </div>
      <div className="-mb-10 md:mb-10">
        <PartySection />
      </div>
      <div className="mb-0 md:mb-0">
        <CelebrateMoments />
      </div>
      <ServicesSection /> 
      <FAQSection />
      <TestimonialSection />
      <FooterSection />
      {/* <button
        onClick={handleAction}
        className="mt-10 mx-auto px-6 py-3 bg-pink-300 rounded-lg hover:bg-pink-400 transition"
      >
        Open Something
      </button> */}
    </div>
  );
}
