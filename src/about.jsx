import React from 'react'
import './about.css'
import Card from './card.jsx'

function Aboutpage() {
  return (
    <div className='box'>
    <h1 class='heading'><b>OUR TEAM</b></h1> 
    <div className='cardholder'>
    <Card
      link= '/src/images/card-image.jpg'
      text1='Aashray Mahajan'
      text2='IIT2023263'
    />
    <Card
      link= '/src/images/card-image1.jpg'
      text1='LN Meena'
      text2='IIT2023266'
    />
    <Card
      link= '/src/images/card-image2.jpg'
      text1='Sai Tejesh'
      text2='IIT2023259'
    />    
    </div>
    </div>
  
  )
}

export default Aboutpage