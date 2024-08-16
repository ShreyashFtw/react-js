import { useState } from 'react'
import userContext from './context/UserContext'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Shreyash</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
