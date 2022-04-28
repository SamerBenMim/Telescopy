import React, { useEffect,useState } from 'react'
import style from './Main.module.css'
import Cards from '../Cards/Cards'
// import { GetTelescops } from '../../Api/api'
import axios from 'axios'
import { api } from "../../Api/config"
import arrow from '../../assets/left-arrow.png'

const Main = () => {
  const [telescops, setTelescops] = useState(null)
  const [page, setPage] = useState(1)
  const [nombreProduits, setNombreProduits] = useState(1000000000)
  const [sort, setSort] = useState(0)

  const GetTelescops = ()=>{
    console.log(sort)
    var query = `/telescops?page=${page}`
    if (sort==1){
      query =`/telescops?page=${page}&sort=price`

    }else if(sort==-1) {
      query =`/telescops?page=${page}&sort=price&decreasing=true`
    }
    console.log(query)
    axios.get(`${api}${query}`)
    .then(res => {
      if (res.data.status === 'success') { 
        setTelescops(res.data.data.telescops)
        console.log(res.data.data.telescops)
        setNombreProduits(res.data.number)
      }
      return false 
    })
    .catch(err => {
      console.log(err)
      return false;
    });
  }
  const deleteTelescop = (id)=>{
    console.log(id)
    axios.delete(`${api}/telescops/${id}`)
    .then(res => {
      if (res.data.status === 'success') { 

        setNombreProduits(nombreProduits-1)
      }
      return false 
    })
    .catch(err => {
      console.log(err)
      return false;
    });
  }
  
  var products = []
  useEffect( () => {
     GetTelescops()
  }, [page,sort,nombreProduits])

  if(!telescops) return <h1>jjjjjjjjjjjjjjjj</h1>
  else return (
    <div className={style.container} >
      <div className={style.features}>
      <img
      onClick={()=>{
        (sort==0)?setSort(1): setSort(-1*sort)
      }}
       src="https://cdn-icons-png.flaticon.com/512/159/159800.png" style={{width:"40px",height:"30px" , cursor: 'pointer'}} alt="sort"  />
      {nombreProduits}
      </div>

    <div className={style.wrap}>
    <br/>




    {(telescops.length<4)&& <Cards   deleteTelescop={deleteTelescop}  key = {telescops[0]+1} prod1 = {telescops[0]} prod2 = {telescops[1]} prod3 = {telescops[2]} prod4 = {telescops[3]}   />

    }



{
  telescops && telescops.map(p=>{


    products.push(p)
    if(products.length>=4){
      const p1 = products[0];
      const p2 = products[1];
      const p3 = products[2];
      const p4 = products[3];
      products = []
      return <Cards  deleteTelescop={deleteTelescop} key = {p1.name} prod1 = {p1} prod2 = {p2} prod3 = {p3} prod4 = {p4}   />
    }
   

  })

}  

{(telescops.length%4 ==1 && telescops.length>4 )&& <Cards deleteTelescop={deleteTelescop} key = {telescops[telescops.length-4]} prod1 = {telescops[telescops.length-4]}    />}
{(telescops.length%4 ==2 && telescops.length>4 )&& <Cards deleteTelescop={deleteTelescop} key = {telescops[telescops.length-4]} prod1 = {telescops[telescops.length-4]}  prod2 = {telescops[telescops.length-3]}   />}
{(telescops.length%4 ==3 && telescops.length>4 )&& <Cards deleteTelescop={deleteTelescop} key = {telescops[telescops.length-4]} prod1 = {telescops[telescops.length-4]} prod2 = {telescops[telescops.length-3]} prod3 = {telescops[telescops.length-2]}    />}
            </div>

            <div className={style.pagination}>
            <div>
            <span
             onClick={()=>{
               if(page>1)  {
                setPage(page-1)
               }
            }}> 
            <img src={arrow} alt="left-arrow" />
            </span> 
            <span
             onClick={()=>{
               if(page<nombreProduits/12)  {
                setPage(page+1)
               }
            }}> 
            <img style ={{transform: 'scaleX(-1)'}}src={arrow} alt="right-arrow" /></span>
            </div>
        </div>
    </div>
  )
}

export default Main