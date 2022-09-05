import React from 'react'
import logo  from '../assets/logo1.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={logo} alt="imag"/>
        
        </div>
        <div className="rightSide"></div>
    </div>
  )
}

export default Navbar