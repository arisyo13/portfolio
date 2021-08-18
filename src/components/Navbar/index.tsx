import React, { useState, useEffect } from "react";
import { Container, NavHeader } from "../Styled";
import Link from "./components/Link";
import Logo from "./components/Logo";
import SocialIcons from "./components/SocialIcons";
import Burger from "./components/Burger";

const NavBar = () => {
    const [slide, setSlide] = useState(false);
    let body = null;
    let progressbar:any = null;
    let fullBodyHeight = 0;

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll, {passive: true});
        body = document.documentElement;
        progressbar = document.getElementById('progress')
        fullBodyHeight = body.scrollHeight - window.innerHeight;

        return () => {
			window.removeEventListener('scroll', handleScroll);
		};
    });
    
    const handleScroll = () => {
        progressbar.style.width = `${(window.pageYOffset / fullBodyHeight) * 100}%`
    };

    return (
        <NavHeader>
            <Container>
                <nav className="h-11 flex items-center justify-between">
                    <Logo />
                    <div className="md:flex w-3/5 justify-center hidden ">
                        <Link path="/" name="Home"/>
                        <Link path="#projects" name="Projects"/>
                        <Link path="#posts" name="Posts"/>
                        <Link path="#about" name="About"/>
                        <Link path="#contact" name="Contact"/>
                    </div>
                    <SocialIcons className={"md:flex hidden"} />
                    <Burger clicked={slide} onClick={() => setSlide(!slide)} />
                    <div className={"fixed inset-0 transition-transform ease-in duration-400 md:hidden transform " + (slide ? "": "translate-x-full")}>
                        <div className="flex flex-col items-center backdrop-filter backdrop-blur-sm bg-black bg-opacity-70 h-screen py-28 justify-evenly">
                            <div className="flex flex-col gap-4 items-center">
                                <Link path="/" name="Home" />
                                <Link path="#projects" name="Projects" />
                                <Link path="#test" name="Posts" />
                                <Link path="#about" name="About"/>
                                <Link path="#contact" name="Contact"/>
                            </div>
                            <SocialIcons className="md:hidden" />
                        </div>
                    </div>
                </nav>
                
            </Container>
            <div 
                id="progress"
                className="w-0 h-0.5 bg-gradient-to-r from-blue-400 via-red-500 to-pink-500" 
            />
        </NavHeader>
    )
}

export default NavBar