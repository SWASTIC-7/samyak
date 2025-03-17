import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Stat from './pages/Stats'
import Achiver from './pages/Achivers'
import Testimonial from './pages/Testimonial'
import Mentors from './pages/Mentors'
import Courses from './pages/Courses'
import Footer from './pages/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='Page'>
      <Home/>
      <Stat/>
      <Achiver/>
      
      <Courses/>
      <Mentors/>
      <Testimonial/>
      <Footer/>

    </div>
  )
}

export default App
