import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Auth from './pages/Auth'
import Homepage from './pages/Homepage'
import Payment from './pages/Payments'
import Footer from './components/Footer'

function App() {
  return (
     <div className='max-w-[100%] min-h-[100vh] bg-[#2a292b] text-[#e6dcc6]'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
     </div>
  )
}

export default App