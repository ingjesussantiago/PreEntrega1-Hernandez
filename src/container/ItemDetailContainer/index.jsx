import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/itemDetail'
// import "./styles.scss"
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

 const [DetailProduct, setDetailProduct] = useState({})

  const {id}= useParams()

  
useEffect(() => {
const getProduct = async ()=>{
   const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const productDetail={
      id: docSnap.id,
      ...docSnap.data()
    }
    setDetailProduct(productDetail);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

getProduct();



 






  // fetch (`https://fakestoreapi.com/products/${id}`)
  // .then(res=>{
  //   // console.log(res)
  //   return res.json()})
  // .then(json=>{
  //   setDetailProduct(json)})

  // .catch((err) =>
  //   alert (err.message))

},[id])

// console.log(DetailProduct) //se logea el stado no el array inicia en []
 
  return (

    <div>
      {
        Object.keys(DetailProduct).length === 0
        ? <h1>Loading....page</h1>
        :<ItemDetail DetailProduct={DetailProduct}/>
      }
      
      </div> //array y estado 
  )
}

export default ItemDetailContainer