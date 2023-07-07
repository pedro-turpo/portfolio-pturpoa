import { Link } from "react-router-dom"

const Header = () => {
    return (
        /* This part is the Header of my portfolio */
        <header className="h-[60px] flex justify-between px-4 pb-1 items-end text-xl min-[420px]:text-2xl min-[420px]:px-8 max-w-[1100px]  fixed w-full bg-background left-1/2 -translate-x-1/2 z-10">
            {/* Logo and name */}
            <section>
                <Link to="/"> <i className="fa-solid fa-bug fa-shake text-primary
                 "></i> Leunam</Link>
            </section>

            {/* navbar */}
            <section>
                <nav className="">
                    <Link to="/"><span className="text-primary">#</span>home</Link>
                    <a href="#projects"><span className="text-primary">#</span>projects</a>
                    {/*                     <a href="#skills"><span className="text-primary">#</span>skills</a>
                    <a href="#aboutMe"><span className="text-primary">#</span>about-me</a>
                    <a href="#contacts"><span className="text-primary">#</span>contacts</a> */}
                </nav>
            </section>

            

        </header>
    )
}
export default Header