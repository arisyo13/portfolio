import { NavLink } from "react-router-dom";

type Props = {
    path: string,
    isExact?: boolean,
    name: string,
    className?: string,
}

const Link = (props: Props) => {
    return (
        <NavLink 
            className={"inline-flex text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-purple-500 py-2 px-6 text-xl items-center mr-3 " + props.className }
            to={props.path} 
            exact={props.isExact}
            activeClassName={"bg-clip-text bg-gradient-to-br from-blue-600 to-red-900 font-bold"}
        >
            {props.name}
        </NavLink>
    )
}

export default Link