import { motion } from "framer-motion";
import {
  PartyPopper,
  Gift,
  Heart,
  Star,
  Ghost,
  Sparkles,
  Baby,
  Sun,
  ArrowRight,
} from "lucide-react";
import Image1 from "../../assets/Gallery/wedding.png";
import Image2 from "../../assets/Gallery/baby&kids.png";
import Image3 from "../../assets/Gallery/party.png";
import Image4 from "../../assets/Gallery/baby&kids1.png";
import Image5 from "../../assets/Gallery/trending.png";
import Image6 from "../../assets/Gallery/wedding1.png";
import Image7 from "../../assets/Gallery/wedding1.png";

export default function CelebrateMoments() {
  const celebrations = [
    { name: "Haldi ", icon: <Sun className="w-5 h-5" /> },
    { name: "Half Saree", icon: <Heart className="w-5 h-5" /> },
    { name: "Halloween", icon: <Ghost className="w-5 h-5" /> },
    { name: "BabyShower", icon: <Baby className="w-5 h-5" /> },
    { name: "Engagement", icon: <Gift className="w-5 h-5" /> },
    { name: "Graduation", icon: <Star className="w-5 h-5" /> },
    { name: "Festival", icon: <PartyPopper className="w-5 h-5" /> },
    { name: "Anniversary", icon: <Sparkles className="w-5 h-5" /> },
  ];

  const gallery = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const gallery2 = [Image5, Image4, Image3, Image2, Image1, Image6];

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 py-24 overflow-hidden">
      {/* === Glowing Gradient Overlay === */}
      <div className="absolute inset-0"></div>

{/* === Heading === */}
<motion.h2
  className="text-4xl md:text-5xl font-extrabold text-center md:text-center
             bg-gradient-to-r from-[#d66f77] to-black bg-clip-text text-transparent z-10"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Find More Reasons to Celebrate & Smile✨
</motion.h2>




      {/* === Scrollable Gallery === */}
      <motion.div
        className="flex gap-2 md:gap-6 overflow-x-auto w-full max-w-6xl px-2 pb-6 scrollbar-hide py-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {gallery.map((img, i) => (
          <motion.div
            key={i}
            className="min-w-[120px] md:min-w-[140px] h-[190px] md:h-[210px] rounded-3xl overflow-hidden shadow-lg relative bg-white/30 backdrop-blur-md border border-white/20"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img}
              alt={`event-${i}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-2 md:gap-6 overflow-x-auto w-full max-w-5xl px-2 pb-6 py-6 scrollbar-hide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {gallery2.map((img, i) => (
          <motion.div
            key={i}
            className="min-w-[120px] md:min-w-[140px] h-[190px] md:h-[210px] rounded-3xl overflow-hidden shadow-lg relative bg-white/30 backdrop-blur-md border border-white/20"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img}
              alt={`event-${i}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        ))}
      </motion.div>
      {/* === Celebration Buttons Grid === */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl z-10">
        {celebrations.map(({ name, icon }, index) => {
          const gradients = [
            {
              from: "from-pink-200",
              to: "to-pink-400",
              text: "text-pink-600",
              border: "border-pink-300",
            },
            {
              from: "from-blue-200",
              to: "to-blue-400",
              text: "text-blue-600",
              border: "border-blue-300",
            },
            {
              from: "from-purple-200",
              to: "to-purple-400",
              text: "text-purple-600",
              border: "border-purple-300",
            },
            {
              from: "from-yellow-200",
              to: "to-orange-300",
              text: "text-orange-600",
              border: "border-orange-300",
            },
            {
              from: "from-green-200",
              to: "to-emerald-400",
              text: "text-emerald-600",
              border: "border-emerald-300",
            },
            {
              from: "from-indigo-200",
              to: "to-indigo-400",
              text: "text-indigo-600",
              border: "border-indigo-300",
            },
            {
              from: "from-rose-200",
              to: "to-rose-400",
              text: "text-rose-600",
              border: "border-rose-300",
            },
            {
              from: "from-teal-200",
              to: "to-cyan-400",
              text: "text-cyan-600",
              border: "border-cyan-300",
            },
          ];
          const { from, to, text, border } =
            gradients[index % gradients.length];

          return (
            <motion.button
              key={index}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold 
        bg-gradient-to-r ${from} ${to}
        border ${border} border-opacity-70 
        text-white shadow-md hover:shadow-xl 
        transition-all duration-300 relative overflow-hidden`}
            >
              {/* Shiny border overlay */}
              <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none"></div>

              {/* Icon with matching color */}
              <span className={`${text}`}>{icon}</span>

              <span className="text-sm md:text-base text-gray-800 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                {name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
