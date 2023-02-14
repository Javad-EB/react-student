import React, { useState } from 'react';
import './Toolbar.css'
import Logo from '../../.././components/logo/logo'
import MenuItems from '../MenuItems/MenuItems'
import Button from '../../../components/UI/button/button'
import Modal from '../../../components/UI/Modal/Modal'
import Signin from '../../../components/user/signin/signin'
import SideDrawer from '../MenuItems/SideDrawer/SideDrawer'

const Toolbar = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [openSideDrawer, setOpenSideDrawer] = useState(false)
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
    return (
        <header className='Toolbar'>
            <SideDrawer show={openSideDrawer} closeSideDrawer={closeSideDrawer} />
            <div className="showIcon" onClick={sideDrawerHandler}>
                <div class="hamburger-lines">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
            <span className="showNav">
                <Logo />
            </span>
            <span className="showNav">
                <nav>
                    <MenuItems />
                </nav>
            </span>
            <span className="showNav">
                <Button btnType='danger' clicked={modalHandler} >
                    Login/Register
                </Button>
            </span>
            <Modal show={showModal} backDropClosed={ModalClosed}>
                <Signin />
            </Modal>
        </header>
    )
}

export default Toolbar