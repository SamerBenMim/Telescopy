import React, { useEffect } from 'react'
import style from './Main.module.css'
import Cards from '../Cards/Cards'
import { GetTelescops } from '../../Api/api'
const Main = () => {
  const get = async () => {const telescops = await GetTelescops();
  console.log(telescops)}

  useEffect( () => {
    get()
  }, [])
  
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