import React from 'react';
import './Toolbar.css'
import Logo from '../../.././components/logo/logo'
import MenuItems from '../MenuItems/MenuItems'

const Toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <Logo />
            <nav><MenuItems /></nav>
            <button>Login/Register</button>
        </header>
    )
}

export default Toolbar