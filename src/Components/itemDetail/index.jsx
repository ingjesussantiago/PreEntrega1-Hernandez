import React from 'react'
import ItemCount from "../Itemcount";
import { useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { Shop } from "../../context/ShopProvider";


const ItemDetail = ({DetailProduct}) => {

const [CarritoCount, setCarritoCount] = useState(0)

const {addProduct} = useContext(Shop)

const onAdd=(count)=> {
  console.log(`sea grego:${count}`)
  setCarritoCount(count)
  addProduct({...DetailProduct, quantity:count})
}



// console.log(DetailProduct)

  return (

    <div Class="container-fluid row align-items-center text-center">
      <img src={DetailProduct.image} Class="m-4" alt={`id-${DetailProduct.id}`}style={{width: "20rem"}}/>
      <aside Class="detail-aside col-6">
        <h5 class="text-center">{DetailProduct.title}</h5>
        <p class="text-center">{`$${DetailProduct.price}`}</p>

           {
           CarritoCount === 0
           ?<ItemCount 
          stock={DetailProduct.stock}
           inicial={1}
           onAdd={onAdd}
           />
           :<button class="btn btn-primary ">
            <Link to="/cart" class="text-bg-primary">Carrito de Compra</Link>
           </button>
           
           }

      
  
       


      </aside>
        
     </div>
   
  )
}

export default ItemDetail