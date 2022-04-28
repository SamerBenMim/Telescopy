import React, { useState } from 'react'
import style from './Card.module.css'
const Card = ({price,name,quantity,img,id,deleteMe,updateMe}) => {
  const [nom, setnom] = useState(name)
  const [prix, setprix] = useState(price)
  const [quantite, setquantite] = useState(quantity)
  const [readonly, setReadonly] = useState(true)
  return (
    <div className={style.card}>
      <span  style={{marginLeft:"10px"}}onClick={()=>{deleteMe(id)}}>X</span> 
      <span  style={{marginLeft:"10px"}}onClick={()=>{setReadonly(false)}}> <img style={{width:"22px", marginTop:"15px"}} src="https://icon-library.com/images/icon-edit/icon-edit-27.jpg  " alt="edit" /></span> 
      {!readonly&&<span  style={{marginLeft:"10px"}}onClick={ ()=>{updateMe(id,nom,quantite,prix) ;setReadonly(true)  }  }> <img style={{width:"22px", marginTop:"15px"}} src="https://cdn0.iconfinder.com/data/icons/basic-glyph/1024/upload-512.png" alt="edit" />  <span style={{fontSize:"15px",color:"gray"}}>you know update fields</span></span> }
        <div className={style.cardContainer}>
          <div className={style.image}>
            <img src={img} alt={name} />
          </div>
          <div className={style.details}>
              <div className={style.wrap}>
                <div className={style.productName}>
                        <span><input  required onChange={e=>{setnom(e.target.value); console.log(nom)} } className={style.productName} type="text" value={readonly?name:nom}  readOnly={readonly  } /> </span>
                </div>
                <div className={style.price}>
                <span><input  style={{width:"35px"}}onChange={e=>{if(e.target.value>=0)setprix(e.target.value);} } className={style.productName} type="number" value={readonly?price:prix}  readOnly={readonly  } /> </span>

                </div>
              </div>
            {readonly && <div className={style.stock}>
                { (quantity==0) ?"hors stock" : quantity}
             </div>}
             {!readonly && <div className={style.stock}>
             <span><input  style={{width:"35px"}}onChange={e=>{if(e.target.value>=0)setquantite(e.target.value);} } className={style.productName} type="number" value={readonly?quantity:quantite}  readOnly={readonly  } /> </span>
             </div>}

          </div>
        </div>

    </div>
  )
}

export default Card