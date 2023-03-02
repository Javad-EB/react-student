import React, { useEffect, useState } from 'react';
import Button from '../components/UI/button/button'
import './style/editStudent.css'
import { useNavigate, useLocation } from 'react-router-dom'

const EditStudent = (props) => {
    let navigate = useNavigate()
    const location = useLocation()
    const id = location.state.id
    const [student_name, setName] = useState(location.state.name)
    const [student_classNumber, setClass] = useState(location.state.classNumber)
    const [student_phoneNumber, setPhone] = useState(location.state.phoneNumber)
    const [student_email, setEmail] = useState(location.state.email)
    const [message, setMessage] = useState('')
    let auth = false
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if (userInfo) {
        auth = true
    }
    useEffect(() => {
        if (!auth) {
            navigate("/")
        }
    }, [auth, navigate])

    const editStudent = () => {
        fetch('http://10.0.0.6/student/updateStudent.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                student_id: id,
                student_name: student_name,
                student_class: student_classNumber,
                student_phone_number: student_phoneNumber,
                student_email: student_email
            })
        }).then((response) => response.json())
            .then((responceJson) => {
                if (responceJson === "Successfull") {
                    navigate("/")
                } else {
                    setMessage(responceJson)
                }
            }).catch((err) => {
                setMessage(err)
            })
    }

    const changeNameHandler = (e) => {
        if (e.target.value === '') {
            setMessage('Name cannot be empty')
        } else {
            setMessage('')
            setName(e.target.value)
        }
    }
    const changeClassNumberHandler = (e) => {
        if (e.target.value === '') {
            setMessage('ClassNumber cannot be empty')
        } else if (e.target.value.length > 8) {
            setMessage('ClassNumber must be less than 8')
        }
        else {
            setMessage('')
            setClass(e.target.value)
        }
    }
    const changePhoneNumberHanlder = (e) => {
        if (e.target.value === '') {
            setMessage('PhoneNumber cannot be empty')
        } else if (e.target.value.length > 12) {
            setMessage('PhoneNumber must be between 8 and 12')
        }
        else {
            setMessage('')
            setPhone(e.target.value)
        }
    }
    const changeEmailHandler = (e) => {
        if (e.target.value === '') {
            setMessage('Email cannot be empty')
        } else if (!e.target.value.includes('@') || !e.target.value.includes('.')) {
            setMessage('Email Must be Includes @ and .')
        }
        else {
            setMessage('')
            setEmail(e.target.value)
        }
    }
    return (
        <div className='newStudent'>
            <h1>Edit New Student</h1>
            <span style={{ textAlign: 'center', color: 'red'}}>{message}</span>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={student_name} onChange={changeNameHandler} />
            <label htmlFor="cNumber">Class Number</label>
            <input type="number" name="cNumber" id="cNumber" value={student_classNumber} onChange={changeClassNumberHandler} />
            <label htmlFor="mob">Mobile</label>
            <input type="number" name="mob" id="mob" value={student_phoneNumber} onChange={changePhoneNumberHanlder} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={student_email} onChange={changeEmailHandler} />
            <Button
                clicked={editStudent}
                btnType='danger'
            >Edit Student</Button>
        </div>
    )
}

export default EditStudent