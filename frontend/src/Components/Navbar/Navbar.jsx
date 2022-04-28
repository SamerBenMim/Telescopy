import React from 'react'
import style from './Navbar.module.css'
import MenuButton from '../Menu-Button/MenuButton'
const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.options}>
          <MenuButton/>
          <div className={style.menu}>HELLO</div>
        </div> 

        <div className={style.title}>
        <h1>TELESCOPY</h1>
        </div> 
        <div className={style.info}>
        <div className={style.menu}>HELLO</div>
        <div className={style.menu} style={{marginRight:"5rem"}}>HELLO</div>  
        </div> 
    </div>
  )
}

export default Navbar