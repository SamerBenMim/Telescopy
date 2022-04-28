import React from 'react'
import style from './Main.module.css'
import Cards from '../Cards/Cards'
const Main = () => {
  return (
    <div className={style.container} >
            <div className={style.wrap}>
            <br/>
    <Cards/>
    <Cards/>
            </div>
    </div>
  )
}

export default Main