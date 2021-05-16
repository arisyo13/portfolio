import React, { useState } from "react";
import Link from "./components/Link";
import Logo from "./components/Logo";
import SocialIcons from "./components/SocialIcons";
import Burger from "./components/Burger";

const NavBar = () => {
    const [slide, setSlide] = useState("translate-x-full");
    const [isClicked, setClicked] = useState(true);
    const slider = () => {
        slide === "" ? setSlide("translate-x-full") : setSlide("");
        slide === "" ? setClicked(true) : setClicked(false);
    }

    return (
        <header className="flex fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-8 md:px-0 py-3 inline-flex items-center justify-between">
                <Logo />
                <nav className={"md:flex w-3/5 justify-center hidden"}>
                    <Link path="/" name="Home" isExact/>
                    <Link path="/projects" name="Projects"/>
                    <Link path="/posts" name="Posts"/>
                </nav>
                <nav className={"flex bg-black absolute top-0 right-0 w-full h-screen items-center justify-center transition-transform ease-in duration-400 flex-col md:hidden transform " + slide}>
                    <Link path="/" name="Home" isExact className="text-2xl" />
                    <Link path="/projects" name="Projects" className="text-2xl" />
                    <Link path="/posts" name="Posts" className="text-2xl" />
                    <SocialIcons className="md:hidden" />
                </nav>
                <SocialIcons className={"md:flex hidden"} />
                <Burger clicked={isClicked} onClick={() => slider()} />
            </div>
        </header>
    )
}

export default NavBar