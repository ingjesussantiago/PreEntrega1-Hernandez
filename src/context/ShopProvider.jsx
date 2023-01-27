import React from 'react'
import { createContext, useState } from "react";


export const Shop = createContext ()

const ShopProvider = ({children}) => {


const [Products, setProducts] = useState ([])

const addProduct = (Product) =>{
  const isInCart = isProductInCart(Product.id)
  
  if (isInCart) {
    const productoRepetido = Products.find(element => element.id === Product.id )
    productoRepetido.quantity += Product.quantity
    setProducts([...Products])
  } else {
  setProducts([...Products, Product])
  }
}

const isProductInCart = (id) =>{
  return Products.some(product =>product.id===id)
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