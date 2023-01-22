import React, { useEffect, useState } from 'react'
import ItemList from '../../Components/itemList'
import "./styles.scss"

const ItemListContainer = () => {

// const [count, setCount]= useState (1)
//   const sumarContador = () =>{
//   setCount(count +1)
//  }
 
//  const restarContador= ( ) =>{
//   setCount(count-1)
//  }
 
const [Product, setProduct] = useState([])


useEffect(() => {

  fetch('https://fakestoreapi.com/products')
  .then(res=>{
    console.log(res)
    return res.json()})
  .then(json=>{
    setProduct(json)})

  .catch((err) =>
    alert (err.message))

}, [])

console.log(Product) //se logea el stado no el array inicia en []
 
  return (
    // <div className='ItemCard'>
    //   <Item title={"Samurai 1"} title2={"ok"}/>
    //   <Item title={"Samurai 2"}/>
    //   <Item title={"Samurai 3"}/>
    //   <Item title={"Samurai 4"}/>
    //  <button onClick={sumarContador}>+</button>
    //  <span>{count}</span>
    //  <button onClick={restarContador}>-</button>
    // </div>

    <div>
      <ItemList Productos={Product}/></div> //array y estado 
  )
}

export default ItemListContainer

