import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Lightbulb, HeartHandshake, Wrench, BookOpen, Hand } from "lucide-react"; // íconos existentes

const Home003 = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white w-full overflow-hidden py-12 mt-8 mb-16" id="porqueasistir">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <motion.div className="mx-auto text-center mb-10 mt-10" variants={scrollAnimation}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              ¿Por qué asistir a este webinar?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Porque la lectura puede convertirse en tu mejor aliada para conectar, comprender y motivar sin conflictos.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <ScrollAnimationWrapper className="w-full md:w-1/2 mt-6 md:mt-0">
            <motion.div className="flex justify-center" variants={scrollAnimation}>
              <div className="relative w-full h-[300px] md:h-[500px]">
                <Image
                  src="/assets/home003.png"
                  alt="Lectura interactiva"
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <motion.div variants={scrollAnimation} className="space-y-6">
              <div className="bg-white-500 rounded-xl shadow-lg p-5 border-l-4 border-yellow-400 flex items-start gap-4">
                <Lightbulb className="text-yellow-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-800">Sabes que leer es importante, pero no sabes cómo motivarlo</h4>
                  <p className="text-gray-700 mt-1">Descubre estrategias efectivas y sin conflictos para inspirar a tu hijo a leer más.</p>
                </div>
              </div>

              <div className="bg-white-500 rounded-xl shadow-lg p-5 border-l-4 border-red-300 flex items-start gap-4">
                <HeartHandshake className="text-red-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-800">Validamos lo que sientes</h4>
                  <p className="text-gray-700 mt-1">La frustración, el cansancio y las dudas son reales. Aquí te acompañamos sin juicios.</p>
                </div>
              </div>

              <div className="bg-white-500 rounded-xl shadow-lg p-5 border-l-4 border-green-400 flex items-start gap-4">
                <Wrench className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-800">Herramientas prácticas desde hoy</h4>
                  <p className="text-gray-700 mt-1">Llévate recursos concretos que puedes aplicar en casa para mejorar la experiencia lectora.</p>
                </div>
              </div>

              <div className="bg-white-500 rounded-xl shadow-lg p-5 border-l-4 border-blue-400 flex items-start gap-4">
                <BookOpen className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-800">La lectura como vínculo, no batalla</h4>
                  <p className="text-gray-700 mt-1">Te mostraremos cómo convertir la lectura en un momento de conexión familiar.</p>
                </div>
              </div>

              <div className="bg-white-500 rounded-xl shadow-lg p-5 border-l-4 border-orange-400 flex items-start gap-4">
                <Hand className="text-orange-400 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-800">Conoce Pathbooks sin presión</h4>
                  <p className="text-gray-700 mt-1">Te presentaremos una opción emocional y educativa, sin ventas ni obligaciones.</p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home003;
