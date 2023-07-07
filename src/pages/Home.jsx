import AboutMe from "../components/AboutMe"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Presentation from "../components/Presentation"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Home = () => {
    return (
        <>
            <Presentation />
            <Projects />
            <Skills />
            <AboutMe />
            <Contacts />
        </>
    )
}
export default Home