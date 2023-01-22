import React, {useEffect, useState } from 'react'
import ItemDetail from '../../Components/itemDetail'
import "./styles.scss"

const ItemDetailContainer = () => {

 const [DetailProduct, setDetailProduct] = useState({})

useEffect(() => {

  fetch('https://fakestoreapi.com/products/7')
  .then(res=>{
    console.log(res)
    return res.json()})
  .then(json=>{
    setDetailProduct(json)})

  .catch((err) =>
    alert (err.message))

}, [])

console.log(DetailProduct) //se logea el stado no el array inicia en []
 
  return (

    <div>
      <ItemDetail DetailProduct={DetailProduct}/></div> //array y estado 
  )
}

export default ItemDetailContainer