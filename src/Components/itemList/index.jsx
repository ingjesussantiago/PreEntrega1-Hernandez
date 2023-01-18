import React from 'react'
import Item from '../Item'

const ItemList = ({Productos}) => {
  return (
    <div>

      {Productos.map(Producto =>{
       return <Item Product={Producto} key={Producto.id}/> //estado y producto de map
})}
    </div>
  )
}

export default ItemList