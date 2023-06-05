import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Error404 } from './components/Error404';
import { ItemListContainer } from './components/items/ItemListContainer';
import { Destacado } from './components/items/Destacado';
import ItemDetailContainer from './components/items/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<ItemListContainer/>} />
      <Route path={'/category/:category'} element={<ItemListContainer/>} />
      <Route path={'/destacado'} element={<Destacado/>} />
      <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
      <Route path={'/*'} element={<Error404/>} />
    </Routes>   
    </BrowserRouter>
    );
}

export default App;
