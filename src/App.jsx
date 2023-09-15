import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import MoreProjects from "./pages/MoreProjects"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PageAboutMe from "./pages/PageAboutMe"
import PageContacts from "./pages/PageContacts"
import { useEffect, useState } from "react"
import NavModal from "./components/modal/NavModal"

function App() {

  const [openModal, setOpenModal] = useState(false)

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <main className="bg-background min-h-screen font-[Inconsolata] text-white">

      {
        openModal ? <NavModal openModal={openModal} setOpenModal={setOpenModal} /> : <Header openModal={openModal} setOpenModal={setOpenModal} />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<MoreProjects />} />
        <Route path="/aboutme" element={<PageAboutMe />} />
        <Route path="/contacts" element={<PageContacts />} />
      </Routes>
      <Footer />

    </main>
  )
}

export default App

/* NOTES 
!! 1.Me quede en la modificacion del navbar en modo movile
scroll-m-custom max-w-[1400px]
*/