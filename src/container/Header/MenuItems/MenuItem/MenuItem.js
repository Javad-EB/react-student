import React from "react";
import './MenuItem.css'

const MenuItem = (props) => {
    const classes = []
    if (props.active) {
        classes.push('active')
    }
    return (
        <li className="MenuItem">
            <a href={props.link} className={classes}>
                {props.children}
            </a>
        </li>
    )
}

export default React.memo(MenuItem) 