import React, { useState, useEffect } from 'react'
import NewStudent from '../components/students/newStudent/newStudent'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddStudent = (props) => {
    const [studentName, setStudentName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [studentMobile, setStudentMobile] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [error, setError] = useState(false)
    useEffect(() => {
        console.log(props)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
    let navigate = useNavigate()
    const addStudent = () => {
        const data = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        axios.post('/posts', data)
            .then(response => {
                setError(false)
                console.log(response)
                navigate("/");
            }).catch(error => {
                setError(true)
                console.log(error)
            })
        // alert('Student Added')
        // setResult(true)
    }
    let ErrorMessage = null
    if (error) {
        ErrorMessage = <h1 style={{ textAlign: 'center', color: 'red', marginTop:"70px" }}>Progress didn't complete! Please try later.</h1>
    }
    return (
        <React.Fragment>
            {ErrorMessage}
            {/* {result && <Navigate replace to="/" />} */}
            <NewStudent
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