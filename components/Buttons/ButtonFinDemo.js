const ButtonFinDemo = () => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      // Registro del evento (Facebook pixel o cualquier otro)
      if (typeof fbq === "function") {
        fbq("trackCustom", "descubreFinDemo");
      }

      // Enviar mensaje al padre del iframe
      window.parent.postMessage({ type: "SCROLL_TO_PLANES" }, "*");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-primary bg-yellow-500 hover:bg-yellow-700 text-black-100  px-10 py-3 rounded-full transition-all border-yellow-700 border-4 shadow-sm shadow-black-500"
    >
      Descubre más
    </button>
  );
};

export default ButtonFinDemo;