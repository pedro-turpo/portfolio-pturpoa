const Presentation = () => {
    return (
        <section className="grid pt-[70px] max-w-[1100px] mx-auto">

            {/* Presentacion and img */}
            <article className="flex flex-col items-center sm:flex-row sm:h-[520px]">
                <div className="py-2 px-10 sm:w-[50%] sm:pr-0 sm:text-justify">
                    <h2 className="text-[32px] font-bold sm:ml-[100px]">Leunam is a <span className="text-primary">web designer</span> and <span className="text-primary">frontEnd developer</span></h2>

                    <p className="mt-4 font-semibold text-gray sm:ml-[100px]">He crafts responsive websites where technologies meet creativity</p>

                    <button className="sm:ml-[100px] mt-8 border border-primary font-bold text-xl py-2 px-4">Contact me!!</button>
                </div>
                <section className="flex flex-col justify-center items-center gap-4 sm:w-[50%] p-5">
                    <div className=" sm:w-full">
                        <img className="mx-auto" src="/images/image.png" alt="" />
                    </div>
                    <div className="p-2 flex gap-2 border items-center">
                        <div className="h-[10px] aspect-square bg-primary"></div>
                        <h3 className="text-gray font-bold">Currently working on <span className="text-white font-bold">Portfolio</span></h3>
                    </div>
                </section>
            </article>

            {/* Cite */}
            <section className="flex flex-col items-center mt-9 mx-5">
                <div className="flex flex-col max-w-[700px]">
                    <article className="border p-2 relative sm:text-xl py-4">
                        <p>With great power comes great electricity bill lorem</p>
                        <span className="absolute -top-3 left-3 text-xl bg-background"><i className='bx bxs-quote-left'></i></span>
                    </article>
                    <article className="flex justify-end sm:text-xl">
                        <div className="border p-2 relative">
                            - Dr. Who
                            <span className="absolute -top-4 right-3 text-xl bg-background"><i className='bx bxs-quote-right'></i></span>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    )
}
export default Presentation