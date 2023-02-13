import React from 'react';
import Student from './student/student'
import './student/student.css'


const Students = (props) => {
    if (props.toggle) {
        return (
            <div className='student-section'>
                {
                    props.studentsList.map((student, index) =>
                        <Student
                            key={index}
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
                        />
                    )
                }
            </div>
        )
    }
    return (
        props.studentsList.map((student, index) =>
            <Student
                key={index}
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
            />
        ))
}

export default Students
