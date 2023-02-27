import React from 'react';
import './App.css';
import Toolbar from './container/Header/Toolbar/Toolbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../src/Pages/Homepage'
import AddStudent from '../src/Pages/AddStudent'
import EditStudent from '../src/Pages/EditStudent'

// const AddStudent = React.lazy(() => import('../src/Pages/AddStudent'))
const App = () => {
  return (
    <div className="App">
      <Router>
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-student" element={<AddStudent />} />
          {/* <Route path="/add-student" exact element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AddStudent />
            </React.Suspense>
          } /> */}
          <Route path='/student/:studentid' element={<EditStudent />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
