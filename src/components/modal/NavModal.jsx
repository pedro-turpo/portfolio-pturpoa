import { useEffect } from "react"
import { Link } from "react-router-dom"
import useWindowSize from "../../hook/useWindowSize"

const NavModal = ({ openModal, setOpenModal }) => {

    const handleClickCloseModal = () => {
        setOpenModal(!openModal)
    }

    // Auto close Modal
    const windowSize = useWindowSize();
    const breakpoint = 700;

    useEffect(() => {
        if (windowSize.width >= breakpoint) {
            setOpenModal(!openModal);
        }
    }, [windowSize.width, breakpoint, setOpenModal]);


    return (
        <section className="min-h-screen min-w-full fixed z-40 bg-background flex flex-col justify-between">

            <article>
                {/* logo and brand  movile mode*/}
                <section className="h-[80px] flex items-end px-4 pb-4 text-xl">
                    <Link to="/" onClick={handleClickCloseModal} className="font-[Orbitron] text-xl font-bold"> <i className="fa-solid fa-bug fa-shake text-primary"></i> Leunam</Link>
                </section>

                {/* section of link in the home */}
                <nav className="flex flex-col pl-6 my-5 py-5 gap-8 text-2xl cursor-pointer">
                    <a href="#" onClick={handleClickCloseModal}><span className="text-primary">#</span>Inicio</a>
                    <a href="#projects" onClick={handleClickCloseModal}><span className="text-primary">#</span>Proyectos</a>
                    <a href="#skills" onClick={handleClickCloseModal}><span className="text-primary">#</span>Habilidades</a>
                    <a href="#aboutMe" onClick={handleClickCloseModal}><span className="text-primary">#</span>Sobre-mí</a>
                    <a href="#contacts" onClick={handleClickCloseModal}><span className="text-primary">#</span>Contacto</a>
                </nav>
            </article>

            {/* Secction of my networks (github, linkedin, twitter, facebook) */}
            <article className="flex text-white text-xl gap-8 justify-center py-5">
                <a href="https://www.linkedin.com/in/pedro-turpo/" target="_black"><i className="fa-brands fa-linkedin-in fa-bounce"></i></a>
                <a href="https://github.com/pedro-turpo" target="_black"><i className="fa-brands fa-github fa-bounce"></i></a>
                <a href="https://twitter.com/Pedro_Ancco" target="_black"><i className="fa-brands fa-twitter fa-bounce"></i></a>
                <a href="https://www.facebook.com/manuel.ancco.31/"><i className="fa-brands fa-facebook-f fa-bounce"></i></a>
            </article>

            {/* Button for Close of the modal */}
            <button onClick={handleClickCloseModal} type="button" className="absolute right-5 top-7 text-2xl"><i className="fa-solid fa-xmark"></i></button>
        </section>
    )
}
export default NavModal