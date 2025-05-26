import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import showdown from "showdown";
import ButtonFinDemo from "../components/Buttons/ButtonFinDemo";


const converter = new showdown.Converter({strikethrough: true});

const Mockup = () => {
    const router = useRouter();
    const {id} = router.query;
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState(null);
    const [title, setTitle] = useState(null);
    const [json, setJSON] = useState(null);
    const [chapter, setChapter] = useState("page1");
    const [chapter2, setChapter2] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [readChapters, setReadChapters] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [totalPoints, setTotalPoints] = useState(0);
    const [pageWidth, setPageWidth] = useState(0);


    const load = async loadLang => {
        const url = `https://firebasestorage.googleapis.com/v0/b/pathbook.appspot.com/o/pathbooks%2F${id}%2Fpathbook.json?alt=media&token=dda08045-4e87-40a3-84b8-8b54fdac66ad`;
        const req = await axios.get(url);
        setTitle(req.data.title);
        setJSON(req.data);
        setLoading(false);
    };

    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [isScrollVisible, setIsScrollVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isQuizVisible, setIsQuizVisible] = useState(false);
    const [isFinishVisible, setIsFinishVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);
    const [quizResults, setQuizResults] = useState([]);
    const questionDivRef = useRef(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const width = urlParams.get('width');
        if (width) {
            setPageWidth(parseInt(width, 10));
        }
    }, []);

    useEffect(() => {
        if (isFinishVisible) {
            closeQuiz();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isFinishVisible]);

    const openFinish = () => {
        setIsFinishVisible(true);
    }
    const closeFinish = () => {
        setIsFinishVisible(false);
    }

    useEffect(() => {
        if (isQuizVisible) {
            closeModal();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isQuizVisible]);

    const openQuiz = () => {
        setIsQuizVisible(true);
    }
    const closeQuiz = () => {
        setIsQuizVisible(false);
    }

    useEffect(() => {
        document.body.style.overflow = isButtonVisible || isModalVisible || isContactVisible || isQuizVisible || isFinishVisible ? "hidden " : "auto";
    }, [isButtonVisible, isModalVisible, isContactVisible, isQuizVisible, isFinishVisible]);

    useEffect(() => {
        if (isModalVisible) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isModalVisible]);

    const handleModalClick = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        if (id) {
            if (id === "loading") {
            } else {
                setIsButtonVisible(false);
                load().catch();
            }
        }
    }, [id]);

    useEffect(() => {
        const useLang = "es" === "es" ? "es" : "en";
        setLang(useLang);
    }, ["es"]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        if (lang) {
            i18n.changeLanguage(lang);
        }
        const width = urlParams.get('width');
        if (width) {
            setPageWidth(parseInt(width, 10));
        }
    }, ["es"]);

    const handleFinishClick = () => {
        closeFinish();
        setTotalPoints(0);
        setCurrentQuestionIndex(0);
        setQuestionCount(0);
        setSelectedAnswer(null);
        setQuizResults([]);
        setReadChapters([]);
        setChapter("page1");
        setIsContactVisible(true);
        setIsModalVisible(false);
    };

    const calculateTotalQuestions = () => {
        return readChapters.reduce((acc, ch) => {
            const quiz = json.chapters[ch]?.quiz?.[lang];
            return quiz ? acc + quiz.length : acc;
        }, 0);
    };

    const calculatePerformance = () => {
        const maxPoints = calculateTotalQuestions() + 1;
        const performance = Math.trunc((totalPoints / maxPoints) * 100);
        return Math.max(0, performance);
    };

    const handleNextQuestion = () => {
        setQuizResults(prevResults => [
            ...prevResults,
            {
                question: json.chapters[chapter].quiz[lang][currentQuestionIndex].question,
                selectedAnswer: json.chapters[chapter].quiz[lang][currentQuestionIndex].answers[selectedAnswer].answer,
                points: json.chapters[chapter].quiz[lang][currentQuestionIndex].answers[selectedAnswer].points,
            }
        ]);

        const selectedPoints = json.chapters[chapter].quiz[lang][currentQuestionIndex].answers[selectedAnswer].points;
        if (selectedPoints > 0) {
            setTotalPoints(totalPoints + selectedPoints);
        }
        if (questionCount + 1 <= calculateTotalQuestions()) {
            setQuestionCount(questionCount + 1);
            if (currentQuestionIndex < json.chapters[chapter].quiz[lang].length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                const nextChapterIndex = readChapters.indexOf(chapter) + 1;
                if (nextChapterIndex < readChapters.length) {
                    const nextChapter = readChapters[nextChapterIndex];
                    setChapter(nextChapter);
                    setCurrentQuestionIndex(0);
                } else {
                    openFinish();
                }
            }
            setSelectedAnswer(null);
        } else {
            openFinish();
        }

    };
    const handleAnswerSelect = (index) => {
        setSelectedAnswer(index);
    };

    const handleChapterChange = (newChapter) => {
        setChapter2(chapter);
        setChapter(newChapter);
        setReadChapters(prevReadChapters => {
            const updatedChapters = [...prevReadChapters, chapter];
            return [...new Set(updatedChapters)].filter(ch => json.chapters[ch]?.quiz?.es && json.chapters[ch]?.quiz?.en);
        });
        window.scrollTo(0, 0);
    };

    const scrollStep = 5;
    let scrollInterval;

    const handleScrollDown = () => {
        scrollInterval = setInterval(() => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                stopScroll();
            } else {
                window.scrollBy(0, scrollStep);
            }
        }, 25);
    };

    const handleScrollUp = () => {
        scrollInterval = setInterval(() => {
            if (window.scrollY === 0) {
                stopScroll();
            } else {
                window.scrollBy(0, -scrollStep);
            }
        }, 25);
    };

    const stopScroll = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    };

    useEffect(() => {
        const activateTimer = setTimeout(() => {
            setIsScrollVisible(true);
        }, 1000);

        const deactivateTimer = setTimeout(() => {
            setIsScrollVisible(false);
        }, 4000);

        return () => {
            clearTimeout(activateTimer);
            clearTimeout(deactivateTimer);
        };
    }, [isModalVisible, isFinishVisible, isContactVisible, isQuizVisible]);

    return (

        <div id="top"
             className="overflow-x-hidden bg-white-100 p-2 rounded-lg shadow-lg w-full h-full pb-40 overflow-scroll">
            {isContactVisible && (
                <div
                    className="bg-white-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4 overflow-auto"
                    style={{
                        backgroundImage: "url('/assets/bg-books.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div
                        className={`bg-white-500 rounded-3xl shadow-2xl max-w-xl w-full text-center p-10 grid gap-6 ${pageWidth < 800 ? "pt-8 pb-16" : "pt-12 pb-24"}`}>
                        <img src="/assets/logoAzul.png" alt="logo Pathbooks" className="mx-auto w-3/12 drop-shadow-lg"/>

                        <h2 className="text-3xl font-extrabold text-azulpathbooks drop-shadow-md">
                            ¡Tu viaje lector apenas comienza!
                        </h2>

                        <p className="text-lg text-slate-700 px-6 leading-relaxed">
                            Más de <strong>900 historias fascinantes</strong>, biografías interactivas, audiolibros, y
                            lecturas académicas.<br/>
                            Guarda tu progreso y accede a contenido desde <strong>preescolar hasta bachillerato</strong>.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row justify-around text-blue-800 gap-3 text-left px-6 text-sm font-semibold">
                            <div>📚 Historias interactivas</div>
                            <div>🎧 Audiolibros incluidos</div>
                            <div>🎓 Contenido por nivel escolar</div>
                        </div>

                        <ButtonFinDemo
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transform hover:brightness-110 transition-all duration-300 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-yellow-800 border-none"/>

                        <p className="italic text-gray-600 text-sm mt-2">
                            “Pathbooks cambió la forma en que mis hijos disfrutan la lectura.”
                        </p>
                    </div>
                </div>
            )}
            {isFinishVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 mt-0 ">
                    <div className=" bg-white-100 p-2 rounded-lg shadow-lg w-full h-full pb-40 overflow-scroll">

                        <div className={"grid grid-cols-1 place-items-center "}>
                            <div className={"w-11/12 my-6 text-center"}>
                                <p className={"mt-10 text-blue-500 font-bold text-4xl"}>
                                    {calculatePerformance() < 60 ? "¡No te rindas!" : calculatePerformance() < 80 ? "Por poco no lo logras." : "¡Felicidades!"}
                                </p>
                                <p className={"text-black-500 text-xl"}>
                                    {calculatePerformance() < 60 ? "Necesitas tener una mejor puntuación para aprobar." : calculatePerformance() < 80 ? "Aprobaste, pero puedes esforzarte más." : "Aprobaste con excelente puntuación."}
                                </p>
                                <p className={"text-gray-500 "}>
                                    Vuelve a intentarlo.
                                </p>

                            </div>
                            <div
                                className={"bg-blue-500 rounded-lg w-11/12 p-2 text-white-500 font-bold grid grid-cols-2"}>
                                <div className={"my-4"}>
                                    <p className=" text-center text-4xl text-white-500">
                                        {calculatePerformance()}
                                    </p>
                                    <p className={"text-center text-white-500"}>
                                        Calificación
                                    </p>
                                </div>
                                <div className={"border-l-white border-l-2"}>
                                    <p className="mb-2 mt-2 text-center text-4xl text-white-500">
                                        {totalPoints} / {calculateTotalQuestions() + 1}
                                    </p>
                                    <p className={"text-center text-white-500"}>
                                        Aciertos
                                    </p>
                                </div>

                            </div>
                            <div className={"w-10/12 my-6"}>
                                {quizResults.map((result, index) => (
                                    <div key={index} className="mb-4 border-b-blue-500 border-b-2 pb-2 ">
                                        <p className="font-bold text-blue-500">{index + 1}. {result.question}</p>
                                        <p className={result.points < 0 ? "bg-red-300 rounded-full p-2" : "bg-green-500 rounded-full p-2 "}>
                                            <p className="ml-5 text-white-500">{result.selectedAnswer}</p></p>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className={"grid place-items-center"}>
                            <button
                                className="w-10/12 ml-1 hover:scale-105 transition block p-2 mt-2  text-white-500 bg-blue-700 rounded-full text-lg font-bold border-4 border-blue-400 shadow-sm shadow-black-500 "
                                onClick={handleFinishClick}
                            >
                                Finalizar

                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isQuizVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 mt-0 ">
                    <div className="bg-white-100 p-8 rounded-lg shadow-lg w-full h-full pb-40 overflow-scroll"
                         id={"top"} ref={questionDivRef}>
                        <h2 className="text-3xl font-bold  text-center text-orange-600">
                            Cuestionario de comprensión lectora
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                            Los cuestionarios ayudan a reforzar lo leído, mejorando la comprensión, la memoria y la
                            atención de forma divertida y educativa.
                        </p>
                        <h2 className="text-2xl font-bold mb-4 text-center text-black-500">
                            Lectura: {json?.info?.title?.[lang]}
                        </h2>
                        {json?.chapters?.[chapter]?.quiz?.[lang]?.[currentQuestionIndex]?.question && (
                            <>
                                <div
                                    className="flex flex-col sm:flex-row justify-between items-center w-full mb-4 px-4">
                                    <p className="text-right w-full">
                                        Pregunta: {questionCount + 1} de {calculateTotalQuestions() + 1}
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col sm:flex-row justify-between items-center w-full mb-4 px-4">
                                    <p className="text-left text-xl text-gray-600">
                                        Selecciona la que crees que es la respuesta correcta
                                    </p>
                                </div>

                                <p className="mt-4 mb-4 text-2xl text-blue-500 font-bold ">
                                    {questionCount + 1}.- {json?.chapters?.[chapter]?.quiz?.[lang]?.[currentQuestionIndex]?.question}
                                </p>
                                {json?.chapters?.[chapter]?.quiz?.[lang]?.[currentQuestionIndex]?.answers?.map((answer, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center transition mb-2 cursor-pointer rounded-full border-2 shadow-sm shadow-black-500
                                        ${selectedAnswer === index ? 'border-blue-500 bg-blue-100' : 'border-yellow-600 bg-yellow-100'}
                                        hover:border-blue-600`}
                                        onClick={() => handleAnswerSelect(index)}
                                    >

                                        <div
                                            className={`flex items-center justify-center rounded-l-full px-4 py-2
                                            ${selectedAnswer === index ? 'bg-blue-500 text-white-500' : 'bg-yellow-500 text-white-500'}`}
                                        >
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <p className="py-2 px-4 text-gray-900 flex-grow">
                                            {answer?.answer}
                                        </p>
                                    </div>
                                ))}
                            </>
                        )}

                        <div className={"flex justify-evenly"}>

                            <button

                                className={`mt-10 bg-blue-500 text-white-500 py-2 px-4 rounded-full border-blue-200 border-4 shadow-sm shadow-black-500 ${selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => {
                                    handleNextQuestion();
                                }}
                                disabled={selectedAnswer === null}
                            >
                                Siguente pregunta
                            </button>

                        </div>
                    </div>
                </div>
            )}


            {pageWidth >= 1280 && !isButtonVisible && !isQuizVisible && !isFinishVisible && !isContactVisible && (
                <div
                    className={`fixed select-none grid grid-cols-1 ${pageWidth <= 1280 ? 'top-12' : 'top-16'} right-0 transform -translate-x-1/2 z-50`}>
                    <button
                        onMouseEnter={handleScrollUp}
                        onMouseLeave={stopScroll}
                        style={{backgroundImage: `url(/assets/caretUpS.svg)`}}
                    >
                        <img src="/assets/caretUpS.svg" alt="Scroll Up" className="w-8 h-8"/>
                    </button>
                    <button
                        className="mb-4"
                        onMouseEnter={handleScrollDown}
                        onMouseLeave={stopScroll}
                        style={{backgroundImage: `url(/assets/caretDownS.svg)`}}
                    >
                        <img src="/assets/caretDownS.svg" alt="Scroll Down" className="w-8 h-8"/>
                    </button>
                </div>
            )}
            {isScrollVisible && (isModalVisible || isFinishVisible || isContactVisible || isQuizVisible) && pageWidth < 1300 && (
                <div
                    className="fixed select-none grid grid-cols-1 bottom-16 opacity-80 left-1/2 transform -translate-x-1/2"
                    style={{zIndex: 100}}
                    id="scrollButton"
                >
                    <button
                        className="cursor-pointer bg-yellow-950 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce"
                    >
                        <svg
                            className="w-5 h-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </button>
                </div>
            )}

            <div
                id="top"
                className={`flex justify-center ${pageWidth <= 1280 ? "pt-10" : "pt-40"} mb-2 z-10`}
            >
                {chapter !== "page1" && (
                    <button
                        className="flex items-center gap-2 px-4 py-2 hover:scale-105 transition border-2 border-blue-600 rounded-full text-blue-600 z-10"
                        onClick={() => {
                            if (chapter2) {
                                setChapter(chapter2);
                                setChapter2(null);
                                setReadChapters(prev =>
                                    prev.filter(ch => ch !== chapter)
                                );
                            } else {
                                const previousChapter = json.chapters[chapter]?.previous;
                                if (previousChapter) {
                                    setChapter(previousChapter);
                                } else {
                                    const keys = Object.keys(json.chapters);
                                    const currentIndex = keys.indexOf(chapter);
                                    if (currentIndex > 0) {
                                        setChapter(keys[currentIndex - 1]);
                                    }
                                }
                            }
                        }}
                    >
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="arrow-left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                        <p className="font-medium">Página anterior</p>
                    </button>
                )}
            </div>

            <div>
                {json && (
                    <div className={`grid ${pageWidth <= 1280 ? 'pt-0' : 'pt-2'} place-items-center`}>
                        {chapter === "page1" && (
                            <>
                                <div className={`grid place-items-center w-full mb-2`}>
                                    <h2 className="w-10/12 text-center text-black-500 text-4xl font-bold">{json?.info?.title?.[lang]}</h2>
                                </div>
                            </>
                        )}
                        <div className={`grid place-items-center w-full mb-6`}>
                            <h2 className="mt-6 w-10/12 text-center text-black-500 text-2xl font-bold">{json.chapters[chapter].title[lang]}</h2>
                        </div>
                        <div
                            className="your-content-class px-8 text-slate-900 indent-8 text-justify select-none text-2xl"
                            dangerouslySetInnerHTML={{__html: converter.makeHtml(json.chapters[chapter].content[lang], {simpleLineBreaks: true})}}
                        />
                    </div>
                )}
                {json && json.chapters[chapter].isEnding && (
                    <div className={"grid place-items-center"}>
                        <button
                            className="w-10/12 ml-1 hover:scale-105 transition block p-2 mt-2  text-white-500 bg-blue-700 rounded-full text-lg font-bold border-4 border-blue-400 shadow-sm shadow-black-500 "
                            onClick={() => {
                                handleModalClick();
                            }}>
                            Fin de la historia
                        </button>
                    </div>
                )}
                {json &&
                    json.chapters[chapter].options.map((x, y) => (
                        <div className="grid place-items-center">
                            <button
                                key={y}
                                className="mt-6 w-10/12 ml-1 hover:scale-105 transition block p-2  text-white-500 bg-blue-700 rounded-full text-lg font-bold border-4 border-blue-400 shadow-sm shadow-black-500 "
                                onClick={() => handleChapterChange(x.link)}
                            >
                                {x.title[lang]}
                            </button>
                        </div>
                    ))}
                {chapter !== "page1" && (
                    <button
                        className="mt-10 p-2 hover:scale-105 transition w-full"
                        onClick={() => {
                            setChapter("page1");
                            setChapter2(null);
                            setReadChapters([]);
                        }}
                    >
                        Reiniciar Historia
                    </button>
                )}
            </div>
            {isModalVisible && (
                <div
                    className="bg-black-500 fixed inset-0 flex items-center justify-center overflow-scroll bg-black bg-opacity-50 z-50">
                    <div
                        className="bg-blue-600 py-20 px-4 rounded-lg shadow-lg w-full max-w-lg grid place-items-center z-50">
                        <img
                            src={`/assets/${json.chapters[chapter].endingType === "endingWriter" ? "astronaut.svg" : "cohete.svg"}`}
                            alt="final"
                            className={`w-5/12 ${pageWidth < 1280 ? "mt-2" : "mt-1"} pt-10`}
                        />
                        <h2 className="text-2xl mt-4 font-bold mb-1 text-white-500 text-center">
                            {json.chapters[chapter].endingType === "endingWriter"
                                ? "¡Destino alcanzado!"
                                : "¡Nuevas rutas por explorar!"}
                        </h2>
                        <p className={`text-white-500 text-center ${pageWidth < 800 ? "w-11/12" : "w-full"}`}>
                            {json.chapters[chapter].endingType === "endingWriter"
                                ? "¡Has descubierto el final más esperado!"
                                : "Has alcanzado un final…"}
                        </p>
                        {json?.info?.quiz && (
                            <>
                                <p className="mb-2 w-11/12 text-white-500 font-bold text-center">
                                    ¡Felicidades! Eres un gran explorador de historias, y has conquistado el desenlace
                                    más extraordinario que el autor ha creado para ti. ¡Bien hecho!
                                </p>
                                <button
                                    className="bg-white-500 hover:scale-105 transition text-blue-500 py-2 px-4 mb-2 rounded-full border-blue-600 border-4 shadow-sm shadow-black-500"
                                    onClick={openQuiz}
                                >
                                    Ir a cuestionario
                                </button>
                            </>
                        )}
                        <button
                            className="border-white-500 hover:scale-105 transition  font-bold text-white-500 py-2 px-4 rounded-full  border-4 shadow-sm shadow-black-500"
                            onClick={handleFinishClick}
                        >
                            Fin de la lectura
                        </button>

                        <button
                            className="p-2 hover:scale-105 transition text-white-500 mt-2 py-2 px-4"
                            onClick={() => {
                                setChapter("page1");
                                setChapter2(null);
                                setReadChapters([]);
                                setIsModalVisible(false);
                            }}
                        >
                            Reiniciar lectura
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Mockup;