import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <Routes>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register'  element={<Signup/>}/>

          <Route path='/profile'  element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App