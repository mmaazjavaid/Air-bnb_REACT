import React from 'react'

const  Contact=(props)=> {
  return (
      <div>
<img src={props.person} alt="person" className="card--image" />
        <div className="card--stats">
            <img src={props.star} alt="star" className="card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">{props.name ==="Maaz Javaid" ? "Maaz Javaid":"Taha Javaid"}</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
   
  )
}

export default Contact

