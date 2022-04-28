import React from 'react'
import style from './Footer.module.css'
import arrow from '../../assets/left-arrow.png'
import Card from '../Card/Card'
import plus from '../../assets/plus.png'
const Footer = () => {
  return (
    <div className={style.footer}> 
    <h1> Add Telesocp</h1>
    <br />
    <div className={style.card}>
        <div className={style.cardContainer} style={{padding:"40px" , display:"flex" , justifyContent:"center" , alignItems:'center',flexDirection:"column"}}>
            
            <img  style={{width:"70px" , cursor:"pointer"}} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-add-basic-ui-elements-flatart-icons-outline-flatarticons-1.png"alt="" />
            <div>add</div>
          <div className={style.image}  >
          <input type="text" placeholder='Picture url '/>
          </div>
          <div className={style.details}>
              <div className={style.wrap}>
                <div className={style.productName}>
                <input placeholder="Name (required) " required={  true}/>
                </div>
                <div className={style.price}>
                        <input placeholder="Price $" type="number"/>
                </div>
              </div>
          
             <div className={style.stock}>
             <input placeholder="Quantity" type="number"/>
             </div>

          </div>
        </div>

    </div>    </div>
  )
}

export default Footer