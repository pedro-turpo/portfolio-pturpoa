const Footer = () => {
    return (
        <section className="mt-[40px] max-w-[1150px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article>
                <div className="border border-primary h-0"></div>
            </article>

            <article>
                <section className="grid gap-2">
                    {/* Little footer and email */}
                    <article>
                        <div>
                            <div>
                                <a href="#">Leunam</a>
                            </div>
                            <div>
                                <span>elias@elias-dev.ml</span>
                            </div>
                        </div>

                        <div>
                            <p>Web designer and front-end developer</p>
                        </div>
                    </article>

                    {/* My media */}
                    <article>
                        <div>
                            <h3>Media</h3>
                            <div>
                                <i className='bx bxl-github'></i>
                                <i className='bx bxl-facebook'></i>
                                <i className='bx bx-gift'></i>
                            </div>
                        </div>
                    </article>
                </section>

                <section className="pb-10">
                    <p>© Copyright 2023. Made by Leunam</p>
                </section>
            </article>

        </section>
    )
}
export default Footer