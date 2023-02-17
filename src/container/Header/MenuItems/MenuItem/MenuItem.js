import React from "react";
import { NavLink } from 'react-router-dom'
import './MenuItem.css'

const MenuItem = (props) => {
    let activeClassName = 'myStyle'
    return (
        <li className="MenuItem">
            <NavLink to={props.link} exact className={({isActive}) => isActive ? activeClassName : undefined }>
                {props.children}
            </NavLink>
        </li>
    )
}

export default React.memo(MenuItem) 