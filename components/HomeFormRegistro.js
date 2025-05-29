import React, { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const RegistroWebinar = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  useEffect(() => {
    const scriptId = "aweber-wjs-rj9ynzedm";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//forms.aweber.com/form/02/855391602.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full py-20 bg-blue-600" id="registro">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="text-center bg-white-500 rounded-xl shadow-lg p-8 mt-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Registro para el Webinar
            </h2>
            <p className="text-lg text-blue-800 mb-5">
              Completa el formulario para reservar tu lugar.
            </p>
            <div className="AW-Form-855391602" />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default RegistroWebinar;
