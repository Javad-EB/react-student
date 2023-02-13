import React from 'react';
import './student.css'
import Button from '../../UI/button/button'

const Student = (props) => {
    return (
        <div className='students'>
            <label>Student Number: {props.id}</label>
            <label>Full Name</label>
            <input type="text" value={props.name} onChange={props.nameChange} />

            <label>Class Number</label>
            <input type="text" value={props.classNumber} onChange={props.classNumberChange} />

            <label>Mobile</label>
            <input type="number" value={props.phoneNumber} onChange={props.phoneNumberChange} />

            <label>Email</label>
            <input type="email" value={props.email} onChange={props.emailChange} />

            <Button
                btnType="danger"
                clicked={props.delete}
            >
                Delete
            </Button>
        </div>
    )
}

export default Student
