import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({Product}) => {
  return (
        <div className="card" style={{width: "17rem"}}>
            <img src={Product.image} className="card-img-top" alt={`id-${Product.id}`} height="55%"/>
            <div className="card-body row justify-content-center">
              <h5 className="card-title text-center">{Product.title}</h5>
              <p className="card-text text-center">{`$${Product.price}`}</p>
              <Link to={`/Detail/${Product.id}`} className="btn btn-primary ">Mas Información</Link>
            </div>
              </div>     
  
  
  )
}

export default Item
