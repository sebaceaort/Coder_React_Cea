import { useEffect, useState } from "react";
import productos from "../../assets/productos.json";
import { useParams } from "react-router-dom";
import Item from './Item'

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          category
            ? productos.filter((producto) => producto.categoria === category)
            : productos
        );
      }, 1000);
    });
    promesa.then((data) => {
      setItems(data);
    });
  }, [category]);

  return (
    <div className="container">
      <div className="row">
        {items.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};
