import React from 'react'
import './Benefit.scss'
const Benefit = ({logo, label}) => (
    <div className="benefit">
      <img  className="benefit__logo" src={logo} alt="" />
      <p className="benefit__p">{label}</p>
    </div>
  )


export default Benefit
