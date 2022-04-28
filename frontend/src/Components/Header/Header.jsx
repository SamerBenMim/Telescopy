import React from 'react'
import style from './Header.module.css'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro' 
const Header = () => {
  return (
    <div className = {style.header}>
        <Navbar/>
        <Intro/>
    </div>
  )
}

export default Header