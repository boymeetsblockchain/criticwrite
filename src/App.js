import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Auth from './pages/Auth'
import Homepage from './pages/Homepage'
function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
     </>
  )
}

export default App