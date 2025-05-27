import React, {useMemo} from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ButtonRegistrate from "./Buttons/ButtonRegistrate";
import {BookOpenCheck, Sparkles, Brain, Smartphone, Users} from "lucide-react";

const Home004 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-white w-full pt-8 pb-16 md:pt-20 md:pb-20" id="queaprenderas">
            <div className="container mx-auto px-6 md:px-12">
                <div>
                    <div
                        variants={scrollAnimation}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        {/* Título con degradado */}
                        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-10 leading-tight">
                            ¿Qué aprenderás en este espacio?
                        </h2>

                        {/* Contenido listado */}
                        <div className="text-left text-gray-800 max-w-3xl space-y-6 text-lg md:text-xl font-medium">
                            <div className="flex items-start gap-4">
                                <BookOpenCheck className="w-6 h-6 text-blue-600 mt-1"/>
                                <p>
                                    <span className="font-semibold text-blue-900">¿Por qué a tantos niños no les gusta leer?</span><br/>
                                    Exploramos las causas comunes para entender cómo motivarlos de verdad.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Sparkles className="w-6 h-6 text-yellow-500 mt-1"/>
                                <p>
                                    <span className="font-semibold text-blue-900">Habilidades que tu hijo desarrollará leyendo con sentido.</span><br/>
                                    Desde la empatía hasta la resiliencia emocional.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Brain className="w-6 h-6 text-purple-500 mt-1"/>
                                <p>
                                    <span className="font-semibold text-blue-900">Lo que nadie te dice: leer también enseña a decidir.</span><br/>
                                    Fomentamos pensamiento crítico a través de historias.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Smartphone className="w-6 h-6 text-pink-500 mt-1"/>
                                <p>
                                    <span className="font-semibold text-blue-900">¿Tecnología enemiga? No, si sabes cómo usarla.</span><br/>
                                    Aprende a usar lo digital como aliado lector.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Users className="w-6 h-6 text-green-600 mt-1"/>
                                <p>
                                    <span className="font-semibold text-blue-900">¿Qué puedes hacer tú como madre o padre?</span><br/>
                                    Te damos acciones concretas para apoyar desde casa.
                                </p>
                            </div>
                        </div>

                        {/* Cierre emocional */}
                        <p className="mt-8 text-md md:text-lg text-gray-600 max-w-2xl italic">
                            Todo esto sin juicios ni fórmulas mágicas. Solo herramientas reales para acompañar a tus
                            hijos en su camino lector.
                        </p>

                        {/* Botón */}
                        <div className="mt-10">
                            <ButtonRegistrate/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home004;
