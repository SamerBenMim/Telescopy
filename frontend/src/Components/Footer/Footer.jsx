import React from 'react'
import style from './Footer.module.css'
import arrow from '../../assets/left-arrow.png'
import Card from '../Card/Card'
const Footer = () => {
  return (
    <div className={style.footer}> 
    <h1> Add Telesocp</h1>
    <br />
    <div className={style.card}>
      <span onClick={()=>{console.log("id")}}>+</span> 
        <div className={style.cardContainer} style={{padding:"40px" , display:"flex" , justifyContent:"center" , alignItems:'center',flexDirection:"column"}}>
          <div className={style.image} style={{height:"60%"}} >
          <input type="" />
          </div>
          <div className={style.details}>
              <div className={style.wrap}>
                <div className={style.productName}>
                <input placeholder="name "/>
                </div>
                <div className={style.price}>
                        <input placeholder="price " type="number"/>
                </div>
              </div>
              <br />
             <div className={style.stock}>
             <input placeholder="quantity" type="number"/>
             </div>

          </div>
        </div>

    </div>    </div>
  )
}

export default Footer