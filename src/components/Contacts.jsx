const Contacts = () => {
    return (
        <section id="contacts" className="mt-[40px] max-w-[1400px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article className="grid grid-cols-[2fr_1fr]">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary">#</span>Contactos</h2>
                    <div className="border border-primary h-0"></div>
                </div>
            </article>

            {/* Section of contats */}
            <article className="grid gap-4 mt-4 sm:grid-cols-[2fr_1fr]">
                <div className="p-2 text-justify">
                    <p>Estoy disponible para explorar oportunidades laborales y proyectos autónomos. Si tienes alguna pregunta o solicitud, no dudes en contactarme. ¡Estoy aquí para ayudarte!</p>
                </div>

                <section className="flex justify-end">
                    <div className="flex flex-col border p-2 px-4 gap-2 w-[250px] max-w-[300px]">
                        <h3 className="font-bold text-lg text-center">Contáctame aquí</h3>
                        <span><i className='bx bxl-discord'></i> PedroT#8380</span>
                        <span><i className='bx bxs-envelope'></i> pedroancco.321@gmail.com</span>
                    </div>
                </section>
            </article>
        </section>
    )
}
export default Contacts