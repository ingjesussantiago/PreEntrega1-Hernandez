import React from 'react'
import ItemCount from "../Itemcount";


const ItemDetail = ({DetailProduct}) => {
console.log(DetailProduct)

  return (


    <div ClassName="card" style={{width: "18rem"}}>
      <img src={DetailProduct.image} ClassName="card-img-top" alt={`id-${DetailProduct.id}`}/>
         <div ClassName="card-body">
          <h5 ClassName="card-title">{DetailProduct.title}</h5>
          <p ClassName="card-text">{DetailProduct.price}</p>
          <ItemCount stock={20} inicial={1}/>
         

        </div>
     </div>
   
  )
}

export default ItemDetail