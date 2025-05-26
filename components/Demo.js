import React, {useState, useEffect, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";


const covers = [
    {
        id: "H3Ts3cmPqN3BIyf0nUUS",
        titulo: "Pelea de comida",
        edad: "5 - 7 años",
        descripcion: "Libro corto para aprender de las consecuencias de una forma divertida."
    },
    {
        id: "lBLbg074McAOAGtwt919",
        titulo: "Raúl el veloz",
        edad: "7 - 10 años",
        descripcion: "Ayudará a entender por qué nos enojamos y qué podemos hacer para gestionar nuestras emociones."
    },

    {
        id: "dHhRLVNL0VwJIEAycIDw",
        titulo: "Jeff, la mangosta",
        edad: "Más de 10 años",
        descripcion: "Jeff aprenderá que algunas cosas son parte de la vida… pero también que siempre hay sonrisas después de la tristeza."
    }
];

const ExperienceDemo = () => {
    const [step, setStep] = useState(1);
    const [mockupId, setMockupId] = useState("loading");
    const [pageSize, setPageSize] = useState({width: 0, height: 0});
    const demoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(pageSize.width <= 640);

    useEffect(() => {
        setIsMobile(pageSize.width <= 640);
        const updatePageSize = () => {
            setPageSize({width: window.innerWidth, height: window.innerHeight});
        };
        updatePageSize();
        window.addEventListener("resize", updatePageSize);
        return () => window.removeEventListener("resize", updatePageSize);

    }, [pageSize.width]);

    const handleStepChange = (newStep) => {
        setStep(newStep);
        setTimeout(() => {
            demoRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
        }, 100);
    };

    const transition = {duration: 0.6, ease: "easeInOut"};
    const variants = {
        initial: {opacity: 0, y: 30},
        animate: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -100}
    };

    const MainButton = ({children, onClick}) => (
        <button
            className="w-full sm:w-auto px-12 py-4 sm:text-xl rounded-full hover:text-blue-800 transition-all bg-blue-100 hover:bg-blue-200 text-blue-700 text-lg font-bold border-4 border-blue-400 shadow-sm shadow-black-500 "
            onClick={onClick}
        >
            {children}
        </button>
    );

    return (
        <div id="demo" ref={demoRef} className="w-full bg-blue-600">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.section
                        key="step1"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transition}
                        /* 👇  min-h-screen para ocupar toda la altura  */
                        className="flex flex-col items-center text-center px-4 pt-12 md:pt-24 bg-blue-600"
                    >
                        <h3 className="text-4xl md:text-6xl font-bold text-white-100 mb-8 mt-10">
                            ¿Te gustaría probar la lectura interactiva?
                        </h3>
                        <h1 className="text-lg md:text-2xl max-w-xl text-white-500 mb-8">
                            En Pathbooks, queremos que vivas esta experiencia y descubras cómo la interactividad puede
                            transformar la forma en que los niños se conectan con la lectura.
                        </h1>
                        <h1 className="text-lg md:text-lg font-bold text-gray-100 mb-0">
                            Recomendacion:
                        </h1>
                        <h1 className="text-lg md:text-lg  text-gray-100 mb-8">
                            Si es tu primera lectura, acompaña a tu hijo mientras exploran juntos.
                        </h1>
                        <h1 className="text-lg md:text-xl text-gray-100 mb-8">
                            Cuando estés listo, haz clic en el botón para vivir la experiencia Pathbooks.
                        </h1>

                        <MainButton onClick={() => handleStepChange(2)}>
                            Quiero vivir la experiencia
                        </MainButton>
                        <img
                            src="/assets/home006.png"
                            alt="Demo"
                            className="w-4/5 max-w-xl mt-10"
                        />
                    </motion.section>
                )}


                {step === 2 && (
                    <motion.section
                        key="step2"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transition}
                        className="flex flex-col items-center text-center px-4 pt-12 md:pt-24 bg-blue-700"
                    >
                        <h3 className="text-4xl md:text-6xl font-bold text-white-100 mb-8 mt-6">
                            Selecciona una lectura para comenzar
                        </h3>
                        <h1 className="text-lg md:text-2xl max-w-xl text-white-500 mb-8">
                            Explora estas 3 lecturas. Sugerimos elegir según la edad, aunque todas pueden disfrutarse.
                        </h1>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 sm:max-w-4xl max-w-2xl mx-auto mb-10">
                            {covers.map(({id, titulo, edad, descripcion}, index) => (
                                <div
                                    key={id}
                                    className="w-full max-w-xs sm:max-w-full flex flex-col justify-between p-6 bg-white-500 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-blue-500 transition mx-auto"
                                >
                                    <img
                                        src={`https://firebasestorage.googleapis.com/v0/b/pathbook.appspot.com/o/pathbooks%2F${id}%2Fcovers%2FcoverES.jpg?alt=media&token=78c8d937-db08-4222-9e75-2e53ba24deac`}
                                        alt={`cover ${index}`}
                                        className="w-full object-cover rounded-lg mb-4"
                                    />
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-xl text-black-500 font-bold mb-1">{titulo}</h3>
                                        <p className="text-sm text-gray-500 mb-1">Edad: {edad}</p>
                                        <p className="text-sm text-gray-600 flex-grow">{descripcion}</p>
                                    </div>
                                    <button
                                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white-500 font-semibold py-2 px-4 rounded-full transition border-4 border-blue-200 shadow-sm shadow-black-500"

                                        onClick={() => {
                                            setMockupId(id);
                                            handleStepChange(3);
                                        }}
                                    >
                                        Ir a leer
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mb-10">
                            <MainButton onClick={() => handleStepChange(1)}>Regresar al inicio</MainButton>
                        </div>
                    </motion.section>
                )}

                {step === 3 && (
                    <motion.section
                        key="step3"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transition}
                        className="flex flex-col items-center text-center px-4 pt-12 md:pt-24 bg-blue-800"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">
                            ¡Disfruta tu lectura interactiva!
                        </h2>


                        {isMobile ? (
                            <div className="fixed top-0 left-0 w-full h-full bg-azulpathbooks z-50 flex flex-col">
                                {/* Navbar fijo arriba */}
                                <div
                                    className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-700">
                                    {/* Logo a la izquierda */}
                                    <img
                                        src="/assets/logo.png"
                                        alt="Pathbooks Logo"
                                        className="h-8 md:h-10"
                                    />

                                    {/* Botón cerrar a la derecha */}
                                    <button
                                        onClick={() => handleStepChange(2)}
                                        className="bg-yellow-500 hover:bg-yellow-700 text-black-100 font-bold px-6 py-2 rounded-full transition border-4 border-yellow-700 shadow-sm shadow-black"
                                        style={{flexShrink: 0}}
                                    >
                                        X Cerrar lectura
                                    </button>
                                </div>

                                {/* Iframe que ocupa todo el espacio restante */}
                                <iframe
                                    title="Mockup"
                                    src={`/mockup?id=${mockupId}&width=${pageSize.width}&height=${pageSize.height}`}
                                    className="flex-grow w-full"
                                    style={{backgroundColor: "#fff"}}
                                />
                            </div>
                        ) : (
                            <div
                                className="bg-black-100 rounded-3xl shadow-2xl p-4 mb-6 border-4 border-blue-800"
                                style={{
                                    width: "768px", // ancho típico iPad vertical
                                    height: "1024px", // alto típico iPad vertical
                                    maxWidth: "90vw", // para que no desborde en pantallas pequeñas
                                    boxShadow:
                                        "0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.3)", // sombra extra para profundidad
                                }}
                            >
                                <iframe
                                    title="Mockup"
                                    src={`/mockup?id=${mockupId}&width=768&height=1024`}
                                    className="w-full h-full rounded-2xl border border-gray-900"
                                    style={{backgroundColor: "#fff"}} // para que no se vea transparente
                                />
                            </div>
                        )}

                        <div className="text-center mb-10 mt-6">
                            <MainButton onClick={() => handleStepChange(2)}>
                                Elegir otra lectura
                            </MainButton>
                        </div>
                    </motion.section>

                )}
            </AnimatePresence>
        </div>
    );
};

export default ExperienceDemo;
