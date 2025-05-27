import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonRegistrate from "./Buttons/ButtonRegistrate"; // ← nuevo botón adaptado al CTA

const Home002 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full overflow-hidden py-8 mb-16">
            <div className="container mx-auto px-4">
                {/* Título centrado */}
                <ScrollAnimationWrapper>
                    <motion.div className="mt-8 mx-auto text-center" variants={scrollAnimation}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                            ¿Quieres que tu hijo lea más? Empieza así.
                        </h2>
                    </motion.div>
                </ScrollAnimationWrapper>

                <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                    {/* Contenido de texto */}
                    <ScrollAnimationWrapper className="w-full md:w-1/2">
                        <motion.div className="text-center" variants={scrollAnimation}>
                            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-black-100">
                                Sabemos que no siempre es fácil motivarlos a leer… pero compartir historias puede marcar su camino:
                            </h2>
                                                        <p className="mt-4 text-lg md:text-xl text-gray-700 mb-4">
                                Fortalece su pensamiento, su autoestima y crea recuerdos que duran toda la vida.
                            </p>
                            <p className="mt-4 text-lg md:text-xl text-gray-700 mb-4">
                                Descubre la lectura como una herramienta para formar personas curiosas, seguras y empáticas.
                            </p>


                            <div className="mt-8 flex justify-center">
                                <ButtonRegistrate />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>

                    {/* Imagen */}
                    <ScrollAnimationWrapper className="w-full md:w-1/2 mt-4 mb-6 md:mt-0">
                        <motion.div className="flex justify-center" variants={scrollAnimation}>
                            <div className="relative w-full h-[300px] md:h-[500px]">
                                <Image
                                    src="/assets/home002.png"
                                    alt="Familia leyendo junta"
                                    width={570}
                                    height={600}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Home002;
