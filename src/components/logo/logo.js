import React from 'react';
import MyLogo from '../../assets/images/logo.png'
import './logo.css'

const Logo = (props) => {
    return (
        <div className='Logo' style={{ height: props.height }}>
            <img src={MyLogo} alt="Logo of site" />
        </div>
    )
}

export default React.memo(Logo)