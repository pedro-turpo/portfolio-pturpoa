const Header = () => {
    return (
        /* This part is the Header of my portfolio */
        <header className="h-[50px] flex justify-between px-4 pb-1 items-end text-xl min-[420px]:text-2xl min-[420px]:px-8 max-w-[1100px] mx-auto">
            {/* Logo and name */}
            <section>
                <h1>Leunam</h1>
            </section>

            {/* navbar */}
            <section>
                <nav>
                    <a href="#"><span className="text-primary">#</span>home</a>
                 {/*    <a href="#"><span className="text-primary">#</span>works</a>
                    <a href="#"><span className="text-primary">#</span>about-me</a>
                    <a href="#"><span className="text-primary">#</span>contacts</a>
                    <a href="#"></a> */}
                </nav>
            </section>
        </header>
    )
}
export default Header