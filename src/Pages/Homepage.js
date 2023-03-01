import React, { useState, useEffect, useRef, useContext } from 'react'
import Students from '../components/students/students'
import Button from '../components/UI/button/button'
import { useNavigate } from "react-router-dom"
import axios from '../axios'
import Spinner from '../components/UI/spinner/spinner'
import ErrorHandler from '../components/hoc/ErrorHandler'
import { AuthContext } from '../context/auth/authContext'



const HomePage = (props) => {
    const [studentsState, setStudentsState] = useState([])
    const [arrayHolder, setArrayHolder] = useState([])
    const inputEl = useRef(null)
    const [searchBarValue, setSearchBarValue] = useState('')
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const { authenticated } = useContext(AuthContext)

    const searchFilterFunc = (event) => {
        const itemData = arrayHolder.filter((item) => {
            const itemData = item.name.toUpperCase()
            const textData = event.target.value.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setStudentsState(itemData)
        setSearchBarValue(event.target.value)
    }

    useEffect(() => {
        setArrayHolder(studentsState)
        inputEl.current.focus()
        setLoading(true)
        axios.get('/posts')
            .then(response => {
                const students = response.data.slice(0, 10)
                const updatedStudents = students.map(student => {
                    return {
                        ...student,
                        score: 20,
                    }
                })
                setStudentsState(updatedStudents)
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
    }, [studentsState])

    const deleteStudent = (id) => {
        if (!authenticated) {
            alert('Please Login, You dont have Access to delete student')
            return false
        } else {
            const students = [...studentsState]
            let index = id - 1
            students.splice(index, 1)
            axios.delete(`/posts/${id}`)
                .then(response => console.log(response))
            setStudentsState(students)
        }
    }
    const toggleHandler = () => {
        setToggle(!toggle)
    }
    const exeScroll = () => {
        window.scrollTo(0, inputEl.current.offsetTop)
    }
    let navigate = useNavigate()
    const edited = (id) => {
        console.log(id)
        navigate('/student/' + id)
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