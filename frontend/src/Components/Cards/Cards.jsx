import React from 'react'
import style from './cards.module.css'
import Card from '../Card/Card'
const Cards = () => {
  return (
      <>
    <div className={style.cards}>
        <div className={style.div}>
            <Card/>
            <Card/>
            
         </div>
         <div className={style.div}>
            <Card/>
            <Card/>
         </div>  
    </div>
    <br />
      </>
      )
}

export default Cards