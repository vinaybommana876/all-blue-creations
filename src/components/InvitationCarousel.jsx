import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "./../assets/invitation.png";

const invitationData = [
  { id: 1, image: Image, title: "Birthday" },
  { id: 2, image: Image, title: "Wedding" },
  { id: 3, image: Image, title: "Party" },
  { id: 4, image: Image, title: "Baby Shower" },
  { id: 5, image: Image, title: "Anniversary" },
  { id: 6, image: Image, title: "Wedding" },
  { id: 7, image: Image, title: "Party" },
  { id: 8, image: Image, title: "Baby Shower" },
  { id: 9, image: Image, title: "Anniversary" },
];

export default function InvitationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative w-full max-w-5xl flex justify-center items-center mt-10">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 z-20 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carousel */}
      <div className="relative w-full h-100 flex justify-center items-center">
        {invitationData.map((item, index) => {
          let offset = index - currentIndex;

          // Handle circular wrapping
          if (offset < -Math.floor(invitationData.length / 2)) offset += invitationData.length;
          if (offset > Math.floor(invitationData.length / 2)) offset -= invitationData.length;

          const isCenter = offset === 0;
          const scale = isCenter ? 1 : 0.7;
          const zIndex = isCenter ? 20 : 10;
          const translateX = offset * 100;
          const translateY = Math.abs(offset) * 20;

          // Gradually reduce opacity based on distance from center
          const opacity = isCenter ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.15);

          return (
            <div
              key={item.id}
              className="absolute w-64 h-100 rounded-xl shadow-lg transition-transform duration-500 overflow-hidden"
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
        className="absolute right-0 z-20 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
