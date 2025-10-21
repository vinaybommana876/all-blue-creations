import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "./../assets/invitation.png";
import Image1 from "./../assets/baby&kids.png";
import Image2 from "./../assets/wedding.png";
import Image3 from "./../assets/partys.png";
import Image4 from "./../assets/wedding1.png"
import Image5 from "./../assets/wedding2.png"
import Image6 from "./../assets/greetings.png"


const invitationData = [
  { id: 1, image: Image1, title: "Birthday" },
  { id: 2, image: Image2, title: "Wedding" },
  { id: 3, image: Image3, title: "Party" },
  { id: 4, image: Image4, title: "Baby Shower" },
  { id: 5, image: Image6, title: "Anniversary" },
  { id: 6, image: Image2, title: "Wedding" },
  { id: 7, image: Image3, title: "Party" },
  { id: 8, image: Image4, title: "Baby Shower" },
  { id: 9, image: Image5, title: "Anniversary" },
];

export default function InvitationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? invitationData.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === invitationData.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl flex justify-center items-center -mt-10 md:mt-10">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute md:-left-10 left-2 z-2 p-0 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/80 hover:scale-110 transition-all duration-300"
      >
        <ChevronLeft size={isMobile ? 30 : 40} className="text-[#e79098]" />
      </button>


      {/* Carousel */}
      <div className="relative w-full h-90 lg:h-120 flex justify-center items-center overflow-hidden">
        {invitationData.map((item, index) => {
          let offset = index - currentIndex;

          // Handle circular wrapping
          if (offset < -Math.floor(invitationData.length / 2))
            offset += invitationData.length;
          if (offset > Math.floor(invitationData.length / 2))
            offset -= invitationData.length;

          const isCenter = offset === 0;
          const scale = isCenter ? 1 : isMobile ? 0.8 : 0.7;
          const zIndex = isCenter ? 20 : 10;

          // Reduce distance between cards on mobile
          const translateX = offset * (isMobile ? 40 : 100);
          const translateY = Math.abs(offset) * (isMobile ? 10 : 20);

          const opacity = isCenter ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.15);

          return (
            <div
              key={item.id}
              className={`absolute rounded-2xl shadow-lg transition-transform duration-500 overflow-hidden ${isMobile ? "w-44 h-65" : "w-72 h-105"
                }`}
              style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute md:-right-10 right-2 z-2 p-0 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/80 hover:scale-110 transition-all duration-300"
      >

        <ChevronRight size={isMobile ? 30 : 40} className="text-[#e79098]" />
      </button>
    </div>
  );
}
