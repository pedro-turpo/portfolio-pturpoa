import { Link } from "react-router-dom"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { quotesList } from "../utils/quotesList"
import { numberRandom } from "../utils/randomQuote"
import "../style/style.css"

const Presentation = () => {
    const [text] = useTypewriter({
        words: ['UN DESARROLLADOR FRONT-END', 'UN DESARROLLADOR BACK-END', 'UN DESARROLLADOR FULL STACK', 'UN INGENIERO EN SISTEMAS INFORMÁTICOS', 'UN DISEÑADOR UI/UX'],
        loop: false,
        typeSpeed: 120,
        deleteSpeed: 30,
    })

    return (
        <section className="grid pt-[100px] sm:pt-[120px] max-w-[1400px] mx-auto mb-5 xl:min-h-screen">

            {/* Presentation and image */}
            <article className="flex flex-col items-center sm:flex-row sm:h-[520px]">
                {/* Name, who am I, presentation and download CV */}
                <div className="py-2 px-10 md:pl-10 sm:px-0 xl:pl-24 sm:w-[50%] sm:pr-0 sm:text-justify max-sm:text-center">
                    <section className="text-xl sm:text-[25px] font-bold sm:ml-[100px]">
                        <h2 className="text-[28px] 2xl:text-6xl sm:text-4xl font-[Orbitron] max-sm:text-center">PEDRO TURPO</h2>
                        <h2 className="mt-7 sm:mt-10">¿Quién soy?</h2>
                        <div><span className="text-primary">{text} <Cursor cursorColor='blue' cursorStyle="" /></span><i className="fa-solid fa-pen fa-shake text-base sm:text-2xl"></i></div>

                        <p className="mt-4 font-semibold text-gray text-base sm:text-[20px] text-justify">Soy un <span className="text-primary font-bold">Desarrollador web Fullstack</span> que combina tecnología y creatividad para diseñar y desarrollar sitios web atractivos y funcionales
                        </p>

                        {/* Button to download my CV */}
                        <div className="boton">
                            <a className="inline-flex items-center gap-1" download="CV_PedroTurpo_DesarrolladorWebFullStack" href="/docs/PedroTurpo-CV.pdf"><svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> <span>Download CV</span></a>
                        </div>
                    </section>
                </div>

                {/* Image of my portfolio */}
                {/* Notes:  1, 3, 4, 6, 7, 9, 10*/}
                <section className="flex flex-col justify-center items-center gap-4 sm:w-[50%] p-5 h-full">
                    <div className="sm:w-full h-[85%]">
                        <img className="mx-auto max-h-[450px] object-cover min-[750px]:-mt-[50px]" src="/images/myPhoto/myPhoto6.png" alt="my photo" />
                    </div>
                    <div className="p-2 flex gap-2 border items-center">
                        <div className="h-[10px] aspect-square bg-primary"></div>
                        <h3 className="text-gray font-bold">Actualmente trabajando en el <span className="text-white font-bold">Portafolio</span></h3>
                    </div>
                </section>
            </article>

            {/* Cite */}
            <section className="flex flex-col items-center mt-9 mx-5">
                <div className="flex flex-col max-w-[700px]">
                    <article className="border p-2 relative sm:text-xl py-4">
                        {
                            quotesList[numberRandom].quote
                        }
                        <span className="absolute -top-3 left-3 text-xl bg-background"><i className='bx bxs-quote-left'></i></span>
                    </article>
                    <article className="flex justify-end sm:text-xl">
                        <div className="border p-2 relative">
                            {
                                quotesList[numberRandom].author
                            }
                            <span className="absolute -top-4 right-3 text-xl bg-background"><i className='bx bxs-quote-right'></i></span>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    )
}
export default Presentation