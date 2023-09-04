import { Link } from "react-router-dom"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Presentation = () => {
    const [text] = useTypewriter({
        words: ['Un desarrollador front-end', 'Un desarrollador back-end', 'Un desarrollador Full Stack', 'Un ingeniero en sistemas informáticos', 'Un diseñador UI/UX'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })


    return (
        <section className="grid pt-[120px] max-w-[1400px] mx-auto">

            {/* Presentacion and img */}
            <article className="flex flex-col items-center sm:flex-row sm:h-[520px]">
                <div className="py-2 px-10 sm:w-[50%] sm:pr-0 sm:text-justify">
                    <section className="text-[25px] font-bold sm:ml-[100px]">
                        <h2 className="text-7xl">Pedro Turpo</h2>
                        <h2 className="mt-10">¿Quién soy?</h2>
                        <div><span className="text-primary">{text} <Cursor cursorColor='blue' /></span></div>

                        <p className="mt-4 font-semibold text-gray">I'm a frontend developer creating responsive websites where technologies meet creativity</p>

                        <button className="mt-8 border border-primary text-xl py-2 px-4"><Link to="/contacts" >Contact me!!</Link></button>
                    </section>

                </div>
                <section className="flex flex-col justify-center items-center gap-4 sm:w-[50%] p-5 h-full">
                    <div className="sm:w-full h-[85%]">
                        <img className="mx-auto max-h-[450px] object-cover min-[750px]:-mt-[50px]" src="/images/myPhoto.png" alt="" />
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