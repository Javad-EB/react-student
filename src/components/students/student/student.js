import React from 'react';
import './student.css'
import Button from '../../UI/button/button'
// import PropTypes from 'prop-types'


const Student = (props) => {
    return (
        <div className='students'>
            <label>Student Number: {props.id}</label>
            <label>Full Name: {props.name}</label>
            <label>Class Number: {props.classNumber}</label>
            <label>Mobile: {props.phoneNumber}</label>
            <label>Email: {props.email}</label>
            <Button
                btnType="danger"
                clicked={props.delete}
            >
                Delete
            </Button>
            <Button
                clicked={props.edited}>
                Edit
            </Button>
        </div>
    )
}

export default React.memo(Student)

/* Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    classNumber: PropTypes.number.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    delete: PropTypes.func.isRequired
}
 */