import BackEndProjects from "../components/Projects/BackEndProjects"
import FrontEndProjects from "../components/Projects/FrontEndProjects"
import SmallProjects from "../components/Projects/SmallProjects"
import { projectsList } from "../utils/projectsList"

const MoreProjects = () => {
    const styleBold = 'font-bold text-primary'
    console.log(projectsList)

    const frontEndProjects = projectsList.filter((project) => project.developIn === 'frontend' && project.value != 'small');
    const backEndProjects = projectsList.filter((project) => project.developIn === 'backend' && project.value != 'small');
    const smallProjects = projectsList.filter((project) => project.value === 'small');

    return (
        <section className="pt-[90px] max-w-[1400px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article>
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl font-bold"><span className="text-primary text-[32px]">/</span>Proyectos</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                <p className="text-justify mt-4">Esta sección presenta una lista de proyectos completados hasta la fecha. Basados en <span className={styleBold}>HTML, CSS y JavaScript,</span> varios utilizan <span className={styleBold}>React y Tailwind CSS</span> en el <span className={styleBold}>frontend</span>. Al mismo tiempo, algunos proyectos incluyen APIs en el backend, desarrolladas con <span className={styleBold}>Node.js, Express, validaciones, gestión de errores, autenticación JWT, encriptación Bcrypt y bases de datos</span>, ofreciendo así una experiencia completa.</p>
            </article>

            {/* Section 1 of project list frontend*/}
            <article className="mt-8">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary font-bold">#</span>Proyectos FrontEnd</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                {/* List of page Projects */}
                <FrontEndProjects frontEndProjects={frontEndProjects} />
            </article>

            {/* Section 2 of project list backend*/}
            <article className="mt-8">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary font-bold">#</span>Proyectos BackEnd</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                {/* List of page Projects */}
                <BackEndProjects backEndProjects={backEndProjects} />
            </article>


            {/* Section 3 of small project list*/}
            <article className="mt-8">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary font-bold">#</span>Proyectos pequeños</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                {/* List of page Projects */}
                <SmallProjects smallProjects={smallProjects} />
            </article>
        </section>
    )
}
export default MoreProjects