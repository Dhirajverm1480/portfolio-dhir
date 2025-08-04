import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div>
      <NavBar/>
      <hr />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
