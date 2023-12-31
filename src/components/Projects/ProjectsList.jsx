import { Link } from "react-router-dom"
import { projectsList } from "../../utils/projectsList"

const ProjectsList = () => {
    const projectsFilter = projectsList.filter((project) => project.value === 'priority');
    return (
        <section>
            <div className="flex gap-4 flex-wrap justify-center">
                {/* Principal Projects */}
                {
                    projectsFilter.map((project) => (
                        <article key={project.id} className="w-[300px] xl:w-[350px] sm:min-h-[335px] mt-6 border border-gray flex flex-col">
                            <div className="min-h-[180px]">
                                <img className="object-cover w-full h-full" src={project.img} alt="" />
                            </div>

                            <h3 className="p-2 border-y border-gray text-gray text-justify">{project.languagesUsed}</h3>

                            <section className="p-2 h-full flex flex-col justify-between">
                                <article>
                                    <h2 className="text-xl">{project.title}</h2>
                                    <p className="text-gray pt-2 pb-4 text-justify">{project.description}</p>
                                </article>

                                <div className="flex justify-center gap-10 ">
                                    <a className="py-1 px-4 border border-primary h-auto" href={project.linkDemo} target="_black">Demo <i className="fa-solid fa-arrow-up-right-from-square fa-beat text-[12px]"></i></a>
                                    <a className="py-1 px-4 border" href={project.linkRepo} target="_black">Code <i className="fa-brands fa-github fa-beat text-[12px]"></i></a>
                                </div>
                            </section>
                        </article>
                    ))
                }
            </div>

            {/* Button section */}
            <article className=" grid place-items-center">
                <div className="boton my-4">
                    <Link to="/projects" className="inline-flex items-center gap-3 text-xl font-extrabold">
                        <span>Ver Proyectos</span>
                        <i className="fa-solid fa-arrow-right fa-shake"></i>
                    </Link>
                </div>
            </article>
        </section>
    )
}
export default ProjectsList