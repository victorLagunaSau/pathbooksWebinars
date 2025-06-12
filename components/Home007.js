import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import {
  Gift,
  BookOpen,
  Headphones,
  Lightbulb,
  HeartHandshake,
  Wrench,
} from "lucide-react";

const Home007 = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const items = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-900" />,
      text: "Libros interactivos",
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-900" />,
      text: "Audiolibros con decisiones",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-900" />,
      text: "Cuestionarios de comprensión lectora",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-blue-900" />,
      text: "Biografías interactivas",
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-900" />,
      text: "¡Y mucho más para leer, jugar y aprender juntos!",
    },
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
                <Gift className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
              🎁 Regístrate al webinar y recibe{" "}
              <span className="text-yellow-500 underline">15 días GRATIS</span> en Pathbooks
            </h2>
            <p className="mt-6 text-lg text-blue-800">
              Una forma divertida y cercana de vivir la lectura en casa.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div
                variants={scrollAnimation}
                className="bg-white-500 p-6 rounded-xl shadow-md flex items-center gap-4 hover:scale-[1.03] transition-transform"
              >
                <div className="bg-blue-100 p-3 rounded-full">{item.icon}</div>
                <p className="text-blue-900 font-semibold text-lg">{item.text}</p>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white-500 font-bold py-3 px-8 rounded-full text-lg shadow-md transition">
            ¡Quiero mis 15 días gratis!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home007;
