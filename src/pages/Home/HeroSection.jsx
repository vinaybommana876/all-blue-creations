import InvitationCarousel from "../../components/InvitationCarousel";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [confetti, setConfetti] = useState([]);

  const colors = ["#cb3f3fff", '#ffffff' ];
  // "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#f472b6"

  useEffect(() => {
    // Generate lots of hearts for party blast
    const interval = setInterval(() => {
      const newConfetti = Array.from({ length: 6 }).map(() => ({
        id: Date.now() + Math.random(),
        size: Math.random() * 40 + 20, // 10px - 30px
        color: colors[Math.floor(Math.random() * colors.length)],
        top: Math.random() * 60 + 10,
        left: Math.random() * 100,
        rotate: Math.random() * 360,
        xDir: Math.random() * 600 - 300, // horizontal blast (-300 to +300)
        yDir: Math.random() * 400 - 50,  // vertical blast (-50 to +400)
      }));
      setConfetti((prev) => [...prev, ...newConfetti]);
    }, 150);

    // Remove old hearts after 3s
    const cleanup = setInterval(() => {
      setConfetti((prev) => prev.filter((c) => Date.now() - c.id < 3000));
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center text-center px-6 pt-40 md:pt-50 overflow-hidden">
      <h2 className="text-4xl md:text-6xl z-3 font-extrabold bg-gradient-to-r from-[#e79098] to-black bg-clip-text text-transparent">
        Get Your Invitation Card 🎉
      </h2>

      <p className="mt-4 text-xs sm:text-sm z-3 md:text-base lg:text-base text-gray-700 max-w-full sm:max-w-xl md:max-w-2xl px-2 sm:px-0 leading-relaxed">
        We provide beautiful, easy-to-create digital invitations for all your
        special occasions. Whether it’s a small gathering or a big celebration,
        we help you make your events memorable with happy digital invitations
        tailored for birthdays, weddings, parties, and more.
      </p>

      <button
        className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 z-3 sm:py-3 rounded-full text-white text-sm sm:text-base md:text-lg 
        bg-gradient-to-r from-[#e79098] to-black hover:from-[#d66f77] hover:to-gray-800 transition-all duration-300 mb-4 md:mb-0"
      >
        Create Your Card
      </button>

      <InvitationCarousel />

      {/* Heart Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute heart"
          style={{
            width: `${c.size}px`,
            height: `${c.size}px`,
            top: `${c.top}%`,
            left: `${c.left}%`,
            color: c.color,
            transform: `rotate(${c.rotate}deg)`,
            animation: `blast 3s forwards`,
            "--xDir": `${c.xDir}px`,
            "--yDir": `${c.yDir}px`,
          }}
        >
          ♥
        </div>
      ))}

      {/* Inline CSS */}
      <style jsx>{`
        @keyframes blast {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--xDir), var(--yDir)) rotate(720deg);
            opacity: 0;
          }
        }
        .heart {
          font-size: 1em; /* overridden by width/height */
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
