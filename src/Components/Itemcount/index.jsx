import React from 'react'
import {useState } from 'react';

const ItemCount = ({inicial, stock}) => {

    const [count, setCount]= useState (inicial)
            
    const sumarContador = () =>{
if (count<stock) { setCount(count +1)
}   
   }
   
   const restarContador= ( ) =>{
if (count>inicial) {
   setCount(count-1)
}
   }

  return (
    <div> <button Class="btn btn-primary " onClick={sumarContador}>+</button>
    <span>{count}</span>
    <button Class="btn btn-primary" onClick={restarContador}>-</button>
    <button Class="btn btn-primary">Confirmar compra</button></div>
  )
}

export default ItemCount