import { useContext } from "react";
import { CartContext } from "../../assets/context/CartContext";
import { BsTrash3 } from "react-icons/bs";
import { TfiFaceSad } from "react-icons/tfi";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart, removeItem, clear, totalItems, totalPrice } =
    useContext(CartContext);

    if(cart.length===0){
      return(
        <div className="container mt-5">
          <div className="text-center">
            <h1>Su Carrito esta vacio!</h1>
            <TfiFaceSad className="fs-1 mt-3"/>
          </div>
        </div>
      )
    }
  return (
    <div className="container">
      <div className="text-center">
        <h1>Su Carrito</h1>
        <p>Total de productos: {totalItems()} </p>
      </div>
      <h2>Detalle de Productos</h2>

      {cart.map((producto) => (
        <CartItem
          key={producto.id}
          producto={producto}
          removeItem={removeItem}
        />
      ))}

      <div className="mt-3 text-end mx-5">
        <p className="fs-4 mx-2">Total: ${totalPrice().toFixed(2)}</p>
        <button className="btn btn-outline-danger " onClick={clear}>
          <span className="d-flex">
            <BsTrash3 className="mx-1" /> Vaciar Carrito
          </span>
        </button>
      </div>
      <div className="text-end mt-1">
        <Link className="text-end mx-5" to={"/checkout"}>
          <button className="btn btn-outline-success">Finalizar Compra</button>
        </Link>
      </div>
       
    </div>
  );
};
