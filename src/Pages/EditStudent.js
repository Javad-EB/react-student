import React, { useEffect, useContext } from 'react';
import Button from '../components/UI/button/button'
import './style/editStudent.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth/authContext'


const EditStudent = (props) => {
    const { studentid } = useParams()
    const { authenticated } = useContext(AuthContext)
    let navigate = useNavigate()
    useEffect(() => {
        if (!authenticated) {
            navigate("/")
        }
        axios.get(`/posts/${studentid}`)
            .then(response => {
                console.log(response.data)
            })
    }, [authenticated, navigate, studentid])
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