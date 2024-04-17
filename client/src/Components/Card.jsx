import React, { useState } from 'react'
import './card.css'

const Card = ({ title, desc, imgPath}) => {

    const [transform, setTransform] = useState({x: 0, y: 0})
    const img = `/images/${imgPath}`

  return (
    <div className="card"
        onMouseMove={(e) => {
            //getting the left, right, width and height of the card
            const left = e.currentTarget.getBoundingClientRect().left
            const top = e.currentTarget.getBoundingClientRect().top
            const width = e.currentTarget.getBoundingClientRect().width
            const height = e.currentTarget.getBoundingClientRect().height
            
            //calc the percentage of where the card is
            const xPer = (e.clientX - left) / width
            const yPer = (e.clientY - top) / height

            //using the percentage to get the rotation to move the card
            const xRot = (xPer - 0.5) * 20
            const yRot = (0.5 - yPer) * 20

            setTransform({x: yRot, y:xRot})
        }}

        onMouseLeave={() => {
            setTransform({x:0, y:0})
        }}

        style={{transform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg)`}}
    >
        <div className="card-img">
            <img src={img} alt="image" />
        </div>
        <div className="card-head">{title}</div>
        <div className="card-text">{desc}</div>
    </div>
  )
}

export default Card