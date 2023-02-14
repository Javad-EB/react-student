import React from 'react';
import './Modal.css'
import Backdrop from '../backdrop/Backdrop'

const Modal = (props) => {
    let classes = ["Modal"]
    switch (props.show) {
        case true:
            classes.push("ShowModal")
            break
        case false:
            classes.push("CloseModal")
            break
        default:
            break
    }
    return (
        <React.Fragment>
            <Backdrop show={props.show} backDropClosed={props.backDropClosed} />
            <div className={classes.join(' ')}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default React.memo(Modal)