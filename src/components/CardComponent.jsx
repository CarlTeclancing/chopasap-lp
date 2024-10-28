import React from 'react'
import cardImg from '../assets/cardImg.png'




export default function CardComponent() {
  return (
    <div className="container">
      <div className='card-1'>
        <img src={cardImg} alt="" />
        <div className="card-content">
          <h2>hello test value</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id amet, quaerat, odio, tempora dolore qui animi magni vel at et! Soluta, magni. Quam sit totam dolores atque assumenda doloremque molestias consequatur magni, eos expedita aperiam cumque quibusdam optio perferendis?</p>
          <button className="btn-border">View More</button>
        </div>
    </div>
    </div>

  )
}
