import React, { useState, useEffect } from 'react';
import './App.css';
import Students from './components/students/students'
import Button from './components/UI/button/button'

const App = () => {
  const [studentsState, setStudentsState] = useState([
    { id: 0, name: 'Javad', classNumber: 201, phoneNumber: 9131231122, email: 'javad@gmail.com' },
    { id: 1, name: 'Alireza', classNumber: 211, phoneNumber: 9131232233, email: 'Alireza@gmail.com' },
    { id: 2, name: 'Hamed', classNumber: 221, phoneNumber: 9131233344, email: 'Hamed@gmail.com' },
    { id: 3, name: 'Ehsan', classNumber: 231, phoneNumber: 9131234455, email: 'Ehsan@gmail.com' },
  ])
  const [toggle, setToggle] = useState(false)
  const [arrayHolder, setArrayHolder] = useState([])
  const [searchBarValue, setSearchBarValue] = useState('')

  useEffect(() => {
    setArrayHolder(studentsState)
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
    const studentIndex = studentsState.findIndex(student => student.id === id)
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
  return (
    <div className="App">
      <input type="text" value={searchBarValue} onChange={searchFilterFunc} />
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
    </div>
  );
}

export default App;
