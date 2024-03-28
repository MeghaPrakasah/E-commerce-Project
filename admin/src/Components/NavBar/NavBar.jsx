import React from 'react'
import './NavBar.css'
import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={navLogo} alt="" className='nav-logo'/>
      <img className='nav-profile' alt="" />
    </div>
  )
}

export default NavBar
