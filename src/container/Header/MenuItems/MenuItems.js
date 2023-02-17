import React from "react";
import './MenuItems.css'
import MenuItem from './MenuItem/MenuItem'

const MenuItems = () => {
    return (
        <ul className="MenuItems">
            <MenuItem link="/">
                Main Page
            </MenuItem>
            <MenuItem link="/add-student">
                Add Student
            </MenuItem>
        </ul>
    )
}

export default React.memo(MenuItems) 