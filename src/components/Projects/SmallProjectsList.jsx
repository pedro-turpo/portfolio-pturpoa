const SmallProjectsList = ({ smallProjectsList}) => {
    return (
        <section className="flex gap-4 flex-wrap justify-center">

            {/* List of my projects */}
            {
                smallProjectsList?.map((project) => (
                    <article className="w-full max-w-[300px] sm:min-h-auto mt-6 border border-gray flex flex-col" key={project.id}>
                        <section>
                            <h3 className="p-2 border-y border-gray text-gray text-justify">{project.languagesUsed}</h3>
                        </section>

                        <section className="p-2">
                            <h2 className="text-xl">{project.title}</h2>
                            <p className="text-gray pt-2 pb-4 text-justify">{project.description}</p>
                            <div className="flex justify-center gap-10">
                                <a className="py-1 px-4 border border-primary" href="#">Live</a>
                                <a className="py-1 px-4 border" href="#">Cached</a>
                            </div>
                        </section>
                    </article>
                ))
            }
        </section>
    )
}
export default SmallProjectsList