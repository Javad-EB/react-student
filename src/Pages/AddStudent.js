import React, { useState, useEffect, useRef } from 'react'
import NewStudent from '../components/students/newStudent/newStudent'

const AddStudent = (props) => {
    const [studentName, setStudentName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [studentMobile, setStudentMobile] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    useEffect(() => {
        console.log(props)
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
    }
    return (
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
    )
}

export default AddStudent