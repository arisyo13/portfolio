import React from "react";
import { NavLink } from "react-router-dom";

export default function MyLink(props) {
    return (
        <NavLink 
            className="inline-flex py-3 px-4 items-center mr-3 text-blue-300 hover:bg-gray-300" 
            to={props.path} 
            exact={props.isExact}
            activeClassName="text-blue-600 bg-gray-200"
        >
            {props.name}
        </NavLink>
    )
}