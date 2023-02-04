import React, { useState } from 'react';
import {useContext} from "react";
import { Shop } from '../../context/ShopProvider';


const TableRow = ({product}) => {
  
const {Products } = useContext(Shop);
   
const [borraproduct, setborraproduct] = useState(true)


const removerProduct = (product) =>{

  Products.filter(p=>p.id !== product.id)
  
  
  setborraproduct()

 
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
    <td><button className="btn btn-primary "onClick={removerProduct}>Remover</button></td>
   </tr>
: 
null

    }
    </>
  
  )
  }

export default TableRow