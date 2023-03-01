import React, { useState, useContext } from 'react';
import './Toolbar.css'
import Logo from '../../../components/logo/logo'
import Icon from '../../../components/icon/icon'
import MenuItems from '../MenuItems/MenuItems'
import Button from '../../../components/UI/button/button'
import Modal from '../../../components/UI/Modal/Modal'
import Signin from '../../../components/user/signin/signin'
import SideDrawer from '../MenuItems/SideDrawer/SideDrawer'
import { AuthContext } from '../../../context/auth/authContext'
import { ThemeContext } from '../../../context/Theme/themeContext'
import { useNavigate } from 'react-router-dom'
// import { auth } from '../../../components/hoc/check'


const Toolbar = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [openSideDrawer, setOpenSideDrawer] = useState(false)
    const authContext = useContext(AuthContext)
    const themeContext = useContext(ThemeContext)
    const { lightTheme, light, dark } = themeContext
    const theme = lightTheme ? light : dark

    const modalHandler = () => {
        setShowModal(true)
    }
    const ModalClosed = () => {
        setShowModal(false)
    }
    const sideDrawerHandler = () => {
        setOpenSideDrawer(true)
    }
    const closeSideDrawer = () => {
        setOpenSideDrawer(false)
    }
    let navigate = useNavigate()
    const logout = () => {
        authContext.dispatch({ type: 'logout' })
        navigate('/')
    }
    const themeHandler = () => {
        themeContext.changeTheme()
    }

    let auth = false
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if (userInfo) {
        auth = true
    }
    return (
        <header className='Toolbar' style={{ background: theme.bg, color: theme.syntax }}>
            <SideDrawer show={openSideDrawer} closeSideDrawer={closeSideDrawer} />
            <div className="showIcon" onClick={sideDrawerHandler}>
                <div className="hamburger-lines">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <span className="showNav flex">
                <Logo />
            </span>
            <span className="showNav flex">
                <nav>
                    <MenuItems />
                </nav>
            </span>
            <span className='l2' onClick={themeHandler}>
                <Icon />
            </span>
            <span className="showNav">
                {auth ?
                    <Button btnType='danger' clicked={logout} >
                        Logout
                    </Button> :
                    <Button btnType='danger' clicked={modalHandler} >
                        Login/Register
                    </Button>
                }
            </span>
            <Modal show={showModal} backDropClosed={ModalClosed}>
                <Signin />
            </Modal>
        </header>
    )
}

export default React.memo(Toolbar)