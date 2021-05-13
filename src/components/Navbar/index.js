import React from "react";
import { SocialIcon } from "react-social-icons";
import MyLink from "./components/MyLink";
import Logo from "./components/Logo";

export default function NavBar() {
    return (
        <header className="bg-white-100 blur">
            <div className="container mx-auto flex items-center p-3 justify-between">
                <Logo />
                <nav className="inline-flex">
                    <MyLink name="Projects" path="/projects" exact={true}></MyLink>
                    <MyLink name="Posts" path="/post" exact={true}></MyLink>
                </nav>
                <div className="inline-flex mr-3 items-center">
                    <SocialIcon 
                        url="https://www.facebook.com/arisyo13"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="black"
                        className="rounded-full border mr-3"
                        style={{ height: 32, width: 32}}
                    />
                    <SocialIcon 
                        url="https://www.linkedin.com/in/aris-arsen-kashari-1755a363"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="black"
                        className="rounded-full border mr-3"
                        style={{ height: 32, width: 32}}
                    />
                    <SocialIcon 
                        url="https://github.com/arisyo13"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="black"
                        className="rounded-full border"
                        style={{ height: 32, width: 32}}
                    />
                </div>
            </div>
        </header>
    )
}