import React from "react";
import ButtonPago01 from "./Buttons/ButtonPago01";
import ButtonPago02 from "./Buttons/ButtonPago02";
import ButtonPago03 from "./Buttons/ButtonPago03";

const PlanesPrecios = () => {
    return (
        <section className="bg-white-100 py-20 px-6 md:px-12 lg:px-24" id="planes">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-azulpathbooks mb-4">
                    Elige el plan perfecto para ti
                </h2>
                <p className="text-gray-600 text-lg md:text-xl mb-16">
                    Todos los planes ofrecen acceso completo a nuestras lecturas interactivas, sin suscripciones ni
                    cargos ocultos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Plan Mensual */}
                    <div
                        className="bg-white-100 border border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Plan Mensual</h3>
                            <h1 className="text-xl text-black-100"> Ideal para explorar el contenido</h1>
                            <p className="text-gray-500 text-xl">Antes: <span className="line-through">$130 MXN</span>
                            </p>
                            <p className="text-3xl font-bold text-gray-900 mb-1">$79 MXN</p>
                            <p className="text-sm text-green-600 mb-4">Ahorra un 39%</p>
                            <p>Acceso durante: 30 días</p>
                            <ul className="text-gray-500 space-y-2 text-sm leading-relaxed mt-4">
                                <li>✔ Acceso completo al catálogo sin límites</li>
                                <li>✔ Lecturas completas e interactivas</li>
                                <li>✔ Con decisiones y finales múltiples</li>
                                <li>✔ Acceso total al catálogo general</li>
                                <li>✔ Catálogo de lecturas en inglés</li>
                                <li>✔ Acceso a audiolibros</li>
                                <li>✔ Lecturas académicas</li>
                                <li>✔ Contenido seguro y curado</li>
                                <li>✔ Incluye actualizaciones y lanzamientos*</li>
                            </ul>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-green-700 font-medium">Pago único, sin cargos ocultos</p>
                            <p className="text-blue-700 mb-4">Puedes pagar con tarjeta o PayPal</p>
                            <p className="text-2xl font-bold mb-4"> Comprar por $79 MXN</p>
                            <ButtonPago01/>
                        </div>
                    </div>

                    {/* Plan Semestral */}
                    <div
                        className="relative bg-white-100 border-2 border-yellow-400 rounded-2xl shadow-lg hover:shadow-xl transition p-8 flex flex-col justify-between">
                        <div
                            className="absolute top-0 right-0 bg-yellow-600 text-white-100 text-xs font-semibold px-3 py-1 rounded-xl">
                            Más popular
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-yellow-700 mb-2">Plan Semestral</h3>
                            <h1 className="text-xl text-black-100"> Perfecto para vacaciones o refuerzo escolar</h1>
                            <p className="text-gray-500 text-xl">Antes: <span className="line-through">$740 MXN</span>
                            </p>
                            <p className="text-3xl font-bold text-gray-900 mb-1">$420 MXN</p>
                            <p className="text-sm text-green-600 mb-4">Ahorra un 43%</p>
                            <p>Acceso durante: 6 meses</p>
                            <ul className="text-gray-500 space-y-2 text-sm leading-relaxed mt-4">
                                <li>✔ Acceso completo al catálogo sin límites</li>
                                <li>✔ Lecturas completas e interactivas</li>
                                <li>✔ Con decisiones y finales múltiples</li>
                                <li>✔ Acceso total al catálogo general</li>
                                <li>✔ Catálogo de lecturas en inglés</li>
                                <li>✔ Acceso a audiolibros</li>
                                <li>✔ Lecturas académicas</li>
                                <li>✔ Contenido seguro y curado</li>
                                <li>✔ Incluye actualizaciones y lanzamientos*</li>
                            </ul>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-green-700 font-medium">Pago único, sin cargos ocultos</p>
                            <p className="text-blue-700 mb-4">Puedes pagar con tarjeta o PayPal</p>
                            <p className="text-2xl font-bold mb-4"> Comprar por $420 MXN</p>
                            <ButtonPago02/>
                        </div>
                    </div>

                    {/* Plan Anual - Oferta Especial */}
                    <div
                        className="relative bg-green-50 border-2 border-green-500 rounded-2xl shadow-lg hover:shadow-xl transition p-8 flex flex-col justify-between">
                        <div
                            className="absolute top-0 right-0 bg-green-600 text-white-100 text-xs font-semibold px-3 py-1 rounded-xl">
                            Oferta especial
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 mb-2">Plan Anual</h3>
                            <h1 className="text-xl text-black-100"> Ideal para todo el ciclo escolar</h1>
                            <p className="text-gray-500 text-xl">Antes: <span className="line-through">$1,480 MXN</span>
                            </p>
                            <p className="text-3xl font-bold text-green-700 mb-1">$789 MXN</p>
                            <p className="text-sm text-green-600 mb-4">Aprovecha un 47% de descuento</p>
                            <p>Acceso durante: 12 meses</p>
                            <ul className="text-gray-500 space-y-2 text-sm leading-relaxed mt-4">
                                <li>✔ Acceso completo al catálogo sin límites</li>
                                <li>✔ Lecturas completas e interactivas</li>
                                <li>✔ Con decisiones y finales múltiples</li>
                                <li>✔ Acceso total al catálogo general</li>
                                <li>✔ Catálogo de lecturas en inglés</li>
                                <li>✔ Acceso a audiolibros</li>
                                <li>✔ Lecturas académicas</li>
                                <li>✔ Contenido seguro y curado</li>
                                <li>✔ Incluye actualizaciones y lanzamientos*</li>

                            </ul>
                        </div>
                        <div className="mt-6 text-center">

                            <p className="text-green-700 font-medium">Pago único, sin cargos ocultos</p>
                            <p className="text-blue-700 mb-4">Puedes pagar con tarjeta o PayPal</p>
                            <p className="text-2xl font-bold mb-4"> Comprar por $789 MXN</p>
                            <ButtonPago03/>
                        </div>
                    </div>
                </div>

                {/* Beneficios generales */}
                <div
                    className="mt-20 text-center text-sm md:text-base text-gray-500 max-w-3xl mx-auto space-y-4 leading-relaxed">
                    <p className="text-2xl text-yellow-600 font-bold">Regala lectura, regala futuro</p>
                    <p className="text-sm italic">
                        * En Pathbooks publicamos constantemente. Durante tu periodo de acceso, recibirás
                        automáticamente las nuevas publicaciones y actualizaciones sin costo adicional.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PlanesPrecios;
