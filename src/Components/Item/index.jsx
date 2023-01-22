import React from 'react'

const Item = ({Product}) => {
  return (
    <div ClassName="card" style={{width: "18rem"}}>
    <img src={Product.image} ClassName="card-img-top" alt={`id-${Product.id}`}/>
    <div ClassName="card-body">
      <h5 ClassName="card-title">{Product.title}</h5>
      <p ClassName="card-text">{Product.price}</p>
      <a href="/#" ClassName="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Item
