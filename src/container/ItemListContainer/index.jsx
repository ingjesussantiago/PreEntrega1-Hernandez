import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Ad from '../../Components/Ad'
import ItemList from '../../Components/itemList'
import "./styles.scss"
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"; 
// import saveFormJSONToFirebase from '../../services/saveFormJSONToFirebase'
const ItemListContainer = () => {

 const [Product, setProduct] = useState([])
//  console.log(db);

const {categoryId} = useParams()
// console.log(categoryId)
// useEffect(() => {
//   saveFormJSONToFirebase()
 // }, [])

useEffect(() => {

const getproducts =async()=>{
let querySnapshot;
  if (categoryId){
     const q = query(collection(db, "products"), where("category", "==", categoryId));
     querySnapshot = await getDocs(q);
  }else{
    querySnapshot = await getDocs(collection(db, "products"));
  }
  const productosFirebase =[]
  querySnapshot.forEach((doc) => {
  // console.log(`${doc.id} => ${doc.data()}`);
  const product={
    id: doc.id,
    ...doc.data()
  }
  productosFirebase.push(product)
});
setProduct(productosFirebase)
}

getproducts();


  // fetch('https://fakestoreapi.com/products')
  // .then(res=>{
  //   // console.log(res)
  //   return res.json()})

  // .then(json=>{

  // if (categoryId) {
  //    const productosfiltrados = json.filter(json=>json.category === categoryId)
  //   // console.log(productosfiltrados)

  //   setProduct(productosfiltrados)
  // } else {
  //   setProduct(json)
  // }
  // })
  // .catch((err) =>
  //   alert (err.message))

}, [categoryId])

// console.log(Product) //se logea el stado no el array inicia en []
 
  return (

    <div className='container-fluid'>
        
           <ItemList  Productos={Product}/>
           {/* <Ad>
            <h3>quieres verder? anunciate aqui</h3>
            <button 
            style={{
              width:100,
              padding: 8,
              border: "2px solid black"            
              }}>cerrar</button>
           </Ad> */}
        </div>
  
  )
}

export default ItemListContainer

