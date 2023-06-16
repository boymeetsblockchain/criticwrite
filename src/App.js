import { Toaster } from 'react-hot-toast';
import {Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Payment from './pages/Payments'
import Footer from './components/Footer'
import Form from './pages/Form'
import Privacy from './components/Privacy';
import { logo } from "./assets";
import { Link } from 'react-router-dom'

function App() {
  return (
     <div className='max-w-[100%] min-h-[100vh] px-4 md:px-16 bg-[white] text-[#000000]'>
          <Link to='/'><img src={logo} alt="logo" className="w-[150px] h-[140px] lg:h-[130px] lg:w-[180px] animate-slide-down" /></Link>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
     </div>
  )
}

export default App