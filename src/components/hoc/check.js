import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    let navigate = useNavigate()
    const userInfo = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        if (userInfo) {
            navigate("/")
        } 
    })
}

export default Auth







