import React from 'react'
import { children, createContext, useState } from "react";

export const Shop = createContext ()

const ShopProvider = ({children}) => {

const [Product, setProduct] = useState ({})


  return (
  
    <Shop.Provider value={{Product}}>
    {children}
    </Shop.Provider>

  )
}

export default ShopProvider