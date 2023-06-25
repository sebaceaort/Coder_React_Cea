import React from "react";

export const CartItem = ({ producto, removeItem }) => {
  return (
    <div className="row mt-3 d-flex align-items-center">
      <div className="col-md-2">
        <img
          className="img-fluid w-75"
          src={producto.imagen}
          alt={producto.descripcion}
        />
      </div>
      <div className="col-md-6 ">
        <p className="fs-3">{producto.descripcion}</p>
      </div>
      <div className="fs-3 tex-start col-md-2"> {producto.quantity} * ${producto.precio} </div>

      <div className="col-md-2">
        <button
          className="btn btn-outline-danger"
          onClick={() => removeItem(producto.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
