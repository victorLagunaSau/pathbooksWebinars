// components/ButtonPago01.jsx
import React, { useState } from "react";

const ButtonPago01 = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        if (typeof window !== "undefined" && typeof fbq === "function") {
            fbq("trackCustom", "irAPagarPr79");
        }
        setShowModal(true);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="w-full sm:w-auto px-12 py-4 text-xl sm:text-xl font-semibold rounded-full bg-yellow-500 hover:bg-yellow-700 text-black-100 hover:text-white-100 transition-all"
            >
                Ir a comprar
            </button>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2 sm:px-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative overflow-hidden animate-fade-in-up h-[95vh] flex flex-col">
                        <div className="flex justify-end p-2 sm:p-4 z-20 bg-white-500">
                            <button
                                onClick={() => setShowModal(false)}
                                aria-label="Cerrar"
                                className="text-3xl text-gray-600 hover:text-black transition-all focus:outline-none focus:ring"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="flex-1 w-full">
                            <iframe
                                src="https://www.pathbooks.app/pay/6gdJNNv5IXq5LkdcO67C"
                                title="Registro y compra"
                                className="w-full h-full border-none"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonPago01;
