import React, { useEffect } from 'react';
import Student from './student/student'
import './student/student.css'
// import PropTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const Students = (props) => {

    let students = (
        props.studentsList.map((student, index) =>
            <ErrorBoundary key={index}>
                <Student
                    id={student.student_id}
                    name={student.student_name}
                    classNumber={student.student_class}
                    phoneNumber={student.student_phone_number}
                    email={student.student_email}
                    delete={() => props.delete(student.student_id)}
                    edited={() => props.edited(student.student_id)}
                />
            </ErrorBoundary>
        )
    )
    if (props.toggle) {
        return (
            <div className='student-section'>
                {students}
            </div>
        )
    }
    return students
}

export default React.memo(Students)
/* Students.prototype = {
    studentsList: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired

} */