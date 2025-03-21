import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <div className='Navbar'>
       <img className='logo' width={10} height={30} src="/logo.svg"></img>

      <div className='opts'>


        <div className='opt'>Home</div>
        <div className='opt'>Team</div>
        <div className='opt'>Pricing</div>
        <div className='opt'>Mentors</div>
        <div className='opt'>About Us</div>

      </div>

      <div className=' signin'> <button>Sign In</button></div>
      <div className='hamburger'><img width={40} height={40} color='rgba(0, 0, 0, 0.11)' src="hamburger3.svg" alt="ham" /></div>


    </div>
  )
}

export default navbar