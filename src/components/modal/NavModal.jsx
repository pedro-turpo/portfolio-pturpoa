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
        <section className="min-h-screen min-w-full fixed z-40 bg-background">

            <article className="border">
                {/* logo and brand  movile mode*/}
                <section className="h-[80px] flex items-end px-4 pb-4 text-xl border">
                    <Link to="/" onClick={handleClickCloseModal}> <i className="fa-solid fa-bug fa-shake text-primary
                 "></i> Leunam</Link>
                </section>

                {/* section of link in the home */}

                <nav className="flex flex-col pl-6 my-5 py-5 gap-8 text-2xl cursor-pointer">
                    <Link to="/" onClick={handleClickCloseModal}><span className="text-primary">#</span>Inicio</Link>
                    <a href="#projects" onClick={handleClickCloseModal}><span className="text-primary">#</span>Proyectos</a>
                    <a href="#skills" onClick={handleClickCloseModal}><span className="text-primary">#</span>Habilidades</a>
                    <a href="#aboutMe" onClick={handleClickCloseModal}><span className="text-primary">#</span>Sobre-mí</a>
                    <a href="#contacts" onClick={handleClickCloseModal}><span className="text-primary">#</span>Contacto</a>
                </nav>
            </article>


            {/* Button for Close of the modal */}
            <button onClick={handleClickCloseModal} type="button" className="absolute right-5 top-5 text-2xl"><i className="fa-solid fa-xmark"></i></button>
        </section>
    )
}
export default NavModal