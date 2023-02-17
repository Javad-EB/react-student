import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Toolbar from './container/Header/Toolbar/Toolbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../src/Pages/Homepage'
import AddStudent from '../src/Pages/AddStudent'
import EditStudent from '../src/Pages/EditStudent'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Toolbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/add-student" exact element={<AddStudent />} />
          <Route path='/student/:id' exact element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
