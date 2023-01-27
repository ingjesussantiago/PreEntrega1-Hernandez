import React from 'react'
import {BsCart3} from "react-icons/bs";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";

const CartWiddet = () => {

const {sumarCantidad}= useContext(Shop)
// console.log(Product)

  return (
    <>
      <BsCart3  style={{height:30, width:30}}/>
      <span>{sumarCantidad ()}</span>
    </>
  
  )
}

export default CartWiddet
