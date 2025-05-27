import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonRegistrate from "./Buttons/ButtonRegistrate"; // ← nuevo botón con mismo estilo base

const Home001 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="relative min-h-[800px] mt-16 md:mt-0 md:h-[600px] max-h-[600px] w-full overflow-hidden"
            id="home"
            style={{
                backgroundImage: "url('/assets/bgheader.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto h-full px-4">
                <div className="flex flex-col md:flex-row h-full items-center justify-between gap-8">
                    {/* Imagen */}
                    <ScrollAnimationWrapper className="order-1 md:order-1 w-full md:w-1/2">
                        <motion.div
                            className="flex justify-center md:justify-start"
                            variants={scrollAnimation}
                        >
                            <div className="relative w-[280px] h-[280px] sm:w-[570px] sm:h-[500px]">
                                <Image
                                    src="/assets/home001.png"
                                    alt="Webinar de lectura para padres"
                                    width={570}
                                    height={600}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>

                    {/* Texto */}
                    <ScrollAnimationWrapper className="order-2 md:order-2 w-full md:w-1/2">
                        <motion.div
                            className="text-center md:text-left"
                            variants={scrollAnimation}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-500">
                                Leer en familia deja<span className="text-yellow-500"> huellas</span> que duran toda la vida
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-white-100">
                                Este es un espacio para quienes ven en la lectura una herramienta para crecer, comprenderse y descubrir todos los beneficios que aporta a las infancias.
                            </p>
                            <p className="mt-4 text-xl md:text-2xl text-white-100 font-semibold">
                                Un webinar gratuito de 45 minutos para reconectar con la lectura en casa.
                            </p>

                            <div className="mt-8 flex justify-center md:justify-start">
                                <ButtonRegistrate />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Home001;
