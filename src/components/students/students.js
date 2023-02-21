import React from 'react';
import Student from './student/student'
import './student/student.css'
import PropTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const Students = (props) => {
    let studentsList = (
        props.studentsList.map((student, index) =>
            <ErrorBoundary key={index}>
                <Student
                    id={student.id}
                    name={student.name}
                    classNumber={student.classNumber}
                    phoneNumber={student.phoneNumber}
                    email={student.email}
                    nameChange={(event) => props.nameChange(event, student.id)}
                    classNumberChange={(event) => props.classNumberChange(event, student.id)}
                    phoneNumberChange={(event) => props.phoneNumberChange(event, student.id)}
                    emailChange={(event) => props.emailChange(event, student.id)}
                    delete={props.delete}
                    edited={() => props.edited(student.id)}
                />
            </ErrorBoundary>
        )
    )
    if (props.toggle) {
        return (
            <div className='student-section'>
                {studentsList}
            </div>
        )
    }
    return studentsList
}

export default React.memo(Students)
Students.prototype = {
    studentsList: PropTypes.array.isRequired,
    nameChange: PropTypes.func.isRequired,
    classNumberChange: PropTypes.func.isRequired,
    phoneNumberChange: PropTypes.func.isRequired,
    emailChange: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired

}