import React from 'react'
import style from './Card.module.css'
const Card = ({price,name,quantity,img,id,deleteMe}) => {
  return (
    <div className={style.card}>
      <span onClick={()=>{deleteMe(id)}}>X</span> 
        <div className={style.cardContainer}>
          <div className={style.image}>
            <img src={img} alt={name} />
          </div>
          <div className={style.details}>
              <div className={style.wrap}>
                <div className={style.productName}>
                        <span>{name} </span>
                </div>
                <div className={style.price}>
                        <span> {price} $</span>
                </div>
              </div>
             <div className={style.stock}>
                {(quantity==0 ) ?"hors stock" : quantity}
             </div>

          </div>
        </div>

    </div>
  )
}

export default Card