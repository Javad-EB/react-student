import React from 'react';
import './student.css'
import Button from '../../UI/button/button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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
            <Link to={"/student/"+props.id}>
                <Button>
                    Edit
                </Button>
            </Link>
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
