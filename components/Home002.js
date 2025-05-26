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
                        <h1 className="text-4xl md:text-6xl font-bold text-primary">
                            Redescubre la lectura en familia
                        </h1>
                    </motion.div>
                </ScrollAnimationWrapper>

                <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                    {/* Contenido de texto */}
                    <ScrollAnimationWrapper className="w-full md:w-1/2">
                        <motion.div className="text-center" variants={scrollAnimation}>
                            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-black-100">
                                Un espacio para madres y padres que desean leer con amor
                            </h2>
                            <p className="mt-4 text-lg md:text-xl text-gray-700 mb-4">
                                Sabemos lo frustrante que puede ser querer ayudar a tu hijo a leer más…
                                Pero existe otra forma. Una más amorosa. Más respetuosa. Y mucho más efectiva.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700">
                                ✨ Te invitamos a un espacio cálido donde redescubrirás la lectura como lo que siempre debió ser:
                                <br />
                                <span className="font-semibold text-black-100">Un momento de conexión, crecimiento y disfrute en familia.</span>
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
