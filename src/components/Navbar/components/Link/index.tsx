import { NavLink } from "react-router-dom";

type Props = {
    path: string,
    isExact?: boolean,
    name: string,
}

const Link = (props: Props) => {
    return (
        <NavLink 
            className="inline-flex text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-purple-500 py-2 px-6 opacity-100 text-lg items-center mr-3 " 
            to={props.path} 
            exact={props.isExact}
            activeClassName={"bg-clip-text bg-gradient-to-br from-blue-500 to-purple-900"}
        >
            {props.name}
        </NavLink>
    )
}

export default Link