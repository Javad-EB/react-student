import React, { useState, useEffect, useRef, useContext } from 'react'
import Students from '../components/students/students'
import Button from '../components/UI/button/button'
import { useNavigate } from "react-router-dom"
import axios from '../axios'
import Spinner from '../components/UI/spinner/spinner'
import ErrorHandler from '../components/hoc/ErrorHandler'
import { StudentsContext } from '../context/students/studentsContext'

const HomePage = (props) => {
    const [arrayHolder, setArrayHolder] = useState([])
    const inputEl = useRef(null)
    const [searchBarValue, setSearchBarValue] = useState('')
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const { dispatch, studentsState } = useContext(StudentsContext)

    const searchFilterFunc = (event) => {
        const itemData = arrayHolder.filter((item) => {
            const itemData = item.student_name.toUpperCase()
            const textData = event.target.value.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        dispatch({ type: 'search', payload: itemData })
        setSearchBarValue(event.target.value)
    }

    useEffect(() => {
        inputEl.current.focus()
        setLoading(true)
        fetch('http://10.0.0.6/student/showStudent.php')
            .then((response) => response.json())
            .then((responceJson) => {
                setLoading(false)
                dispatch({ type: 'fetch', payload: responceJson })
                setArrayHolder(responceJson)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
    }, [studentsState])

    let auth = false
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if (userInfo) {
        auth = true
    }

    const deleteStudent = (id) => {
        if (!auth) {
            alert('Please Login, You dont have Access to delete student')
            return false
        } else {
            fetch('http://10.0.0.6/student/deleteStudent.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    student_id: id
                })
            }).then((response) => response.json())
                .then((responceJson) => {
                    dispatch({ type: 'remove', id: id })
                }).catch((err) => {
                    alert('err')
                })
        }
    }
    const toggleHandler = () => {
        setToggle(!toggle)
    }
    const exeScroll = () => {
        window.scrollTo(0, inputEl.current.offsetTop)
    }
    let navigate = useNavigate()
    const edited = (id, name, classNumber, phoneNumber, email) => {
        //console.log(id, name, classNumber, phoneNumber, email)
        navigate('/student/' + id, {
            state: {
                id: id,
                name: name,
                classNumber: classNumber,
                phoneNumber: phoneNumber,
                email: email
            }
        })
    }
    return (
        <React.Fragment>
            <input type="text" value={searchBarValue} onChange={searchFilterFunc} ref={inputEl} className="search-bar" />
            <Button
                btnType="success"
                clicked={toggleHandler}
            >
                Change display status
            </Button>
            {
                loading ? <Spinner /> :
                    <Students
                        studentsList={studentsState}
                        delete={deleteStudent}
                        toggle={toggle}
                        edited={edited}
                    />
            }

            <Button clicked={exeScroll}>
                Scroll to SearchBar
            </Button>
        </React.Fragment>
    )

}

export default React.memo(ErrorHandler(HomePage, axios))