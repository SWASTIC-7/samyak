import React from 'react'
import './Stat.css'
function Stat() {
  return (
    <div className='Stat'>
        <img  className='bg' src='Background_stat.png'></img>
        <div className='Flexer'>
            <div className='Circle'>
                <img className="icons" src='Icon1.png'></img>
            </div>
            <div>
                <h2>3K+</h2>
                <h3>Successfully Trained</h3>
            </div>
            <div className='Circle'>
                <img className="icons" src='Icon1.png'></img>
            </div>
            <div>
                <h2>3K+</h2>
                <h3>Successfully Trained</h3>
            </div>
            <div className='Circle'>
                <img className="icons" src='Icon1.png'></img>
            </div>
            <div>
                <h2>3K+</h2>
                <h3>Successfully Trained</h3>
            </div>
            <div className='Circle'>
                <img className="icons" src='Icon1.png'></img>
            </div>
            <div>
                <h2>3K+</h2>
                <h3>Successfully Trained</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Stat