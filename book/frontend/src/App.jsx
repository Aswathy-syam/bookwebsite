import React from 'react'
import NavbarNav from './components/NavbarNav'
import Hero from './pages/Hero'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Edit from './pages/Edit'




function App() {
  return (
    <>  
      <NavbarNav/>

<Routes>

  <Route path='/' element={<Hero/>}/>
  <Route path='/add' element={<Add/>}/>
  <Route path='/edit' element={<Edit/>}/>
  
</Routes>
    </>
  )
}

export default App
