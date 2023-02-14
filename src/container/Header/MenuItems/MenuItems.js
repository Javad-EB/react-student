import React from "react";
import './MenuItems.css'
import MenuItem from './MenuItem/MenuItem'

const MenuItems = () => {
    return (
        <ul className="MenuItems">
            <MenuItem link="/" active>
                Main Page
            </MenuItem>
            <MenuItem link="/">
                Register Student
            </MenuItem>
        </ul>
    )
}

export default React.memo(MenuItems) 