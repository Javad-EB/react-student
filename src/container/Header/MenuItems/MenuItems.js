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
            <MenuItem link="/transition">
                CSS TRANSITION
            </MenuItem>
            <MenuItem link="/animation">
                ANIMATION
            </MenuItem>
            <MenuItem link="/mixtransition">
                MixTransition
            </MenuItem>
            <MenuItem link='/mixanimation'>
                MixAnimation
            </MenuItem>
        </ul>
    )
}

export default React.memo(MenuItems) 