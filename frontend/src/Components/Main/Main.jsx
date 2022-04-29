import React, { useEffect,useState } from 'react'
import style from './Main.module.css'
import Cards from '../Cards/Cards'
import axios from 'axios'
import { api } from "../../Api/config"
import arrow from '../../assets/left-arrow.png'

const Main = () => {
  const [telescops, setTelescops] = useState(null)
  const [page, setPage] = useState(1)
  const [nombreProduits, setNombreProduits] = useState(0)
  const [sort, setSort] = useState(0)
  const [image, setImage] = useState("https://pngimg.com/uploads/telescope/telescope_PNG54.png")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [err, setErr] = useState(false)
  const addTelescop = (e)=>{
    e.preventDefault();
    axios.post(`${api}/telescops`,{name,quantity,image,price})
    .then(res => {
      if (res.data.status === 'success') { 
        setErr(false)
        setNombreProduits(nombreProduits+1)
      }
      else{
        setErr(true)
      }
    })
    .catch(err => {
      setErr(true)
      console.log(err)
      return false;
    });
  }


  const updateTelescop = (id,name,quantity,price)=>{
    axios.patch(`${api}/telescops/${id}`,{name,quantity,price})
    .then(res => {
      if (res.data.status === 'success') { 
        setErr(false)
        GetTelescops()
      }
      else{
        setErr(true)
      }
    })
    .catch(err => {
      setErr(true)
      console.log(err)
      return false;
    });
  }


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
  }, [page,sort,nombreProduits,err])

  if(!telescops) return true
  // return <Loader/>

  else return (
    <div className={style.container} >
      <div className={style.features} id='features'>
      <div style={{color:"black",marginRight:'60px'}}> NUMBER OF TELESCOPS :  <span style={{fontSize:"20px",fontWeight:"500"}}>{nombreProduits}  </span> </div>

        <div style={{color:"black",marginRight:'20px'}}> SORT TELESCOPS </div>
      <img
      onClick={()=>{
        (sort==0)?setSort(1): setSort(-1*sort)
      }}
       src="https://cdn-icons-png.flaticon.com/512/159/159800.png" style={{width:"40px",height:"30px" , cursor: 'pointer'}} alt="sort"  />
    
      </div>

    <div className={style.wrap}>
    <br/>




    {(telescops.length<4)&& <Cards  updateTelescop={updateTelescop} deleteTelescop={deleteTelescop}  key = {telescops[0]+1} prod1 = {telescops[0]} prod2 = {telescops[1]} prod3 = {telescops[2]} prod4 = {telescops[3]}   />

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
      return <Cards updateTelescop={updateTelescop}  deleteTelescop={deleteTelescop} key = {p1.name} prod1 = {p1} prod2 = {p2} prod3 = {p3} prod4 = {p4}   />
    }
   

  })

}  

{(telescops.length%4 ==1 && telescops.length>4 )&& <Cards updateTelescop={updateTelescop} deleteTelescop={deleteTelescop} key = {telescops[telescops.length-4]} prod1 = {telescops[telescops.length-1]}    />}
{(telescops.length%4 ==2 && telescops.length>4 )&& <Cards updateTelescop={updateTelescop} deleteTelescop={deleteTelescop} key = {telescops[telescops.length-4]} prod1 = {telescops[telescops.length-1]}  prod2 = {telescops[telescops.length-2]}   />}
{(telescops.length%4 ==3 && telescops.length>4 )&& <Cards  updateTelescop={updateTelescop}deleteTelescop={deleteTelescop} key = {telescops[telescops.length-4]} prod1 = {telescops[telescops.length-1]} prod2 = {telescops[telescops.length-2]} prod3 = {telescops[telescops.length-3]}    />}
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

  <div className={style.add}> 
    <h1> Add Telesocp</h1>
    <br />
    <div className={style.card}>
      <form className={style.cardContainer} style={{padding:0}} onSubmit={addTelescop}>
        <div className={style.cardContainer} style={{padding:"40px" , display:"flex" , justifyContent:"center" , alignItems:'center',flexDirection:"column"}}>
            <button type='submit' style={{border:"none"}}>
            <img  style={{width:"70px" , cursor:"pointer"}} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-add-basic-ui-elements-flatart-icons-outline-flatarticons-1.png"alt="" />
            </button>
            <div>add</div>
          <div className={style.image}  >
          <input type="text" onChange={e=>{setImage(e.target.value)}} placeholder='Picture url '/>
          </div>
          <div className={style.details}>
              <div className={style.wrap}>
                <div className={style.productName}>
                <input onChange={e=>{setName(e.target.value)}} placeholder="Name (required)" value={name} required={  true}/>
                {err&&<div style={{color:"red"}}> user already exists</div>}
                </div>
                <div className={style.price}>
                        <input placeholder="Price $" type="number" onChange={e=>{if(e.target.value>=0)setPrice(e.target.value)}} value={price}/>
                </div>
              </div>
          
             <div className={style.stock}>
             <input placeholder="Quantity" type="number" onChange={e=>{if(e.target.value>=0)setQuantity(e.target.value)}} value={quantity}/>
             </div>

          </div>
        </div>
    </form>   

    </div> 
    </div>



    </div>
  )
}

export default Main