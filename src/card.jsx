import React from 'react'
import './about.css'

function Card(props){
    return(
      <div className='cardholder'>  
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src={props.link}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.text1}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {props.text2}
          </p>
        </div>
      </div>
      </div>
    )
}

export default Card