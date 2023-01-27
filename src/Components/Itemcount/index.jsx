import React from 'react'
import {useState } from 'react';

const ItemCount = ({inicial, stock, onAdd}) => {

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
    <div class="container">
       <div> <button Class="btn btn-primary p-2 " onClick={sumarContador}>+</button>
    <span>{count}</span>
    <button Class="btn btn-primary p-2" onClick={restarContador}>-</button>
    <button Class="btn btn-primary p-2" onClick={()=>onAdd(count)}>Confirmar compra</button></div>
    </div>
  )
}

export default ItemCount