import React from 'react';
import MyLogo from '../../assets/images/logo.png'
import './logo.css'

const Logo = () => {
    return (
        <div className='Logo'>
            <img src={MyLogo} alt="Logo of site" />
        </div>
    )
}

export default React.memo(Logo)