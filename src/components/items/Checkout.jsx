import { useContext, useState } from "react";
import { CartContext } from "../../assets/context/CartContext";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { Loading } from "../Loading";

export const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { cart, totalPrice, clear } = useContext(CartContext);
  const updateStock = (id) => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then((item) => {
      updateDoc(producto, {
        stock:
          item.data().stock -
          cart[cart.findIndex((producto) => producto.id === item.id)].quantity,
      });
    });
  };
  const generarOrden = () => {
    if (nombre.length === 0) {
      alert("El nombre no puede estar vacío");
      return false;
    }

    if (email.length === 0) {
      alert("El email no puede estar vacío");
      return false;
    }

    if (telefono.length === 0) {
      alert("El teléfono no puede estar vacío");
      return false;
    }
    setIsLoading(true);
    const buyer = { name: nombre, phone: telefono, email: email };
    const items = cart.map((item) => ({
      id: item.id,
      title: item.descripcion,
      price: item.precio,
    }));
    cart.forEach((producto) => {
      updateStock(producto.id);
    });
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    const total = totalPrice();
    const order = { buyer: buyer, items: items, date: date, total: total };
    const db = getFirestore();
    const OrdersCollection = collection(db, "ordenes");
    addDoc(OrdersCollection, order)
      .then((resultado) => {
        setOrderId(resultado.id);
        setIsLoading(false);
        clear();
      })
      .catch((resultado) => {
        alert("Error! No se pudo completar la compra!");
      });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <table className="table">
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.imagen} alt={item.titulo} width={80} />
                  </td>
                  <td className="align-middle">{item.titulo}</td>
                  <td className="align-middle">
                    {item.quantity} x ${item.precio}
                  </td>
                  <td className="align-middle text-center">
                    ${item.quantity * item.precio}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="align-middle text-end">
                  Total a Pagar
                </td>
                <td className="align-middle text-center">${totalPrice()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-5 offset-md-1">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={generarOrden}
            >
              Generar Orden
            </button>
          </form>
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
          {orderId  ? (
            <div className="alert alert-success" role="alert">
              <h1 className="fs-1 text">Gracias por tu Compra!</h1>
              <p>
                Tu Orden de Compra es: <b>{orderId}</b>
              </p>
            </div>
          ) : (
           isLoading && <Loading/>
          )}
        </div>
      </div>
    </div>
  );
};
