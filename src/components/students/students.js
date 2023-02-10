import React from 'react';
import './students.css'

const Students = (props) => {
    return (
        <div className='students'>
            <label>Student Number: 1</label>
            <label>Full Name</label>
            <input type="text"/>

            <label>Class</label>
            <input type="text"/>

            <label>Tell</label>
            <input type="number"/>

            <label>Email</label>
            <input type="email"/>
        </div>
    )
}

export default Students
