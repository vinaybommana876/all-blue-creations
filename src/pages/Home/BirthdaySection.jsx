import CurvedLoop from "../../components/CurvedLoop";
import { ArrowRight, Sparkles } from "lucide-react";
import BirthdayImage from "../../assets/wedding.png"; // change this path
import { motion } from "framer-motion";


export default function BirthdaySection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-10 overflow-hidden">
      {/* === Curved Scrolling Text Background === */}
      <div className="absolute top-50 left-0 w-full h-[600px] flex items-center text-black justify-center opacity-100 z-0">
        <CurvedLoop
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
          speed={3}
          curveAmount={-660}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </div>

{/* === Left Side: Image with Magical Stars & Gradient Glow === */}
<div className="w-full md:w-1/2 py-10 flex justify-center items-center relative">
  {/* === Floating Stars === */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => {
      const size = Math.random() * 20 + 6;
      const duration = Math.random() * 5 + 3;
      const color = `hsl(${Math.random() * 50 + 320}, 80%, 70%)`;
      return (
        <motion.div
          key={i}
          className="absolute rounded-full shadow-lg"
          style={{
            width: size,
            height: size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: color,
            opacity: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -10],
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      );
    })}
  </div>

  {/* === Floating Image Card with Realistic Shadow === */}
  <motion.div
    className="relative z-20 flex flex-col items-center"
    animate={{
      y: [0, -15, 0], // floating motion
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={BirthdayImage}
      alt="Birthday Celebration"
      className="rounded-4xl shadow-2xl w-72 md:w-80 object-cover"
    />

    {/* === Rounded Shadow simulating floating card === */}
    <motion.div
      className="mt-2 w-64 md:w-72 h-6 bg-black rounded-3xl opacity-20"
      animate={{
        scale: [1, 1.1, 1], // shadow grows/shrinks subtly as card floats
        opacity: [0.15, 0.25, 0.15], // subtle opacity change
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ filter: "blur(12px)" }} // smooth blur for realistic shadow
    ></motion.div>
  </motion.div>
</div>


      {/* === Right Side: Text + Buttons === */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left z-10">
        {/* Title */}
       {/* Title */}
<h2 className="text-4xl md:text-5xl p-2 font-extrabold bg-gradient-to-r from-[#e79098] to-black bg-clip-text text-transparent mb-6">
  Your Birthday, Our Magic ✨
</h2>

{/* Suggestion Buttons */}
<div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
  {[
    "Invitation Cards",
    "Wish Cards",
    "Party Cards",
    "Thank You Cards",
  ].map((text) => (
    <button
      key={text}
      className="px-4 py-1.5 text-sm rounded-full font-semibold 
      text-[#e79098] border border-[#e79098]/40 backdrop-blur-md bg-white/40 
      hover:bg-[#e79098]/10 transition-all duration-300 shadow-sm"
    >
      {text}
    </button>
  ))}
</div>

{/* Description */}
<p className="text-gray-700 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
  Celebrate your special day with love, joy, and a touch of magic! Our beautifully crafted birthday 
  invitations and cards help you share smiles, create unforgettable memories, and make every moment 
  truly magical. Let us turn your birthday into a celebration that your heart will remember forever ✨.
</p>


        {/* Action Buttons */}
        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          {/* Button 1 - Gradient Glow Style */}
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold 
      bg-gradient-to-r from-[#e79098] to-black hover:from-[#d66f77] hover:to-gray-800 
      transition-all duration-300 shadow-lg hover:shadow-[#e79098]/40"
          >
            <Sparkles className="w-5 h-5" /> Create Your Card
          </button>

          {/* Button 2 - Glassmorphism Outline Style */}
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold 
      text-[#e79098] border border-[#e79098]/40 backdrop-blur-md bg-white/40 
      hover:bg-[#e79098]/10 transition-all duration-300 shadow-sm"
          >
            <ArrowRight className="w-5 h-5" /> Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
