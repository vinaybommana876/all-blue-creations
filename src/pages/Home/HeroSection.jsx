import InvitationCarousel from "../../components/InvitationCarousel";
export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen px-6 pt-24 md:pt-72">
      <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#e79098] to-black bg-clip-text text-transparent">
        Get Your Invitation Card 🎉
      </h2>

      <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-base text-gray-700 max-w-full sm:max-w-xl md:max-w-2xl px-2 sm:px-0 leading-relaxed">
        We provide beautiful, easy-to-create digital invitations for all your
        special occasions. Whether it’s a small gathering or a big celebration,
        we help you make your events memorable with happy digital invitations
        tailored for birthdays, weddings, parties, and more.
      </p>

      <button
        className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-sm sm:text-base md:text-lg 
  bg-gradient-to-r from-[#e79098] to-black hover:from-[#d66f77] hover:to-gray-800 transition-all duration-300"
      >
        Create Your Card
      </button>

      {/* Carousel Component */}
      <InvitationCarousel />
    </section>
  );
}
