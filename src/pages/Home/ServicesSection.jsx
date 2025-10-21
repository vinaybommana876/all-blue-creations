import React from "react";
import { Download, Printer, Share2, Settings } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Download",
    description:
      "Get a digital copy of your invitation by downloading it to your device.",
    icon: <Download className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Print",
    description:
      "Order prints with FREE shipping or download a high-quality PDF and print at home.",
    icon: <Printer className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Share",
    description:
      "Spread the word on social media, by text message, or email to friends and family.",
    icon: <Share2 className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Manage",
    description:
      "Create an online event page to collect RSVPs and manage all the little details!",
    icon: <Settings className="w-10 h-10 text-pink-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* === Heading === */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#d66f77] to-black bg-clip-text text-transparent z-10 mb-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Endless ways to spread the joy
        </motion.h2>
        <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-base text-gray-700 max-w-full sm:max-w-xl md:max-w-2xl px-2 md:px-0 mx-auto text-center leading-relaxed">
          We provide beautiful, easy-to-create digital invitations for you
        </p>

        <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white-800 dark:text-Black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-700 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
