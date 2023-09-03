import React from 'react'
import './Card.css'

function Card({title, imageUrl, imageAlt, body}) {
  return (
    <div className='card-container'>
        <div className='card-title'>
            <h3>{title}</h3>
        </div>
        <div className='card-body'>
            <p>{body}</p>
        </div>
        <div className='image-container'>
            <img src={imageUrl} alt={imageAlt} />
        </div>
    </div>
  )
}

export default Card