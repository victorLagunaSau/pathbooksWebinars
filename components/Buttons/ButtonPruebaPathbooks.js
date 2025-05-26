// components/BotonProbar.jsx
import React from "react";

const BotonProbar = () => {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof fbq === "function") {
      fbq("trackCustom", "probarPathbooksLanding");
    }
  };

  return (
    <a
      href="#demo"
      onClick={handleClick}
     className="btn btn-secondary bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-black-100 px-10 py-3 rounded-full transition-all border-4 border-yellow-500 shadow-sm shadow-yellow-700"
      >
      Probar Pathbooks
    </a>
  );
};

export default BotonProbar;
