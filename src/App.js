import { Toaster } from 'react-hot-toast';
import {Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Payment from './pages/Payments'
import Footer from './components/Footer'
import Form from './pages/Form'

function App() {
  return (
     <div className='max-w-[100%] min-h-[100vh] px-4 md:px-16 bg-[#2a292b] text-[#e6dcc6]'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
     </div>
  )
}

export default App