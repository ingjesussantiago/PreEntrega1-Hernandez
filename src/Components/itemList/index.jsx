import React from 'react'
import Item from '../Item'

const ItemList = ({Productos}) => {
  return (
     
    <div className="col-lg-12 row gap-4 d-flex justify-content-evenly">
         {Productos.map(Producto =>{
       return <Item Product={Producto} key={Producto.id}/> //estado y producto de map

})}
    </div>
      
  )
}

export default ItemList