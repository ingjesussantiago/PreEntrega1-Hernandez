import React from 'react'

const ItemDetail = ({DetailProduct}) => {

console.log(DetailProduct)

  return (
    <div ClassName="card" style={{width: "18rem"}}>
      <img src={DetailProduct.image} ClassName="card-img-top" alt={`id-${DetailProduct.id}`}/>
         <div ClassName="card-body">
          <h5 ClassName="card-title">{DetailProduct.title}</h5>
          <p ClassName="card-text">{DetailProduct.price}</p>
         <a href="/#" ClassName="btn btn-primary">Go somewhere</a>
        </div>
     </div>
   
  )
}

export default ItemDetail