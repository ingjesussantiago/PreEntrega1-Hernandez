import React from 'react'
// import "./styles.scss"

const Item = ({Product}) => {
  return (
        <div Class="card" style={{width: "17rem"}}>
            <img src={Product.image} Class="card-img-top" alt={`id-${Product.id}`} height="55%"/>
            <div Class="card-body row justify-content-center">
              <h5 Class="card-title text-center">{Product.title}</h5>
              <p Class="card-text text-center">{Product.price}</p>
              <a href="/#" Class="btn btn-primary ">Mas Información</a>
            </div>
              </div>     
  
  
  )
}

export default Item
