const Footer = () => {
    return (
        <section className="mt-[40px] max-w-[1150px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article>
                <div className="border border-primary h-0"></div>
            </article>

            <article>
                <section className="grid gap-4 mt-2 sm:grid-cols-2">
                    {/* Little footer and email */}
                    <article className="flex flex-col gap-2">
                        <div className="flex flex-wrap justify-between">
                            <div>
                                <a className="font-bold" href="#"><i className="fa-solid fa-bug fa-shake text-primary
                 "></i> Leunam</a>
                            </div>
                            <div>
                                <span className="text-gray">pedroancco.321@gmail.com</span>
                            </div>
                        </div>

                        <div className="text-justify">
                            <p>Web designer and front-end developer</p>
                        </div>
                    </article>

                    {/* My media */}
                    <article className="sm:flex sm:justify-end">
                        <div className="flex flex-col items-center gap-2 sm:items-start">
                            <h3 className="text-xl font-bold">Media</h3>
                            <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/pedro-turpo/" target="_black"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/pedro-turpo" target="_black"><i className='bx bxl-github'></i></a>
                                <a href="https://www.facebook.com/manuel.ancco.31/" target="_black"><i className='bx bxl-facebook'></i></a>
                            </div>
                        </div>
                    </article>
                </section>

                <section className="pb-8 mt-6 text-gray text-center">
                    <p>© Copyright 2023. Made by Leunam</p>
                </section>
            </article>

        </section>
    )
}
export default Footer