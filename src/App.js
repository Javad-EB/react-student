import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Students from './components/students/students'
import Button from './components/UI/button/button'
import NewStudent from './components/students/newStudent/newStudent'
import Toolbar from './container/Header/Toolbar/Toolbar'

const App = () => {
  const inputEl = useRef(null)
  const [studentsState, setStudentsState] = useState([
    { id: 0, name: 'Javad', classNumber: 201, phoneNumber: 9131231122, email: 'javad@gmail.com' },
    { id: 1, name: 'Alireza', classNumber: 211, phoneNumber: 9131232233, email: 'Alireza@gmail.com' },
    { id: 2, name: 'Hamed', classNumber: 221, phoneNumber: 9131233344, email: 'Hamed@gmail.com' },
    { id: 3, name: 'Ehsan', classNumber: 231, phoneNumber: 9131234455, email: 'Ehsan@gmail.com' },
  ])
  const [toggle, setToggle] = useState(false)
  const [arrayHolder, setArrayHolder] = useState([])
  const [searchBarValue, setSearchBarValue] = useState('')
  const [studentName, setStudentName] = useState('')
  const [studentClass, setStudentClass] = useState('')
  const [studentMobile, setStudentMobile] = useState('')
  const [studentEmail, setStudentEmail] = useState('')

  useEffect(() => {
    setArrayHolder(studentsState)
    inputEl.current.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchFilterFunc = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase()
      const textData = event.target.value.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    setStudentsState(itemData)
    setSearchBarValue(event.target.value)
  }

  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(
      student => student.id === id
    )
    const student = { ...studentsState[studentIndex] }
    student.name = event.target.value
    const students = [...studentsState]
    students[studentIndex] = student
    setStudentsState(students)
  }

  const classNumberChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(student => student.id === id)
    const student = { ...studentsState[studentIndex] }
    student.classNumber = event.target.value
    const students = [...studentsState]
    students[studentIndex] = student
    setStudentsState(students)
  }

  const phoneNumberChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(student => student.id === id)
    const student = { ...studentsState[studentIndex] }
    student.phoneNumber = event.target.value
    const students = [...studentsState]
    students[studentIndex] = student
    setStudentsState(students)
  }

  const emailChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(student => student.id === id)
    const student = { ...studentsState[studentIndex] }
    student.email = event.target.value
    const students = [...studentsState]
    students[studentIndex] = student
    setStudentsState(students)
  }

  const deleteStudent = (index) => {
    const students = [...studentsState]
    students.splice(index, 1)
    setStudentsState(students)
  }

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  const studentNameHandler = (event) => {
    setStudentName(event.target.value)
  }
  const studentClassHandler = (event) => {
    setStudentClass(event.target.value)
  }
  const studentMobileHandler = (event) => {
    setStudentMobile(event.target.value)
  }
  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value)
  }
  const addStudent = () => {
    const newStudentsState = [...studentsState]
    newStudentsState.push({
      'id': studentsState.length,
      'name': studentName,
      'classNumber': studentClass,
      'phoneNumber': studentMobile,
      'email': studentEmail
    })
    setStudentsState(newStudentsState)
    setStudentName('')
    setStudentClass('')
    setStudentMobile('')
    setStudentEmail('')
  }

  const exeScroll = () => {
    window.scrollTo(0, inputEl.current.offsetTop)
  }
  return (
    <div className="App">
      <Toolbar />
      <NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentMobile={studentMobile}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentMobileHandler={studentMobileHandler}
        studentEmailHandler={studentEmailHandler}
        addStudent={addStudent}
      />
      <input type="text" value={searchBarValue} onChange={searchFilterFunc} ref={inputEl} />
      <Button
        btnType="success"
        clicked={toggleHandler}
      >
        Change display status
      </Button>
      <Students
        studentsList={studentsState}
        nameChange={nameChangeHandler}
        classNumberChange={classNumberChangeHandler}
        phoneNumberChange={phoneNumberChangeHandler}
        emailChange={emailChangeHandler}
        delete={deleteStudent}
        toggle={toggle}
      />
      <Button clicked={exeScroll}>
        Scroll to SearchBar
      </Button>
    </div>
  );
}

export default App;
