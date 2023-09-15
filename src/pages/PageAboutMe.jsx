import SkillsList from "../components/skills/SkillsList"

const PageAboutMe = () => {
    return (
        <section className="pt-[90px] max-w-[1400px] mx-auto px-8 sm:px-[100px]">

            {/* Section About-me */}
            <article>
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl font-bold"><span className="text-primary text-[32px]">/</span>Sobre-mí</h2>
                </div>

                <p className="text-justify mt-4">¿Quién soy?</p>

                {/* Section about me */}
                <section className="grid sm:grid-cols-[1fr_1fr]">
                    {/* My description */}
                    <section className="flex flex-col justify-center gap-2 p-2 text-gray lg:pl-[180px]">
                        <h3>¡Hola! Soy Pedro</h3>
                        <p>Soy un desarrollador fullstack autodidacta radicado en Puno, Perú. Tengo la capacidad de diseñar y desarrollar sitios web responsivos desde cero, además de crear aplicaciones completas como desarrollador fullstack.</p>
                        <p>Convertir mi creatividad y conocimientos en aplicaciones web ha sido mi pasión durante más de un año. Siempre estoy comprometido en aprender sobre las últimas tecnologías y frameworks para ofrecer soluciones web modernas y fáciles de usar.</p>
                    </section>

                    <section className="grid justify-center">
                        <div className="min-w-[200px] max-w-[300px] aspect-square border-b border-primary">
                            {/* Notes:  1, 3, 4, 6, 7, 9, 10*/}
                            <img src="/images/myPhoto/myPhoto10.png" alt="" />
                        </div>
                    </section>
                </section>
            </article>

            {/* Secction My skills */}
            <article className="mt-8">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary font-bold">#</span>skills</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                <SkillsList />
            </article>

            {/* Section of My-fun-facts */}
            <article className="mt-8">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary font-bold">#</span>my-fun-facts</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                <section className="grid sm:grid-cols-[2fr_1fr] mt-4">
                    <ul className="flex flex-wrap gap-2 text-gray">
                        <li className="px-2 py-1 border">I like winter more than summer</li>
                        <li className="px-2 py-1 border">I often bike with my friends</li>
                        <li className="px-2 py-1 border">I like pizza and pasta</li>
                        <li className="px-2 py-1 border">I was in Egipt, Poland and Turkey</li>
                        <li className="px-2 py-1 border">My favorite movie es The Green Mile</li>
                        <li className="px-2 py-1 border">I am still in school</li>
                        <li className="px-2 py-1 border">I don't have any siblings</li>
                    </ul>

                    <div className="border">

                    </div>
                </section>
            </article>

        </section>
    )
}
export default PageAboutMe