import React, {useMemo} from "react";
import getScrollAnimation from "../utils/getScrollAnimation";

const ModuleDivision02 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="relative flex items-center justify-center min-h-[300px] mt-16 md:mt-2 md:h-[200px] max-h-[200px] w-full overflow-hidden"
            id="bar002"
            style={{
                backgroundImage: "url('/assets/bgheader.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white-500">
                    La Plataforma de <span className="text-yellow-500">lectura</span> más
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-500">
                    <span className="text-yellow-500">innovadora</span> del mundo
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white-100">
                    Más de <span className="text-yellow-500">900 historias</span> especializadas en el aprendizaje
                    lector y por primera vez abierto al público.
                </p>
            </div>
        </div>

    );
};

export default ModuleDivision02;