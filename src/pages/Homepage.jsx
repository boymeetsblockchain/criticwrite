import React from 'react'
import FAQs from '../components/FAQ'
import About from '../components/About'
import Extras from '../components/Extras'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className=''>
{/*    <Link to='/auth'><button>Get Started</button></Link>*/}
    <About/>
    <Extras/>
    <FAQs/>
    </div>
  )
}

export default Homepage