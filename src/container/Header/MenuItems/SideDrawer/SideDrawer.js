import React from 'react';
import './SideDrawer.css'
import Logo from '../../../../components/logo/logo'
import MenuItems from '../../MenuItems/MenuItems'
import Button from '../../../../components/UI/button/button'
import Backdrop from '../../../../components/UI/backdrop/Backdrop'

const SideDrawer = (props) => {
    let classes = ['SideDrawer', 'Close']
    if (props.show) {
        classes = ['SideDrawer', 'Open']
    }
    return (
        <React.Fragment>
            <Backdrop show={props.show} backDropClosed={props.closeSideDrawer}/>
            <div className={classes.join(' ')}>
                <Logo height="10%" />
                <nav>
                    <MenuItems />
                </nav>
                <div className="boxbtn">
                    <Button btnType='danger' clicked={() => { alert('Sing in') }}>
                        Login/Register
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer