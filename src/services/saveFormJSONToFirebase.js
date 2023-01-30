import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import  products  from "../data/products.json";



const saveFormJSONToFirebase = async () => {
try {
    products.forEach(async (product) => {
      
// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "products"), {
  title: product.title,
  price: product.price,
  description: product.description,
  image: product.image,
  stock: product.stock,
  category: product.category,
 
});
console.log("Document written with ID: ", docRef.id);
})

} catch (error) {
    console.log(error)
    
    
}
}

export default saveFormJSONToFirebase

