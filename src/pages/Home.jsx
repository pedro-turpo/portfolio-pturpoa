import AboutMe from "../components/AboutMe"
import Contacts from "../components/Contacts"
import Presentation from "../components/Presentation"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Home = () => {
    return (
        <section className="max-w-[1500px] mx-auto relative z-20">

            {/* Seccion contacts in the principal page */}
            <article className="hidden flex-col justify-center items-center w-[20px] fixed min-[1200px]:ml-[35px] min-[1400px]:ml-[85px] xl:flex">
                {/* Barr */}
                <div className="h-[260px] w-[1px] border border-gray">
                </div>

                {/* Icons and Links */}
                <section className="grid text-white mt-3 gap-4">
                    <a href="https://www.linkedin.com/in/pedro-turpo/" target="_black"><i className="fa-brands fa-linkedin-in fa-bounce"></i></a>
                    <a href="https://github.com/pedro-turpo" target="_black"><i className="fa-brands fa-github fa-bounce"></i></a>
                    <a href="https://twitter.com/Pedro_Ancco" target="_black"><i className="fa-brands fa-twitter fa-bounce"></i></a>
                    <a href="https://www.facebook.com/manuel.ancco.31/"><i className="fa-brands fa-facebook-f fa-bounce"></i></a>
                </section>
            </article>

            <Presentation />
            <Projects />
            <Skills />
            <AboutMe />
            <Contacts />
        </section>
    )
}
export default Home