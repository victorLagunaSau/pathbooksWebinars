import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const RegistroWebinar = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    hijos: [{ edad: "" }],
    expectativas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHijoChange = (index, value) => {
    const nuevosHijos = [...formData.hijos];
    nuevosHijos[index].edad = value;
    setFormData((prev) => ({ ...prev, hijos: nuevosHijos }));
  };

  const agregarHijo = () => {
    setFormData((prev) => ({
      ...prev,
      hijos: [...prev.hijos, { edad: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Por ahora solo mostramos la info en consola
    console.log("Datos enviados:", formData);
    alert("Formulario enviado, revisa consola");
  };

  return (
    <div className="w-full py-20 bg-blue-50" id="registro">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Registro para el Webinar
            </h2>
            <p className="text-lg text-blue-800">
              Completa el formulario para reservar tu lugar.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.form
            onSubmit={handleSubmit}
            variants={scrollAnimation}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            <div>
              <label
                htmlFor="nombre"
                className="block text-blue-900 font-semibold mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-blue-900 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-blue-900 font-semibold mb-2">
                Edad de tu(s) hijo(s)
              </label>
              {formData.hijos.map((hijo, i) => (
                <input
                  key={i}
                  type="number"
                  min="0"
                  value={hijo.edad}
                  onChange={(e) => handleHijoChange(i, e.target.value)}
                  required
                  className="w-full mb-3 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Edad del hijo ${i + 1}`}
                />
              ))}

              <button
                type="button"
                onClick={agregarHijo}
                className="text-blue-600 font-semibold hover:underline"
              >
                + Agregar otro hijo
              </button>
            </div>

            <div>
              <label
                htmlFor="expectativas"
                className="block text-blue-900 font-semibold mb-2"
              >
                ¿Qué te gustaría aprender o qué esperas del webinar?
              </label>
              <textarea
                id="expectativas"
                name="expectativas"
                value={formData.expectativas}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe aquí tus expectativas"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-md hover:bg-blue-800 transition"
            >
              Enviar registro
            </button>
          </motion.form>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default RegistroWebinar;
