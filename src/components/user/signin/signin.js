import React from 'react';
import myLogo from '../../../assets/images/logo.png'
import Button from '../../UI/button/button'
import './signin.css'

const Signin = (props) => (
    <React.Fragment>
        <img src={myLogo} alt="my Logo" />
        <input type="text" placeholder='UserName' />
        <input type="password" placeholder='Password' />
        <Button>
            Login
        </Button>
    </React.Fragment>

)

export default Signin


