import { NavLink } from "react-router-dom";
import logo from "./assets/myLogo.svg";

const Logo = () => {
    return (
        <NavLink className=" w-1/5 justify-start z-50" to="/" exact >
            <img src={logo} alt="page-logo" width={36} height={36} />
        </NavLink>
    )
}

export default Logo