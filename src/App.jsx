import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <main className="bg-background min-h-screen font-[Inconsolata] text-white">
      <Header />
      <Presentation />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App
