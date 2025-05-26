import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ButtonComprar from "./Buttons/ButtonComprar";

const ModuleDivision03 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="relative flex items-center justify-center min-h-[450px] mt-16 md:mt-2 md:h-[200px] max-h-[200px] w-full overflow-hidden"
            id="contenido"
            style={{
                backgroundColor: "#f5f5f5", // Fondo gris claro
            }}
        >
            <div className="container mx-auto px-4 text-center">
                <p className="text-3xl md:text-4xl font-bold text-black-100 mb-4">
                    Precio original: <span className="text-yellow-600 line-through">$1,480 MXN</span>
                    ¡Aprovecha un <span className="text-yellow-600">47% </span>de descuento!
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-100 mb-4">
                    Por solo: <span className="text-yellow-600 font-bold"> $789 MXN</span> un año de lectura

               </h1>

                <p className="text-3xl md:text-4xl text-black-5000 mb-4">
                </p>
                <p className="text-3xl md:text-4xl text-black-5000 mb-4">
                    Mas de <span className="text-black-500 font-bold"> 900</span> lecturas apropiadas niños y jovenes
                </p>
                <ButtonComprar />
            </div>
        </div>
    );
};

export default ModuleDivision03;
