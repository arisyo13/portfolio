import React from "react";
import { SocialIcon } from "react-social-icons";
import MyLink from "../MyLink";

export default function NavBar() {
    return (
        <header className="bg-gray-100">
            <div className="container mx-auto flex items-center justify-between">
                <nav className="flex">
                    <MyLink name="Home" path="/" exact={false}></MyLink>
                    <MyLink name="Projects" path="/projects" exact={false}></MyLink>
                    <MyLink name="Posts" path="/post" exact={false}></MyLink>
                </nav>
                <div className="inline-flex mr-3 items-center">
                    <SocialIcon 
                        url="https://www.linkedin.com/in/aris-arsen-kashari-1755a363"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="black"
                        className="rounded-full border"
                        style={{ height: 32, width: 32, padding: 8}}
                    />
                    <SocialIcon 
                        url="https://github.com/arisyo13"
                        className="mr-3"
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