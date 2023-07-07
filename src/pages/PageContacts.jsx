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
                <section className="grid sm:grid-cols-[1fr_1fr] mt-6">
                    {/* My short description */}
                    <article className="border">
                        <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    </article>
                    {/* My principal contacts */}
                    <article className="grid sm:grid-cols-2 gap-2 pl-8">
                        <section className="border">
                            <span>Support me here</span>
                            <p>4149500120690030</p>
                        </section>

                        <section className="border">
                            <span>Message me here</span>
                            <a className="block" href="#"><i className="fa-brands fa-discord fa-beat-fade"></i></a>
                            <a href="#"></a>
                        </section>
                    </article>
                </section>
            </article>
        </section>
    )
}
export default PageContacts