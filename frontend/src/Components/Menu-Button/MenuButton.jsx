 
import React,{useState} from 'react'
import style from "./MenuButton.module.css"

const MenuButton= ({fn}) => {

    return (
        <div className={style.MenuButton} onClick={()=>{console.log("click")}}>
            <div className={style.middleMenuButton}></div>
        </div>
    )
}

export default MenuButton