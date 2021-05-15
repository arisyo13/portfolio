import { NavLink } from "react-router-dom";

type Props = {
    path: string,
    isExact?: boolean,
    name: string,
}

const Link = (props: Props) => {
    return (
        <NavLink 
            className="inline-flex py-2 px-6 text-2xl md:text-lg items-center mr-3 text-white" 
            to={props.path} 
            exact={props.isExact}
            activeClassName="bg-blue-300 rounded-md"
        >
            {props.name}
        </NavLink>
    )
}

export default Link