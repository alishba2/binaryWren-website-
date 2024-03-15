import React from 'react'
import "./landingpage.scss"
import { Icon } from '@iconify/react';

export default function Navabar() {
  return (
    <div className='nav-bar'>
        <div className='logo-container'>
          <div className='brand-name'>
          <span>Binary <span className='two'>wren</span> </span>
          {/* <span className='para'>binary and natures</span> */}

          </div>
        

        </div>
        <div className='menue'>
            <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Careers</a></li>

            </ul>
                <Icon className='icon' color='white' icon="il:search">
                </Icon>
                <button className='link-contact'>Contact</button>

        </div>

    </div>
  )
}
