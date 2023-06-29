import SkillsList from "./skills/SkillsList"

const Skills = () => {
    return (
        <section className="mt-[40px] max-w-[1150px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article className="grid grid-cols-[2fr_1fr]">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary">#</span>Skills</h2>
                    <div className="border border-primary h-0"></div>
                </div>
            </article>

            {/* My skills list */}
            <SkillsList />
        </section>
    )
}
export default Skills