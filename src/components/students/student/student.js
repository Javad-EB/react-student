import React from 'react';
import './student.css'
import Button from '../../UI/button/button'
import PropTypes from 'prop-types'

const Student = (props) => {
    return (
        <div className='students'>
            <label>Student Number: {props.id}</label>
            <label htmlFor="fName">Full Name</label>
            <input type="text" id='fName' value={props.name} onChange={props.nameChange} />

            <label htmlFor="cNumber">Class Number</label>
            <input type="text" id='cNumber' value={props.classNumber} onChange={props.classNumberChange} />

            <label htmlFor="mob">Mobile</label>
            <input id='mob' type="number" value={props.phoneNumber} onChange={props.phoneNumberChange} />

            <label htmlFor='email'>Email</label>
            <input type="email" id='email' value={props.email} onChange={props.emailChange} />

            <Button
                btnType="danger"
                clicked={props.delete}
            >
                Delete
            </Button>
        </div>
    )
}

export default React.memo(Student)

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nameChange: PropTypes.func.isRequired,
    classNumber: PropTypes.number.isRequired,
    classNumberChange: PropTypes.func.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    phoneNumberChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    emailChange: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}
