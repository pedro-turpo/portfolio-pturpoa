import { Link } from "react-router-dom"

const ProjectsList = () => {
    return (

        <section>
            <div className="flex gap-4 flex-wrap justify-center">
                {/* First Project */}
                <article className="w-full max-w-[300px] sm:min-h-[350px] mt-6 border border-gray flex flex-col justify-between">
                    <section>
                        <div>
                            <img src="/projects-images/RickAndMorty.jpg" alt="" />
                        </div>

                        <h3 className="p-2 border-y border-gray text-gray text-justify">Html CSS JavaScript React Tailwind</h3>
                    </section>

                    <section className="p-2">
                        <h2 className="text-xl">Rick and Morty</h2>
                        <p className="text-gray pt-2 pb-4 text-justify">In this app, users can search and filter characters by name, status, and gender, getting details like their image, life status, species, and origin.</p>
                        <div className="flex justify-center gap-10">
                            <a className="py-1 px-4 border border-primary" href="https://rickandmorty-app-pturpoa.netlify.app/" target="_black">Demo <i className="fa-solid fa-arrow-up-right-from-square fa-beat text-[12px]"></i></a>
                            <a className="py-1 px-4 border" href="https://github.com/pedro-turpo/RickAndMorty-app" target="_black">Code <i className="fa-brands fa-github fa-beat text-[12px]"></i></a>
                        </div>
                    </section>
                </article>

                {/* second Project */}
                <article className="w-full max-w-[300px] min-h-[350px] mt-6 border border-gray flex flex-col justify-between">
                    <section>
                        <div>
                            <img src="/projects-images/Pokedex.jpg" alt="" />
                        </div>

                        <h3 className="p-2 border-y border-gray text-gray text-justify">Html CSS JavaScript React Tailwind</h3>
                    </section>

                    <section className="p-2">
                        <h2 className="text-xl">Pokedex</h2>
                        <p className="text-gray pt-2 pb-4 text-justify">The Pokedex app I've created uses the Pokemon API to display information about different Pokemon, such as their names, types, abilities, and stats.</p>
                        <div className="flex justify-center gap-10">
                            <a className="py-1 px-4 border border-primary" href="https://app-pokedex-pturpoa.netlify.app/" target="_black">Demo <i className="fa-solid fa-arrow-up-right-from-square fa-beat text-[12px]"></i></a>
                            <a className="py-1 px-4 border" href="https://github.com/pedro-turpo/app-pokedex-pturpoa" target="_black">Code <i className="fa-brands fa-github fa-beat text-[12px]"></i></a>
                        </div>
                    </section>
                </article>

                {/* Third Project */}
                <article className="w-full max-w-[300px] min-h-[350px] mt-6 border border-gray flex flex-col justify-between">
                    <section>
                        <div>
                            <img src="/projects-images/Ecommerce.jpg" alt="" />
                        </div>

                        <h3 className="p-2 border-y border-gray text-gray text-justify">Html CSS JavaScript React Tailwind</h3>
                    </section>

                    <section className="p-2">
                        <h2 className="text-xl">Ecommerce</h2>
                        <p className="text-gray pt-2 pb-4 text-justify">In this eCommerce app, you can browse a wide range of items available on the API. Get information about prices, features, stock availability and much more.</p>
                        <div className="flex justify-center gap-10">
                            <a className="py-1 px-4 border border-primary" href="https://ecommerce-app-pturpoa.netlify.app/" target="_black">Demo <i className="fa-solid fa-arrow-up-right-from-square fa-beat text-[12px]"></i></a>
                            <a className="py-1 px-4 border" href="https://github.com/pedro-turpo/Ecommerce-app-pturpoa" target="_black">Code <i className="fa-brands fa-github fa-beat text-[12px]"></i></a>
                        </div>
                    </section>
                </article>
            </div>

            <div className="mt-6 grid place-items-center">
                <Link className="border py-1 px-4 first-letter: border-primary" to="/projects">View all Projects <i className="fa-solid fa-diagram-project"></i></Link>

            </div>
        </section>
    )
}
export default ProjectsList