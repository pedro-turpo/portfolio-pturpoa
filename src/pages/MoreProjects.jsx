import MoreprojectsList from "../components/Projects/MoreprojectsList"
import SmallProjectsList from "../components/Projects/SmallProjectsList"
import { projectsList } from "../utils/projectsList"
import { smallProjectsList } from "../utils/smallProjectsList"

const MoreProjects = () => {
    return (
        <section className="pt-[90px] max-w-[1150px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article>
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl font-bold"><span className="text-primary text-[32px]">/</span>Projects</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                <p className="text-justify mt-4">In this section, you can see a list of all the projects completed to date. These projects were developed using <span className="font-bold text-primary">HTML</span >, <span className="font-bold text-primary">CSS</span>, and <span className="font-bold text-primary">JavaScript</span> as the foundation. The majority of them were built using popular libraries such as <span className="font-bold text-primary">React</span> and <span className="font-bold text-primary">Tailwind CSS</span> to speed up the development process and enhance the user experience.</p>

            </article>

            <article className="mt-8">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary font-bold">#</span>complete-apps</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                {/* List of page Projects */}
                <MoreprojectsList projectsList={ projectsList } />
            </article>

            
            <article className="mt-8">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary font-bold">#</span>small-projects</h2>
                    <div className="border border-primary h-0"></div>
                </div>

                {/* List of page Projects */}
                <SmallProjectsList smallProjectsList={ smallProjectsList} />
            </article>

        </section>
    )
}
export default MoreProjects