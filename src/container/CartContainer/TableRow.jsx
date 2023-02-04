import React, { useState } from 'react';
import {useContext} from "react";
import { Shop } from '../../context/ShopProvider';


const TableRow = ({product}) => {
  
const {Products} = useContext(Shop);
   
const [borraproduct, setborraproduct] = useState(true)


const removerProduct = (DetailProduct,count,setCarritoCount) =>{
  // console.log(nuevo)
  const nuevo = Products.filter(p=>p.id !== product.id)
  
  setborraproduct(false)


 
  }

return (
  <>
    {
      borraproduct
      ?
      <tr>
    <th scope='row'>{product.id}</th>
    <td><img src={product.image} alt="table- row" style={{width: "9rem"}}></img></td>
    <td>{product.title}</td>
    <td>{product.price}</td>
    <td>{product.quantity}</td>
    <td><button onClick={removerProduct}>Remove a</button></td>
   </tr>
: 
null
// console.log("estados")

    }
    </>
  
  )
  }

export default TableRow









// const isInCart = isProductInCart(product.id)

// if (isInCart) {
//   console.log("no")
//       // setProducts([...Products])
//       } else {
//       const productofiltrado = Products.filter(element => element.id !== product.id )
//  console.log("aqui esta el detalle", productofiltrado)
    
//     // setProducts([...Products, product])
//     }
  
  
//   const isProductInCart = (id) =>{
//     return Products.some(product =>product.id===id)
//   }