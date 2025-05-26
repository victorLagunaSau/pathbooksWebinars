import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Image from "next/image";
import ButtonRegistrate from "./Buttons/ButtonRegistrate"; // Cambio del botón para mantener consistencia del CTA

const Home004 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-white w-full pt-8 pb-16 md:pt-20 md:pb-20" id="regalo-lector">
            <div className="container mx-auto px-6 md:px-12">
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        {/* Imagen central */}
                        <div className="w-full max-w-md mb-6 md:mb-10">
                            <Image
                                src="/assets/home004.png"
                                alt="Lectura interactiva en tablet"
                                width={570}
                                height={500}
                                className="object-contain mx-auto"
                                priority
                            />
                        </div>

                        {/* Título */}
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
                            ¿Qué aprenderás en este espacio?
                        </h2>

                        {/* Contenido listado */}
                        <div className="text-left text-gray-700 max-w-3xl space-y-4 text-lg md:text-xl">
                            <p>📖 ¿Por qué a tantos niños no les gusta leer?</p>
                            <p>✨ Habilidades que tu hijo desarrollará leyendo con sentido.</p>
                            <p>🧠 Lo que nadie te dice: leer también enseña a decidir.</p>
                            <p>📱 ¿Tecnología enemiga? No, si sabes cómo usarla.</p>
                            <p>👨‍👩‍👧‍👦 ¿Qué puedes hacer tú como madre o padre?</p>
                        </div>

                        {/* Cierre emocional */}
                        <p className="mt-6 text-md md:text-lg text-gray-600 max-w-2xl italic">
                            Todo esto sin juicios ni fórmulas mágicas. Solo herramientas reales para acompañar a tus hijos en su camino lector.
                        </p>

                        {/* Botón */}
                        <div className="mt-10 flex justify-center">
                            <ButtonRegistrate />
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Home004;
