import React from 'react'
import './testimonial.css'
import Cards from '../components/testi_card'
function Testimonial() {
  return (
    <div className='Testimonial'>
      <img className='bg2' src='Background.png'></img>

      <div className='heading'>
        <h1>Creating A Community Of Life Long Learners</h1>
      </div>
      
      <div className='corousel'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Testimonial