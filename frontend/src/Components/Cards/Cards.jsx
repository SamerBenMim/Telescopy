import React from 'react'
import style from './cards.module.css'
import Card from '../Card/Card'
const Cards = ({prod1,prod2,prod3,prod4,deleteTelescop,updateTelescop}) => {

  const deleteProduct = (x)=>{
    console.log(x)
    deleteTelescop(x)
  }
  const updateMe = (id,nom,quantity,price)=>{
    updateTelescop(id,nom,quantity,price)
  }
  return (
      <>
    <div className={style.cards}>
        <div className={style.div}>
            {prod1 &&<Card price = {prod1.price} name = {prod1.name} quantity={prod1.quantity} img={prod1.image} id={prod1._id} deleteMe={()=>{deleteProduct(prod1._id)}} updateMe={updateMe} />}
            {prod2 &&<Card price = {prod2.price} name = {prod2.name} quantity={prod2.quantity} img={prod2.image} id={prod2._id}   deleteMe={()=>{deleteProduct(prod2._id)}}   updateMe={updateMe}/>}
            
         </div>
         <div className={style.div}>
         {prod3 &&<Card price = {prod3.price} name = {prod3.name} quantity={prod3.quantity} img={prod3.image}  id={prod3._id}  deleteMe={()=>{deleteProduct(prod3._id)}}  updateMe={updateMe} />}
         {prod4 &&<Card price = {prod4.price} name = {prod4.name} quantity={prod4.quantity} img={prod4.image}  id={prod4._id}  deleteMe={()=>{deleteProduct(prod4._id)}}  updateMe={updateMe} />}
         </div>  
    </div>
    <br />
      </>
      )
}

export default Cards