import React, { useEffect } from 'react';
import clasess from './newStudent.module.css'
import Button from '../../UI/button/button';
import PropTypes from 'prop-types'
import WithClass from '../../hoc/WithClass'

const NewStudent = (props) => {
    useEffect(() => {
        console.log(props)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { studentName, studentClass, studentMobile, studentEmail } = props
    const { studentNameHandler, studentClassHandler, studentMobileHandler, studentEmailHandler, addStudent } = props

    return (
        <React.Fragment>
            <h1>Add New Student</h1>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={studentName} onChange={studentNameHandler} />
            <label htmlFor="cNumber">Class Number</label>
            <input type="number" name="cNumber" id="cNumber" value={studentClass} onChange={studentClassHandler} />
            <label htmlFor="mob">Mobile</label>
            <input type="number" name="mob" id="mob" value={studentMobile} onChange={studentMobileHandler} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={studentEmail} onChange={studentEmailHandler} />
            <Button
                clicked={addStudent}
                btnType='danger'
            >Add New Student</Button>
        </React.Fragment>
    )
}

export default React.memo(WithClass(NewStudent, clasess.newStudent))

NewStudent.prototype = {
    studentName: PropTypes.string.isRequired,
    studentNameHandler: PropTypes.func.isRequired,
    studentClass: PropTypes.number.isRequired,
    studentClassHandler: PropTypes.func.isRequired,
    studentMobile: PropTypes.number.isRequired,
    studentMobileHandler: PropTypes.func.isRequired,
    studentEmail: PropTypes.string.isRequired,
    studentEmailHandler: PropTypes.func.isRequired
}