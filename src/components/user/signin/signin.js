import React, { useState, useEffect } from 'react';
import myLogo from '../../../assets/images/logo.png'
import Button from '../../UI/button/button'
import './signin.css'
import reaload from '../../../assets/images/reload.png'


const Signin = (props) => {
    const [randomNumber1, setRandomNumber1] = useState(0)
    const [randomNumber2, setRandomNumber2] = useState(0)
    const [sumHolder, setSumHolder] = useState(0)
    const [captchaValue, setCaptchaValue] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        generateCaptcha()
    }, [])

    const generateCaptcha = () => {
        let num1 = Math.floor(Math.random() * 10) + 1
        let num2 = Math.floor(Math.random() * 10) + 1
        setRandomNumber1(num1)
        setRandomNumber2(num2)
        let sum = num1 + num2
        setSumHolder(sum)
    }
    const captchaHandler = (event) => {
        setCaptchaValue(Number(event.target.value))
    }
    const validate = () => {
        if (username === '') {
            setErrorMessage('Username Empty')
            return false
        } else if (!username.includes('@') || !username.includes('.')) {
            setErrorMessage('Username inValid')
            return false
        } else if (password === '') {
            setErrorMessage('Password Empty')
            return false
        } else if (password.length < 5) {
            setErrorMessage('Password inValid')
            return false
        }
        setErrorMessage('')
        return true
    }
    const loginHandler = () => {
        if (sumHolder === captchaValue) {
            setErrorMessage('')

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            // headers.append('Origin','http://localhost:3000');
            
            const validateResult = validate()
            if (validateResult) {
                fetch('http://10.0.0.6/student/user_login.php', {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        email: username,
                        password: password
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson === "Data Matched") {
                            alert(responseJson)
                        }
                        else {
                            setErrorMessage(responseJson)
                        }
                    }).catch((error) => {
                        alert(error)
                    })
            }
        }
        else {
            setErrorMessage('Captcha inValid')
            return false
        }
    }
    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }
    return (
        <React.Fragment>
            <p className='errormsg'>{errorMessage}</p>
            <img src={myLogo} alt="my Logo" />
            <input type="text" placeholder='UserName' value={username} onChange={usernameHandler} />
            <input type="password" placeholder='Password' value={password} onChange={passwordHandler} />
            <div className='captcha_view'>
                <p>{randomNumber1} + {randomNumber2} =</p>
                <input type="text" onChange={captchaHandler} />
                <img src={reaload} alt="captcha-img" onClick={generateCaptcha} />
            </div>
            <Button clicked={loginHandler}>
                Login
            </Button>
        </React.Fragment >
    )
}
export default Signin


