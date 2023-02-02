import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

const Item = ({Product}) => {
  return (
        <div class="card" style={{width: "17rem"}}>
            <img src={Product.image} Class="card-img-top" alt={`id-${Product.id}`} height="55%"/>
            <div Class="card-body row justify-content-center">
              <h5 Class="card-title text-center">{Product.title}</h5>
              <p Class="card-text text-center">{`$${Product.price}`}</p>
              <Link to={`/Detail/${Product.id}`} Class="btn btn-primary ">Mas Información</Link>
            </div>
              </div>     
  
  
  )
}

export default Item
