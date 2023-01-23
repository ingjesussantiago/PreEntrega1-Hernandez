import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../Components/itemList'
import "./styles.scss"

const ItemListContainer = () => {

// const [count, setCount]= useState (1)
//   const sumarContador = () =>{
//   setCount(count +1)
//  }
 
//  const restarContador= ( ) =>{
//   setCount(count-1)
//  }
 
const [Product, setProduct] = useState([])

const {categoryId} = useParams()
console.log(categoryId)


useEffect(() => {

  fetch('https://fakestoreapi.com/products')
  .then(res=>{
    // console.log(res)
    return res.json()})

  .then(json=>{

  if (categoryId) {
     const productosfiltrados = json.filter(json=>json.category === categoryId)
    console.log(productosfiltrados)

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
        </div>
    
      
  )
}

export default ItemListContainer

