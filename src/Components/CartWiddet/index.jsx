import React from 'react'
import {BsCart3} from "react-icons/bs";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";
import { Link} from "react-router-dom";

const CartWiddet = () => {

const {sumarCantidad}= useContext(Shop)
  return (
    <Link to="/cart">
      <BsCart3  style={{height:30, width:30}}/>
      <span>{sumarCantidad ()}</span>
    </Link>
    )
}

export default CartWiddet
