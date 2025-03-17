import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <div className='Navbar'>
        <img className='logo' src="/logo.svg"></img>
        <ul>
            <li>Home</li>
            <li>Team</li>
            <li>Pricing</li>
            <li>Mentors</li>
            <li>About Us</li>
        </ul>
        <button>Sign In</button>
    </div>
  )
}

export default navbar