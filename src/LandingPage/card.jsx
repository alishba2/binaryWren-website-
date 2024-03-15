import React from 'react'
import { Icon } from '@iconify/react';
import "./landingpage.scss";

export default function Card({icon , heading , text}) {
  return (
    <div className='card-container'>
        <Icon className='card-icon' icon={icon}/>
        <h2>{heading}</h2>
        <p>{text}</p>
    </div>
  )
}
