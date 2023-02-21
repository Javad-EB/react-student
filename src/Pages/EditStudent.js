import React, { useEffect } from 'react';
import Button from '../components/UI/button/button'
import './style/editStudent.css'

const EditStudent = (props) => {
    useEffect(() => {
        console.log(props)
    })
    const editStudent = () => {
        alert('Successfull')
    }
    return (
        <div className='newStudent'>
            <h1>Edit New Student</h1>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" />
            <label htmlFor="cNumber">Class Number</label>
            <input type="number" name="cNumber" id="cNumber" />
            <label htmlFor="mob">Mobile</label>
            <input type="number" name="mob" id="mob" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <Button
                clicked={editStudent}
                btnType='danger'
            >Edit Student</Button>
        </div>
    )
}

export default EditStudent