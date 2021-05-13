import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo-full.png";

export default function MyLink(props) {
    return (
        <Link to="/">
            <div>
                <img src={Logo} alt="page-logo" width={60} height={60} />
            </div>
        </Link>
        
    )

}