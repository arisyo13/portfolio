import { NavLink } from "react-router-dom";
import logo from "./assets/logo-full.png";

const Logo = () => {
    return (
        <NavLink className="flex w-1/5 justify-start" to="/"exact >
            <div>
                <img src={logo} alt="page-logo" width={46} height={46} />
            </div>
        </NavLink>
    )
}

export default Logo