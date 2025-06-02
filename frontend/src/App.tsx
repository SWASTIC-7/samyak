// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Stat from './pages/Stats'
import Achiver from './pages/Achivers'
import Testimonial from './pages/Testimonial'
import Mentors from './pages/Mentors'
import Courses from './pages/Courses'
import Footer from './pages/Footer'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <div className='Page'>
        <Navbar />
        <Home/>
        <Stat/>
        <Achiver/>
        
        <Courses/>
        <Mentors/>
        <Testimonial/>
        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default App
