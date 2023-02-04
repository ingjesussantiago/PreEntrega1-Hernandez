import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../Components/itemList'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"; 
// import Ad from '../../Components/Ad';

const ItemListContainer = () => {

const [Product, setProduct] = useState([])
const {categoryId} = useParams()

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

}, [categoryId])

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

