import ProjectsList from "./Projects/ProjectsList"

const Projects = () => {
    return (
        <section className="mt-[80px] max-w-[1150px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article className="grid grid-cols-[2fr_1fr]">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary">#</span>Projects </h2>
                    <div className="border border-primary h-0"></div>
                </div>
                <div className="flex justify-end">
                    <button className="flex items-center gap-2">
                        view all
                        <i className='bx bx-sort-down'></i>
                    </button>
                </div>
            </article>

            {/* My Project List */}
            <ProjectsList />

        </section>
    )
}
export default Projects