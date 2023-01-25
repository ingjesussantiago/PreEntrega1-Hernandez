import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer  from './container/ItemDetailContainer';
import ShopProvider from './context/ShopProvider';




function App() {
  return (
<ShopProvider>
        <BrowserRouter>
        <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/Detail/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h2>no hay pagina</h2>}/>
     </Routes>  
  </BrowserRouter>

</ShopProvider>

  
     

  );
}

export default App;
