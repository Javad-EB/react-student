import React, { useState, useEffect } from 'react'
import NewStudent from '../components/students/newStudent/newStudent'
import { Navigate } from 'react-router-dom'

const AddStudent = (props) => {
    const [studentName, setStudentName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [studentMobile, setStudentMobile] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [result, setResult] = useState(false)
    useEffect(() => {
        console.log(props)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
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
    const addStudent = () => {
        alert('Student Added')
        setResult(true)
    }

    return (
        <React.Fragment>
            {result && <Navigate replace to="/" />}
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