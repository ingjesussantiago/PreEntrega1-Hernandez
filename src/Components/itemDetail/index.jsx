import React from 'react'
import {useState} from "react";


const ItemDetail = ({DetailProduct}) => {

const [count, setCount]= useState (1)
  const sumarContador = () =>{
  setCount(count +1)
 }
 
 const restarContador= ( ) =>{
  setCount(count-1)
 }


console.log(DetailProduct)

  return (


    <div ClassName="card" style={{width: "18rem"}}>
      <img src={DetailProduct.image} ClassName="card-img-top" alt={`id-${DetailProduct.id}`}/>
         <div ClassName="card-body">
          <h5 ClassName="card-title">{DetailProduct.title}</h5>
          <p ClassName="card-text">{DetailProduct.price}</p>
          <button Class="btn btn-primary " onClick={sumarContador}>+</button>
          <span>{count}</span>
          <button Class="btn btn-primary" onClick={restarContador}>-</button>
          <button Class="btn btn-primary">Confirmar compra</button>

        </div>
     </div>
   
  )
}

export default ItemDetail