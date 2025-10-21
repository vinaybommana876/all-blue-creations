import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  { name: "Emily Johnson", avatar: "https://i.pravatar.cc/100?img=32", rating: 5, review: "Amazing platform! The invitations are so easy to customize, and my guests loved them!" },
  { name: "Michael Smith", avatar: "https://i.pravatar.cc/100?img=12", rating: 4, review: "Very user-friendly. I was able to send wedding invites in minutes. Highly recommend!" },
  { name: "Sophia Lee", avatar: "https://i.pravatar.cc/100?img=45", rating: 5, review: "Beautiful designs and smooth experience. My birthday invite looked stunning!" },
  { name: "David Brown", avatar: "https://i.pravatar.cc/100?img=23", rating: 4, review: "Great service and simple to use. The RSVP tracking feature is super handy!" },
  { name: "Olivia Davis", avatar: "https://i.pravatar.cc/100?img=56", rating: 5, review: "Perfect for my party invitations! Loved how easy it was to share with friends." },
  { name: "James Wilson", avatar: "https://i.pravatar.cc/100?img=18", rating: 5, review: "Excellent experience. Easy to use and professional looking invites." },
];

const TestimonialSection = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({ left: direction === "left" ? -width : width, behavior: "smooth" });
  };

  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="py-5 px-4 md:px-12">
      {/* Overall Rating */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#d66f77] to-black bg-clip-text text-transparent">
          Our Users Love Us
        </h2>
        <div className="flex justify-center items-center gap-2">
          <span className="text-3xl font-bold text-gray-900">{averageRating}</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 ${i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-gray-700">out of 5</span>
        </div>
        <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 mt-2 -mb-16">{testimonials.length}+ reviews</p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-2">
        {/* Arrows */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border rounded-full hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border rounded-full hover:bg-white/30 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-2 md:gap-5 overflow-x-auto scroll-smooth pb-16 scrollbar-hide"
        >
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-1/2 md:w-1/4 p-6 rounded-2xl border border-white/40 shadow-lg hover:shadow-2xl transition-shadow bg-white/20 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={testi.avatar}
                alt={testi.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white/50"
              />
              <h3 className="text-lg font-semibold text-gray-900 text-center">{testi.name}</h3>
              <div className="flex justify-center mt-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`w-4 h-4 ${i < testi.rating ? "text-yellow-400" : "text-gray-400"}`}
                  />
                ))}
              </div>
              <p className="text-gray-900 text-sm text-center">{testi.review}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar for webkit */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
