import React from 'react'
import cardImg from '../assets/cardImg.png'




export default function CardComponent(props) {
  
  const {image, title, content} = props
  

  
  return (
    <div className="container">
      <div className='card-1'>
        <img src={props.image} alt="" />
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <button className="btn-border">View More</button>
        </div>
    </div>
    </div>

  )
}
