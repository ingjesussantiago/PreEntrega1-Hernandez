import React from 'react'
import ItemCount from "../Itemcount";
import { useState } from "react";


const ItemDetail = ({DetailProduct}) => {

const [CarritoCount, setCarritoCount] = useState(0)



const onAdd=(count)=> {
  console.log(`sea grego:${count}`)
  setCarritoCount(count)
}



console.log(DetailProduct)

  return (


    <div ClassName="card" style={{width: "18rem"}}>
      <img src={DetailProduct.image} ClassName="card-img-top" alt={`id-${DetailProduct.id}`}/>
         <div ClassName="card-body">
          <h5 ClassName="card-title">{DetailProduct.title}</h5>
          <p ClassName="card-text">{DetailProduct.price}</p>
          {
           CarritoCount === 0
           ?<ItemCount 
          stock={20}
           inicial={1}
           onAdd={onAdd}
           />
           :<button class="btn btn-primary"> Ir a Compra</button>
           
           }
         

        </div>
     </div>
   
  )
}

export default ItemDetail