import React from 'react'
import {BsCart3} from "react-icons/bs";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";

const CartWiddet = () => {

const value = useContext(Shop)

  return (
    <BsCart3  style={{height:30, width:30}}/>
  )
}

export default CartWiddet
