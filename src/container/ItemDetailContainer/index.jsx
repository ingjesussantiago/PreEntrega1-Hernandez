import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/itemDetail'
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


},[id])


  return (
    <div>
      {
        Object.keys(DetailProduct).length === 0
        ? <h2>Loading....page</h2>
        :<ItemDetail DetailProduct={DetailProduct}/>
      }
      
      </div>
  )
}

export default ItemDetailContainer