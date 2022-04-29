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
                Telescopy est une application de gestion des telescopes (CRUD) implementée avec React-Js et Express-Js, développée suite à un test technique avec CONFLEDIS                </p>
            </div>
            <a className={`${style.btn} ${style._btn}`}  onClick={()=>{document.querySelector("#features").scrollIntoView({behavior: "smooth"})}}>
              <div className={style.trapese}>
                <div className={style.rectangle}>
                </div>
                <div className={style.triangle}> 
                </div>
              </div>
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