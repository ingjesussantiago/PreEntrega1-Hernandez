import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/itemDetail'
// import "./styles.scss"

const ItemDetailContainer = () => {

 const [DetailProduct, setDetailProduct] = useState({})

  const {id}= useParams()

  
useEffect(() => {

  fetch (`https://fakestoreapi.com/products/${id}`)
  .then(res=>{
    console.log(res)
    return res.json()})
  .then(json=>{
    setDetailProduct(json)})

  .catch((err) =>
    alert (err.message))

},[id])

console.log(DetailProduct) //se logea el stado no el array inicia en []
 
  return (

    <div>
      <ItemDetail DetailProduct={DetailProduct}/></div> //array y estado 
  )
}

export default ItemDetailContainer