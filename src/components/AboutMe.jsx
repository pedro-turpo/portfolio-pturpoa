import { Link } from "react-router-dom"

const AboutMe = () => {
    return (
        <section id="aboutMe" className="pt-[90px] max-w-[1150px] mx-auto px-8 sm:px-[100px]">

            {/* The head of this section */}
            <article className="grid grid-cols-[2fr_1fr]">
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                    <h2 className="text-2xl"><span className="text-primary">#</span>About-me</h2>
                    <div className="border border-primary h-0"></div>
                </div>
            </article>

            {/* Section about me */}
            <article className="grid sm:grid-cols-[1fr_1fr] mt-4">
                {/* My description */}
                <section className="flex flex-col justify-center gap-2 p-2">
                    <h3>Hello, i’m Pedro!</h3>
                    <p>I'm a self-taught front-end developer based in Puno, Peru. I can develop responsive websites from scratch and turn them into modern, easy-to-use web experiences.</p>

                    <p>Transforming my creativity and knowledge into a website has been my passion for over a year. I always strive to learn about the latest technologies and frameworks.</p>
                    
                    <Link to="/aboutme" className="flex gap-2 justify-center items-center border border-primary w-[120px] mt-8 font-semibold">Read more <i className='bx bx-link-external text-lg'></i></Link>
                    
                </section>

                <section className="grid justify-center">
                    <div className="min-w-[200px] max-w-[300px] aspect-square border-b border-primary">
                        <img src="/images/image2.png" alt="" />
                    </div>
                </section>
            </article>

        </section>
    )
}
export default AboutMe