import React from 'react'
import './Courses.css'
import Card from '../components/courses_card'
import Card2 from '../components/courses_card2'
function Courses() {
  return (
    <div className='Courses'>
      <div>
        <h1>Check Our Mentorship Plans</h1>
        <div>
          {/* <p>Browse all plans</p> */}
          <div><img src='arrow.svg'></img></div>
        </div>
      </div>
      <div className='card_container'>
        <Card />
        <Card2 />
        <Card />
        <Card2 />
      </div>
    </div>
  )
}

export default Courses