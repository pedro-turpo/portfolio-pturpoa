import { Link } from "react-router-dom"

const ProjectsList = () => {
    return (

        <section>
            <div className="flex gap-4 flex-wrap justify-center">
                {/* First Project */}
                <article className="w-full max-w-[300px] sm:min-h-[350px] mt-6 border border-gray flex flex-col justify-between">
                    <section>
                        <div>
                            <img src="/projects-images/test1.png" alt="" />
                        </div>

                        <h3 className="p-2 border-y border-gray text-gray text-justify">Html CSS Python Flask</h3>
                    </section>

                    <section className="p-2">
                        <h2 className="text-xl">ChertNodes</h2>
                        <p className="text-gray pt-2 pb-4 text-justify">Minecraft servers hosting</p>
                        <div className="flex justify-center gap-10">
                            <a className="py-1 px-4 border border-primary" href="#">Live</a>
                            <a className="py-1 px-4 border" href="#">Cached</a>
                        </div>
                    </section>
                </article>

                {/* second Project */}
                <article className="w-full max-w-[300px] min-h-[350px] mt-6 border border-gray flex flex-col justify-between">
                    <section>
                        <div>
                            <img src="/projects-images/test1.png" alt="" />
                        </div>

                        <h3 className="p-2 border-y border-gray text-gray text-justify">Html CSS Python Flask</h3>
                    </section>

                    <section className="p-2">
                        <h2 className="text-xl">ChertNodes</h2>
                        <p className="text-gray pt-2 pb-4 text-justify">Minecraft servers hosting</p>
                        <div className="flex justify-center gap-10">
                            <a className="py-1 px-4 border border-primary" href="#">Live</a>
                            <a className="py-1 px-4 border" href="#">Cached</a>
                        </div>
                    </section>
                </article>

                {/* Third Project */}
                <article className="w-full max-w-[300px] min-h-[350px] mt-6 border border-gray flex flex-col justify-between">
                    <section>
                        <div>
                            <img src="/projects-images/test1.png" alt="" />
                        </div>

                        <h3 className="p-2 border-y border-gray text-gray text-justify">Html CSS Python Flask</h3>
                    </section>

                    <section className="p-2">
                        <h2 className="text-xl">ChertNodes</h2>
                        <p className="text-gray pt-2 pb-4 text-justify">Minecraft servers hosting</p>
                        <div className="flex justify-center gap-10">
                            <a className="py-1 px-4 border border-primary" href="#">Live</a>
                            <a className="py-1 px-4 border" href="#">Cached</a>
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