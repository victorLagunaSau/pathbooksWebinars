import React, {useState, useEffect, useRef} from "react";
import ButtonComprar from "../Buttons/ButtonComprar";

const Header = () => {
    const [scrollActive, setScrollActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const indicatorRef = useRef(null);
    const buttonRefs = useRef({});

    const sections = ["home", "metodologia", "contenido"];

    useEffect(() => {
        const handleScroll = () => {
            setScrollActive(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    // Mueve la barra al botón activo
    useEffect(() => {
        const activeBtn = buttonRefs.current[activeLink];
        const indicator = indicatorRef.current;

        if (activeBtn && indicator) {
            indicator.style.width = `${activeBtn.offsetWidth}px`;
            indicator.style.left = `${activeBtn.offsetLeft - 20}px`;
        }
    }, [activeLink, menuOpen]);

    const getLinkClass = (id) =>
        `relative mb px-4 py-2 text-xl font-medium transition-colors ${
            activeLink === id ? "text-yellow-500" : "text-gray-100 hover:text-yellow-500"
        }`;

    return (
        <>
            <header
                className={`fixed top-0 w-full z-30 transition-all duration-300 ${
                    scrollActive ? "bg-azulpathbooks  shadow-lg py-2 backdrop-blur-sm " : "py-3 bg-azulpathbooks "
                }`}
            >
                <nav
                    className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex justify-between items-center h-16 relative">
                    {/* Logos */}
                    <div className="flex items-center">
                        <img
                            src="/assets/logo.png"
                            className="h-10 w-auto object-contain hidden lg:block"
                            alt="Logo Pathbooks"
                        />
                        <img
                            src="/assets/logocel.png"
                            className="h-8 w-auto object-contain block lg:hidden"
                            alt="Logo Pathbooks Mobile"
                        />
                    </div>

                    {/* Comprar + Navegación */}
                    <div className="flex items-center space-x-4 relative">


                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex items-center space-x-6 relative mr-16">
                            {sections.map((section) => (
                                <li key={section}>
                                    <a
                                        href={`#${section}`}
                                        ref={(el) => (buttonRefs.current[section] = el)}
                                        className={getLinkClass(section)}
                                    >
                                        {section === "home"
                                            ? "Inicio"
                                            : section === "metodologia"
                                                ? "¿Por qué Pathbooks ?"
                                                : "Contenido"}
                                    </a>
                                </li>
                            ))}
                            <span
                                ref={indicatorRef}
                                className="absolute bottom-0 h-1 bg-yellow-500 transition-all duration-300 ease-in-out"
                                style={{width: 0, left: 0}}
                            />
                        </ul>

                        <ButtonComprar/>


                        {/* Menú hamburguesa */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-gray-100 hover:text-yellow-500 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden bg-white/95 shadow-md py-4 px-6">
                        <ul className="flex flex-col space-y-4">
                            {sections.map((section) => (
                                <li key={section}>
                                    <a
                                        href={`#${section}`}
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setActiveLink(section);
                                        }}
                                        className={`block text-lg font-medium transition ${
                                            activeLink === section
                                                ? "text-yellow-500"
                                                : "text-gray-800 hover:text-blue-500"
                                        }`}
                                    >
                                        {section === "home"
                                            ? "Inicio"
                                            : section === "metodologia"
                                                ? "¿Por qué Pathbooks?"
                                                : "Contenido"}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
