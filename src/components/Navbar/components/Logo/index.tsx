import { NavLink } from "react-router-dom";
import logo from "./assets/myLogo.svg";

const Logo = () => {
    return (
        <NavLink className="flex w-1/5 justify-start z-50" to="/" exact >
            <img src={logo} alt="page-logo" width={40} height={40} />
        </NavLink>
    )
}

export default Logo