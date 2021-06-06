import { NavLink } from "react-router-dom";

type Props = {
    path: string,
    isExact?: boolean,
    name: string,
}

const Link = (props: Props) => {
    return (
        <NavLink 
            className=" text-white py-1 px-4 text-2xl md:text-lg items-center"
            to={props.path} 
            exact={props.isExact}
            activeClassName="font-bold"
        >
            {props.name}
        </NavLink>
    )
}

export default Link