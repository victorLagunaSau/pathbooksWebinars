import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonRegistrate from "./Buttons/ButtonRegistrate";
import { Users, School, BookOpen } from "lucide-react";

const profiles = [
    {
        title: "Para madres y padres",
        text: "¿Tu hijo está en edad escolar y quieres fomentar la lectura sin peleas ni culpas? Este espacio es para ti.",
        icon: <Users className="w-10 h-10 text-blue-600" />,
    },
    {
        title: "Para maestras y maestros",
        text: "Te damos herramientas para acompañar a las familias de forma más efectiva, con amor y sin presión.",
        icon: <School className="w-10 h-10 text-yellow-500" />,
    },
    {
        title: "Para escritores o mediadores",
        text: "Explora cómo puedes influir en la lectura infantil desde una nueva perspectiva, con propósito y decisión.",
        icon: <BookOpen className="w-10 h-10 text-purple-600" />,
    },
];

const Home005 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-blue-50 w-full py-20" id="audiencia">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="max-w-4xl mx-auto mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                            ¿Este webinar es para ti?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700">
                            Si alguna vez te has sentido frustrado porque tu hijo no lee, o quieres fomentar el hábito lector desde el amor y no desde la obligación...
                            <br />
                            Este espacio fue creado para ti.
                        </p>
                    </motion.div>
                </ScrollAnimationWrapper>

                {/* Tarjetas simultáneas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {profiles.map((item, index) => (
                        <ScrollAnimationWrapper key={index}>
                            <motion.div
                                variants={scrollAnimation}
                                className="bg-white rounded-xl shadow-lg px-6 py-8 border-t-8 border-yellow-400 hover:scale-105 transition-transform duration-300"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-base">{item.text}</p>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>

                {/* Llamado final */}
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="mt-12 max-w-3xl mx-auto"
                    >
                        <p className="text-md md:text-lg text-gray-700 mb-4">
                            No necesitas ser experta ni tener tiempo extra. Solo curiosidad, amor y el deseo de acompañar a tus hijos con más sentido.
                        </p>
                        <div className="mt-6">
                            <ButtonRegistrate />
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Home005;
