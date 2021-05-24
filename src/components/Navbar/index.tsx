import React, { useState } from "react";
import Link from "./components/Link";
import Logo from "./components/Logo";
import SocialIcons from "./components/SocialIcons";
import Burger from "./components/Burger";

const NavBar = () => {
    const [slide, setSlide] = useState(false);
    return (
        <header className="flex fixed bg-black bg-opacity-70 top-0 inset-x-0 z-50">
            <nav className="container mx-auto px-8 md:px-0 py-3 flex items-center justify-between">
                <Logo />
                <div className="md:flex w-3/5 justify-center hidden">
                    <Link path="/" name="Home" isExact/>
                    <Link path="/projects" name="Projects"/>
                    <Link path="/posts" name="Posts"/>
                </div>
                <div className={"fixed inset-0 transition-transform ease-in duration-400 md:hidden transform " + (slide ? "": "translate-x-full")}>
                    <div className="flex flex-col mx-auto bg-black bg-opacity-95 items-center h-screen justify-evenly">
                        <Link path="/" name="Home" isExact className="text-3xl" />
                        <Link path="/projects" name="Projects" className="transition-transform translate-x-6 text-3xl" />
                        <Link path="/posts" name="Posts" className="text-3xl" />
                        <SocialIcons className="md:hidden" />
                    </div>
                </div>
                <SocialIcons className={"md:flex hidden"} />
                <Burger clicked={slide} onClick={() => setSlide(!slide)} />
            </nav>
        </header>
    )
}

export default NavBar