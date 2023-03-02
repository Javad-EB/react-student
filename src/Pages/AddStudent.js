import React, { useState, useEffect } from 'react'
import NewStudent from '../components/students/newStudent/newStudent'
import { useNavigate } from 'react-router-dom'

const AddStudent = (props) => {
    const [studentName, setStudentName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [studentMobile, setStudentMobile] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [error, setError] = useState('')

    let navigate = useNavigate()
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

    const studentNameHandler = (event) => {
        setStudentName(event.target.value)
    }
    const studentClassHandler = (event) => {
        setStudentClass(event.target.value)
    }
    const studentMobileHandler = (event) => {
        setStudentMobile(event.target.value)
    }
    const studentEmailHandler = (event) => {
        setStudentEmail(event.target.value)
    }
    const validate = () => {
        if (studentName === '') {
            setError('Name can not be Empty')
            return false
        } else if (studentClass === '') {
            setError('Class number can not be Empty')
            return false
        }
        else if (studentClass.length < 2 || studentClass.length > 6) {
            setError('Class number must be between 2 and 6')
            return false
        } else if (studentMobile === '') {
            setError('Mobile can not be Empty')
            return false
        }
        else if (studentMobile.length < 8 || studentMobile.length > 14) {
            setError('Phone number must be between 8 and 14')
            return false
        } else if (studentEmail === '') {
            setError('Email can not be Empty')
            return false
        }
        else if (!studentEmail.includes('@') || !studentEmail.includes('.')) {
            setError('Email Must be Includes @ and .')
            return false
        }
        setError('')
        return true
    }
    const addStudent = () => {
        const validateResult = validate()
        if (validateResult) {
            fetch('http://10.0.0.6/student/insertStudent.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    student_name: studentName,
                    student_class: studentClass,
                    student_phone_number: studentMobile,
                    student_email: studentEmail
                })
            }).then((response) => response.json())
                .then((responceJson) => {
                    if (responceJson === "User has been successfully registered") {
                        navigate("/")
                    } else {
                        setError(responceJson)
                    }
                }).catch((err) => {
                    setError(err)
                })
        }
    }
    let ErrorMessage = null
    if (error) {
        ErrorMessage = <h1 style={{ textAlign: 'center', color: 'red', marginTop: "50px" }}>{error}</h1>
    }
    return (
        <React.Fragment>
            {ErrorMessage}
            < NewStudent
                studentName={studentName}
                studentClass={studentClass}
                studentMobile={studentMobile}
                studentEmail={studentEmail}
                studentNameHandler={studentNameHandler}
                studentClassHandler={studentClassHandler}
                studentMobileHandler={studentMobileHandler}
                studentEmailHandler={studentEmailHandler}
                addStudent={addStudent}
            />
        </React.Fragment>
    )
}

export default AddStudent