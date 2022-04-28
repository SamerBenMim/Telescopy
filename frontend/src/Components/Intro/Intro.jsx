import React from 'react'
import style from './Intro.module.css'
const Intro = () => {
  return (
    <div className={style.intro}>
        <div className={style.description}>
          <div className={style.cont}>
            <div className={style.details}>
                <h1> Telescopes For All</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <a className={`${style.btn} ${style._btn}`}>
                 <span>
                  See More
                </span>
            </a>
         </div>
        </div>
        <div className={style.image}>
                  <img  className={ style.img} src="img1.png" alt="img" />
        </div>
    </div>
  )
}

export default Intro