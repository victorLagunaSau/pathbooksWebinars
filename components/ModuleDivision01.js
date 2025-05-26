import React from "react";

const ModuleDivision01 = () => {
    const text = "LA PLATAFORMA DE LECTURA PARA NIÑOS Y JÓVENES MÁS INNOVADORA • CON MÁS DE 900 LEECTURAS • ";

    return (
        <div className="bg-white-100 h-[200px] overflow-hidden relative" id="metodologia">
            <div className="absolute inset-0 flex items-center">
                <div className="whitespace-nowrap animate-marquee-slow">
                    <span className="text-[100px] font-black text-blue-600 opacity-80 tracking-tight">
                        {text.repeat(10)}
                    </span>
                </div>
                <div className="absolute whitespace-nowrap animate-marquee-slow2">
                    <span className="text-[100px] font-black text-blue-600 opacity-80 tracking-tight">
                        {text.repeat(10)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ModuleDivision01;