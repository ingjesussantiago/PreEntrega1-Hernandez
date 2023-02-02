import React from 'react'
import {useContext,useState} from "react";
import TableRow from './TableRow'
import { Shop } from '../../context/ShopProvider';
import generaOrdenObjeto from "../../services/generaOrdenObjeto";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore"; 
import FormComp from '../../Components/Form';
import { Link } from 'react-router-dom'

const Cart = () => {

  const {Products, total, cleanCart} = useContext(Shop);
  // console.log(Products)
  const [formVis,setFormVis]= useState(false);

  const [Loader, setLoader] = useState(false);

  const confirmaCompra = async (dataDelFormulario) => { 
    const{nombre,email,telefono}=dataDelFormulario
    
      try {
      setLoader(true);
      const order = generaOrdenObjeto({
        nombre,
        email,
        telefono,
        cart: Products,
        total: total()
      })

    // setFormVis(true);

// console.log(order);

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "orders"), order);
cleanCart ()

for ( const productCart of Products) {

  const productRef = doc(db, "products", productCart.id);
  
  // Set the "capital" field of the city 'DC'
  await updateDoc(productRef, {
    stock: productCart.stock - productCart.quantity
  });
}

alert("orden confirmada con ID: " + docRef.id);
} catch (error) {
  console.log(error);
}finally{
  setLoader(false);
  setFormVis(false);
}
}

  return (
    <>
    {
    Products.lenght !== 0 ?
    <>
    <table class="table table-success table-striped">
      <thead>
        <tr>
         <th scope='col' class="text-center">Id</th>
         <th scope='col'>Imagen</th> 
         <th scope='col'>Descripción</th> 
         <th scope='col'>Precio</th>
         <th scope='col'>Cantidad</th>
         <th scope='col'>Remover</th>
        </tr>
      </thead>
      <tbody>
        {Products.map(product => {
          return<TableRow key={product.id} product={product}/>
        })}
      </tbody>
    </table>
    {
      Loader ? 
      <h2>Cargando...</h2>
      :
      <button onClick={() => setFormVis(true)}>Confirmar Compra</button>
    }
    </>
    :
    <>
    <h1>no hay productos en su carrito </h1>


    <button class="btn btn-primary ">
    <Link to="/" class="text-bg-primary">home</Link>
    </button>
    
  </>
}
{
  formVis ?
  <FormComp
confirmaCompra={confirmaCompra}
formVis={formVis}
setFormVis={setFormVis}
  />
  :null

}
</>
  )
}
  

export default Cart