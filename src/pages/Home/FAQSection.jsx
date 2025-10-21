import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What types of invitations can I create?", answer: "You can create invitations for birthdays, weddings, parties, baby showers, anniversaries, and more." },
  { question: "Is it free to create digital invitations?", answer: "Yes! You can create and download digital invitations for free. Some premium templates may be available at a cost." },
  { question: "Can I print the invitations?", answer: "Absolutely! You can download a high-quality PDF version and print it at home or via a printing service." },
  { question: "Can I share invitations on social media?", answer: "Yes! You can share invitations directly via WhatsApp, Facebook, email, or any messaging platform." },
  { question: "Do I need an account to create invitations?", answer: "Creating invitations is easy and can be done without signing up. But creating an account allows you to manage all your events in one place." },
  { question: "Can I customize the designs?", answer: "Yes! You can change colors, text, images, and even add your own logos or photos to personalize your invitations." },
  { question: "Are the invitations mobile-friendly?", answer: "Absolutely. All invitations are responsive and look great on mobile devices, tablets, and desktops." },
  { question: "Can I track RSVPs online?", answer: "Yes! By creating an online event page, you can easily collect and manage RSVPs for your guests." },
  { question: "Can I edit invitations after sharing?", answer: "Yes, you can edit your invitations anytime. Changes are reflected instantly if shared via online links." },
  { question: "Is my information safe?", answer: "We take privacy seriously. Your information and event details are securely stored and never shared without your consent." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into 2 columns for desktop
  const mid = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, mid);
  const rightFAQs = faqs.slice(mid);

  const renderFAQColumn = (faqList) =>
    faqList.map((faq, index) => (
      <div key={index} className="border-b border-gray-700 py-4">
        <div
          onClick={() => toggleFAQ(faqs.indexOf(faq))}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="text-gray-900 font-medium">{faq.question}</h3>
          <motion.div
            animate={{ rotate: openIndex === faqs.indexOf(faq) ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </div>
        <AnimatePresence>
          {openIndex === faqs.indexOf(faq) && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700 mt-2 text-sm"
            >
              {faq.answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ));

  return (
    <section className="py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#d66f77] to-black bg-clip-text text-transparent py-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto">
          Click a question to see the answer. All answers are designed to help you understand our service quickly.
        </p>
      </div>

      {/* FAQ Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 max-w-6xl mx-auto">
        <div>{renderFAQColumn(leftFAQs)}</div>
        <div>{renderFAQColumn(rightFAQs)}</div>
      </div>
    </section>
  );
};

export default FAQSection;
