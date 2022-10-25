import React from 'react'
import Login from './views/login/Login'
import SignUp from './views/signup/SignUp'
import './App.css'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App