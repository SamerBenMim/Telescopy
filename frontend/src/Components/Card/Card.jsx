import React from 'react'
import style from './Card.module.css'
const Card = () => {
  return (
    <div className={style.card}>
        <div className={style.cardContainer}>
          <div className={style.image}>
            <img src="https://pngimg.com/uploads/telescope/telescope_PNG54.png" alt="zzz" />
          </div>
          <div className={style.details}>
              <div className={style.wrap}>
                <div className={style.productName}>
                        <span>Lorem Ipsum </span>
                </div>
                <div className={style.price}>
                        <span> 23 $</span>
                </div>
              </div>
             <div className={style.stock}>
                hors stock
             </div>

          </div>
        </div>

    </div>
  )
}

export default Card