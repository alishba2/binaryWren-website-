import React from 'react'
import img from '../assets/top-software.png'
export default function Achievements() {
  return (
    <div className='achievement-container'>
        <h2>Our Achievements</h2>

        <div className='achievements'>
            <img src={img} alt="img"  height='200'/>
            <img src={img} alt="img"  height='200'/>

            <img src={img} alt="img"  height='200'/>

        </div>


    </div>
  )
}
