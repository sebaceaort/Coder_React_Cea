import React, { useEffect, useState } from 'react'
import productos from '../../assets/productos.json'
import { seleccionarProductosAleatorios } from '../../assets/util'
import Item from './Item';


  
export const Destacado = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      const promesa = new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            seleccionarProductosAleatorios(productos)
          );
        }, 1000);
      });
      promesa.then((data) => {
        setItems(data);
      });
    }, []);
  
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