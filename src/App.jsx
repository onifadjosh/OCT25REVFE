import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Todo from './pages/Todo'

const App = () => {
  return (
    <>
      <Routes>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register'  element={<Signup/>}/>

          <Route path='/profile'  element={<Profile/>}/>

          <Route path='/home'  element={<Home/>}/>

          <Route path='/todo'  element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App