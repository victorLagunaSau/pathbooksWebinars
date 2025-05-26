import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Home003 = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white w-full overflow-hidden py-12 mt-8 mb-16" id="metodologiacomplemento">
      <div className="container mx-auto px-4">
        {/* Encabezado principal */}
        <ScrollAnimationWrapper>
          <motion.div className="mx-auto text-center mb-10" variants={scrollAnimation}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              Leer nunca fue tan emocionante
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Nuestra plataforma transforma la lectura en una experiencia interactiva donde los jóvenes lectores deciden cómo se desarrolla la historia.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Contenido principal */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Imagen al lado contrario del texto */}
          <ScrollAnimationWrapper className="w-full md:w-1/2 mt-6 md:mt-0">
            <motion.div className="flex justify-center" variants={scrollAnimation}>
              <div className="relative w-full h-[300px] md:h-[500px]">
                <Image
                  src="/assets/home003.png" // Asegúrate de colocar tu imagen final con ese nombre
                  alt="Lectura interactiva"
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Texto de beneficios */}
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <motion.div variants={scrollAnimation}>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4">
                ¿Por qué la lectura con decisiones impacta más?
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-400">
                  <h4 className="text-xl font-semibold text-blue-800">Estimula el pensamiento crítico</h4>
                  <p className="text-gray-700 mt-2">
                    Al elegir caminos en la historia, los lectores evalúan consecuencias, desarrollando habilidades analíticas clave desde una edad temprana.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-400">
                  <h4 className="text-xl font-semibold text-blue-800">Aumenta la concentración</h4>
                  <p className="text-gray-700 mt-2">
                    La interactividad mantiene a los niños enfocados por más tiempo, mejorando la retención y comprensión de lectura.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-400">
                  <h4 className="text-xl font-semibold text-blue-800">Fomenta la creatividad</h4>
                  <p className="text-gray-700 mt-2">
                    Elegir múltiples finales alimenta la imaginación, permitiendo a los lectores imaginar distintos mundos y desenlaces.
                  </p>
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
