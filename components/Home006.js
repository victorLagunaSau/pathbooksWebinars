import React, {useMemo, useState} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const Home006 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const [currentSlide, setCurrentSlide] = useState(0);

    const features = [
        {
            title: "LECTURA INTERACTIVA",
            description:
                "Libros de ficción con el objetivo de desarrollar el gusto por la lectura.",
            bgColor: "bg-azulpathbooks text-white-500",
            icon: (
                <img
                    src="/assets/lecturaInteractiva.png"
                    alt="Lectura Interactiva"
                    className="w-10 h-10 object-contain"
                />
            ),
        },
        {
            title: "CLÁSICOS LITERARIOS",
            description:
                "Colección de más de 300 lecturas clásicas que todos debemos conocer.",
            bgColor: "bg-red-600 text-white-500",
            icon: (
                <img
                    src="/assets/lecturaClasicos.png"
                    alt="Lectura Interactiva"
                    className="w-10 h-10 object-contain"
                />
            ),
        },
        {
            title: "ACADÉMICOS INTERACTIVOS",
            description:
                "Contenido de investigación, históricos y de aprendizaje de inglés que sirva como apoyo a las clases.",
            bgColor: "bg-green-600 text-white-500",
            icon: (
                <img
                    src="/assets/lecturaAcademicos.png"
                    alt="Lectura Interactiva"
                    className="w-10 h-10 object-contain"
                />
            ),
        },
        {
            title: "AUDIOPATHBOOKS",
            description:
                "Disfruta de audiolibros interactivos en español y en inglés. Muchos contenidos se pueden traducir entre ambos idiomas.",
            bgColor: "bg-yellow-600 text-white-500",
            icon: (
                <img
                    src="/assets/lecturaAudios.png"
                    alt="Lectura Interactiva"
                    className="w-10 h-10 object-contain"
                />
            ),
        },
    ];

    return (
        <div className="w-full py-20 bg-blue-50">
            <div className="container mx-auto px-6 md:px-12">
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
                            Contenido incluido
                        </h2>
                        <p className="mt-4 text-lg text-blue-800">
                            Cuatro formas de disfrutar y aprender con Pathbooks.
                        </p>
                    </motion.div>
                </ScrollAnimationWrapper>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((item, index) => (
                        <ScrollAnimationWrapper key={index}>
                            <motion.div
                                variants={scrollAnimation}
                                className={`p-8 rounded-xl shadow-md flex flex-col gap-4 ${item.bgColor} transition hover:scale-[1.02]`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-full">{item.icon}</div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                <p className="text-xl text-white-100">{item.description}</p>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home006;
