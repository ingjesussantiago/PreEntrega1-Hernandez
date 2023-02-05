import React from 'react'
import ItemCount from "../Itemcount";
import { useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { Shop } from "../../context/ShopProvider";


const ItemDetail = ({DetailProduct}) => {

const [CarritoCount, setCarritoCount] = useState(0)

const {addProduct} = useContext(Shop)

const onAdd=(count)=> {
  setCarritoCount(count)
  addProduct({...DetailProduct, quantity:count})
}


  return (

    <div className="container-fluid row align-items-center text-center">
      <img src={DetailProduct.image} alt={`id-${DetailProduct.id}`}style={{width: "20rem"}}/>
      <aside className="detail-aside col-6">
        <h5 className="text-center">{DetailProduct.title}</h5>
        <p className="text-center">{`$${DetailProduct.price}`}</p>

           {
           CarritoCount === 0
           ?<ItemCount 
          stock={DetailProduct.stock}
           inicial={1}
           onAdd={onAdd}
           />
           :<button className="btn btn-primary ">
            <Link to="/cart" className="text-bg-primary">Carrito de Compra</Link>
           </button>
           
           }
      </aside>
        
     </div>
   
  )
}

export default ItemDetail