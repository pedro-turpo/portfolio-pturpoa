const SkillsList = () => {
    return (
        <article className="w-[100%] mt-2 grid grid-rows-[auto_4fr] sm:grid-cols-[1fr_4fr] sm:grid-rows-[1fr]">
            {/*  empty place */}
            <section className="w-full h-full grid place-items-center">
                <div className="p-8 max-w-[200px]">
                    <img src="./skills-images/react.png" alt="image of react" />
                </div>
            </section>

            {/* My skills */}
            <section className="grid gap-4 sm:grid-cols-3 p-6">
                {/* Secction languajes */}
                <article>
                    <section className="border">
                        <div className="border-b p-2">
                            <h3 className="font-bold">Lenguajes de programación</h3>
                        </div>
                        <div className="p-2 flex gap-3 flex-wrap text-gray">
                            <span>TypeScript</span>
                            <span>Lua</span>
                            <span>Python</span>
                            <span>JavaScript</span>
                        </div>
                    </section>
                </article>

                {/* Section Databases and others */}
                <article className="flex flex-col gap-2">
                    {/* Data bases */}
                    <section className="border">
                        <div className="border-b p-2">
                            <h3 className="font-bold">Gestores de bases de datos</h3>
                        </div>
                        <div className="p-2 flex gap-3 flex-wrap text-gray">
                            <span>SQLite</span>
                            <span>PosgreSQL</span>
                            <span>MongoDB</span>
                        </div>
                    </section>
                    {/* Others */}
                    <section className="border">
                        <div className="border-b p-2">
                            <h3 className="font-bold">Otros</h3>
                        </div>
                        <div className="p-2 flex gap-3 flex-wrap text-gray">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>EJS</span>
                            <span>SCSS</span>
                        </div>
                    </section>
                </article>

                {/* Section Tools and Frameworks */}
                <article className="flex flex-col gap-2">
                    {/* Data bases */}
                    <section className="border">
                        <div className="border-b p-2">
                            <h3 className="font-bold">Herramientas</h3>
                        </div>
                        <div className="p-2 flex gap-3 flex-wrap text-gray">
                            <span>VSCode</span>
                            <span>Neovim</span>
                            <span>Linux</span>
                        </div>
                    </section>
                    {/* Others */}
                    <section className="border">
                        <div className="border-b p-2">
                            <h3 className="font-bold">Frameworks</h3>
                        </div>
                        <div className="p-2 flex gap-3 flex-wrap text-gray">
                            <span>React vue</span>
                            <span>Disnake</span>
                            <span>Flask</span>
                            <span>Express.js</span>
                        </div>
                    </section>

                </article>
            </section>

        </article>
    )
}
export default SkillsList