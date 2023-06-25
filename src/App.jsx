import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Error404 } from "./components/Error404";
import { ItemListContainer } from "./components/items/ItemListContainer";
import { Cart } from "./components/items/Cart";
import { Destacado } from "./components/items/Destacado";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import CartContextProvider from "./assets/context/CartContext";
import { Checkout } from "./components/items/Checkout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:category"} element={<ItemListContainer />} />
          <Route path={"/destacado"} element={<Destacado />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />

          <Route path={"/*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
