import React from 'react';
import './button.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    let classes = ["button"]
    switch (props.btnType) {
        case "danger":
            classes.push("danger")
            break
        case "success":
            classes.push("success")
            break
        default:
            break
    }
    return (
        <button
            className={classes.join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default React.memo(Button)
Button.propTypes = {
    children: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    btnType: PropTypes.string
}
Button.defaultProps = {
    btnType: 'success'
}
