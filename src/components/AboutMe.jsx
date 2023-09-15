import { Link } from "react-router-dom"

const AboutMe = () => {
    return (
        <section id="aboutMe" className="pt-[50px] max-w-[1400px] mx-auto px-8 sm:px-[100px] scroll-m-secondCustom">

            {/* The head of this section */}
            <article className="grid grid-cols-[2fr_1fr]">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary">#</span>Sobre-mí</h2>
                    <div className="border border-primary h-0"></div>
                </div>
            </article>

            {/* Section about me */}
            <article className="grid sm:grid-cols-[2fr_1fr] mt-4">
                {/* My description */}
                <section className="flex flex-col justify-center gap-2 p-2 lg:pl-[180px] text-justify">
                    <h3>¡Hola! Soy Pedro</h3>
                    <p>Soy un desarrollador fullstack autodidacta radicado en Puno, Perú. Tengo la capacidad de diseñar y desarrollar sitios web responsivos desde cero, además de crear aplicaciones completas como desarrollador fullstack.</p>

                    <p>Convertir mi creatividad y conocimientos en aplicaciones web ha sido mi pasión durante más de un año. Siempre estoy comprometido en aprender sobre las últimas tecnologías y frameworks para ofrecer soluciones web modernas y fáciles de usar.</p>

                    <article className="">
                        <div className="boton my-4">
                            <Link to="/aboutme" className="inline-flex items-center gap-3 text-md font-extrabold">
                                <span>Leer Más</span>
                                <i className="fa-brands fa-readme fa-beat-fade"></i>
                            </Link>
                        </div>
                    </article>

                </section>

                <section className="grid justify-center">
                    <div className="min-w-[200px] max-w-[300px] aspect-square border-b border-primary">
                        <img src="/images/aboutMe/aboutme2.png" alt="" />
                    </div>
                </section>
            </article>

        </section>
    )
}
export default AboutMe