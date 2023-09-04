import { Link } from "react-router-dom"

const Header = ({ openModal, setOpenModal }) => {

    const handleClickOpenModal = () => {
        setOpenModal(!openModal)
    }

    return (
        /* This part is the Header of my portfolio */
        <header className="h-[80px] flex justify-between px-4 pb-2 items-end min-[420px]:px-8 max-w-[1400px] fixed w-full bg-background left-1/2 -translate-x-1/2 z-30 ">
            {/* Logo and name */}

            <section className="text-xl min-[420px]:text-2xl mb-2">
                <Link to="/"> <i className="fa-solid fa-bug fa-shake text-primary
                 "></i> Leunam</Link>
            </section>

            {/* navbar */}
            <section className="text-lg md:text-xl mb-2">
                <button onClick={handleClickOpenModal} className="text-white text-3xl block min-[700px]:hidden" type="button"><i className='bx bx-menu'></i></button>

                <nav className="hidden min-[700px]:flex gap-2 md:gap-4 lg:gap-8">
                    <a href="#"><span className="text-primary">#</span>Inicio</a>
                    <a href="#projects"><span className="text-primary">#</span>Proyectos</a>
                    <a href="#skills"><span className="text-primary">#</span>Habilidades</a>
                    <a href="#aboutMe"><span className="text-primary">#</span>Sobre-mí</a>
                    <a href="#contacts"><span className="text-primary">#</span>Contactos</a>
                </nav>
            </section>
        </header>
    )
}
export default Header