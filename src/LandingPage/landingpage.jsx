import React from 'react'
import Navabar from './navabar'
import Banner from './banner'
import Aboutus from './aboutus'
import Services from './services'
import Technologies from './technologies'
import Achievements from './achievements'

export default function landingpage() {
  return (
    <div><Navabar/>
    <Banner/>
    <Aboutus/>
    <Services/>
    <Technologies/>
    <Achievements/>
    </div>
  )
}
