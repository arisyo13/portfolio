import React, { useState } from "react";
import Link from "./components/Link";
import Logo from "./components/Logo";
import SocialIcons from "./components/SocialIcons";
import Burger from "./components/Burger";
import { Container, NavHeader } from "../Styled";

const NavBar = () => {
    const [slide, setSlide] = useState(false);
    return (
        <NavHeader>
            <Container>
                <nav className="h-11 flex items-center justify-between">
                    <Logo />
                    <div className="md:flex w-3/5 justify-center hidden ">
                        <Link path="/" name="Home"/>
                        <Link path="/projects" name="Projects"/>
                        <Link path="#test" name="Posts"/>
                        <Link path="/about" name="About"/>
                        <Link path="#contact" name="Contact"/>
                    </div>
                    <SocialIcons className={"md:flex hidden"} />
                    <Burger clicked={slide} onClick={() => setSlide(!slide)} />
                    <div className={"fixed inset-0 transition-transform ease-in duration-400 md:hidden transform " + (slide ? "": "translate-x-full")}>
                        <div className="flex flex-col items-center backdrop-filter backdrop-blur-sm bg-black bg-opacity-70 h-screen py-28 justify-evenly">
                            <div className="flex flex-col gap-4 items-center">
                            <Link path="/" name="Home" />
                            <Link path="/projects" name="Projects" />
                            <Link path="#test" name="Posts" />
                            <Link path="/about" name="About"/>
                            <Link path="#contact" name="Contact"/>
                            </div>
                            <SocialIcons className="md:hidden" />
                        </div>
                    </div>
                </nav>
            </Container>
        </NavHeader>
    )
}

export default NavBar