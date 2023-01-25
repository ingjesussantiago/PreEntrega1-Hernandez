import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Ad from '../../Components/Ad'
import ItemList from '../../Components/itemList'
import "./styles.scss"

const ItemListContainer = () => {

 const [Product, setProduct] = useState([])

const {categoryId} = useParams()
// console.log(categoryId)


useEffect(() => {

  fetch('https://fakestoreapi.com/products')
  .then(res=>{
    // console.log(res)
    return res.json()})

  .then(json=>{

  if (categoryId) {
     const productosfiltrados = json.filter(json=>json.category === categoryId)
    // console.log(productosfiltrados)

    setProduct(productosfiltrados)
  } else {
    setProduct(json)
  }
  })
  .catch((err) =>
    alert (err.message))

}, [categoryId])

// console.log(Product) //se logea el stado no el array inicia en []
 
  return (

    <div className='container-fluid'>
        
           <ItemList  Productos={Product}/>
           <Ad>
            <h3>quieres verder? anunciate aqui</h3>
            <button 
            style={{
              width:100,
              padding: 8,
              border: "2px solid black"            
              }}>cerrar</button>
           </Ad>
        </div>
    
      
  )
}

export default ItemListContainer

