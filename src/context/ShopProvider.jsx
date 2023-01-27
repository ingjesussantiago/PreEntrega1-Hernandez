import React from 'react'
import { createContext, useState } from "react";


export const Shop = createContext ()

const ShopProvider = ({children}) => {


const [Products, setProducts] = useState ([])

const addProduct = (Product) =>{
  setProducts([...Products, Product])
}

const sumarCantidad =() => {
let cantidadTotal =0;
for(const product of Products){
  cantidadTotal += product.quantity
}
return cantidadTotal
  
}


  return (
  
    <Shop.Provider value={{Products, addProduct, sumarCantidad}}>
    {children}
    </Shop.Provider>

  )
}

export default ShopProvider