const PageContacts = () => {
    return (
        <section className="pt-[90px] max-w-[1150px] mx-auto px-8 sm:px-[100px]">
            {/* Section my all contacts */}
            <article>
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl font-bold"><span className="text-primary text-[32px]">/</span>Contacts</h2>
                </div>

                <p className="text-justify mt-4">Who am i?</p>

                {/* body of my contacts */}
                <section className="grid sm:grid-cols-[1fr_1fr] mt-6 text-gray">
                    {/* My short description */}
                    <article>
                        <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    </article>
                    {/* My principal contacts */}
                    <article className="grid sm:grid-cols-2 gap-2 pl-4">
                        <section className="border p-2 text-center">
                            <span className="font-bold text-white">Support me here</span>
                            <p>4149500120690030</p>
                        </section>

                        <section className="border p-2">
                            <span className="font-bold text-white">Message me here</span>
                            <a className="block" href="#"><i className="fa-brands fa-discord fa-beat-fade text-primary"></i> Elias#1234</a>
                            <a className="block" href="#"><i className="fa-sharp fa-solid fa-envelope fa-beat-fade text-primary"></i> elias@elias-dev.ml</a>
                        </section>
                    </article>
                </section>

                {/* Secction My skills */}
                <section className="mt-8">
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                        <h2 className="text-2xl"><span className="text-primary font-bold">#</span>all-media</h2>
                        <div className="border border-primary h-0"></div>
                    </div>

                    <div className="flex justify-between">
                        <a><i className="fa-brands fa-twitter fa-beat-fade"></i> @elias</a>
                        <a><i className="fa-brands fa-twitter fa-beat-fade"></i> @elias</a>
                        <a><i className="fa-brands fa-twitter fa-beat-fade"></i> @elias</a>
                    </div>
                </section>
            </article>
        
        </section>
    )
}
export default PageContacts