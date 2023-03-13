import React, { useContext } from 'react';
import './App.css';
import Toolbar from './container/Header/Toolbar/Toolbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../src/Pages/Homepage'
import AddStudent from '../src/Pages/AddStudent'
import EditStudent from '../src/Pages/EditStudent'
import AuthContextProvider from './context/auth/authContext'
import { ThemeContext } from './context/Theme/themeContext';
import StudentsContextProvider from './context/students/studentsContext'
import Transition from './components/animation/transition'
import Animation from './components/animation/animation'
import MixTransition from './components/animation/mixTransition'
import MixAnimation from './components/animation/mixAnimation'
// const AddStudent = React.lazy(() => import('../src/Pages/AddStudent'))
const App = () => {
  const themeContext = useContext(ThemeContext)
  const { lightTheme, light, dark } = themeContext
  const theme = lightTheme ? light : dark
  return (
    <Router>
      <AuthContextProvider>
        <StudentsContextProvider>
          <div className="App" style={{ background: theme.bg, color: theme.syntax }}>
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
              <Route path="/transition" element={<Transition />} />
              <Route path='/animation' element={<Animation />} />
              <Route path='/mixtransition' element={<MixTransition />} />
              <Route path='/mixanimation' element={<MixAnimation />} />
            </Routes>
          </div>
        </StudentsContextProvider>
      </AuthContextProvider>
    </Router>
  )
}

export default App;
