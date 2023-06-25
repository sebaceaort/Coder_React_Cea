import { useEffect, useState } from "react";
import { seleccionarProductosAleatorios } from "../../assets/util";
import Item from "./Item";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Loading } from "../Loading";

export const Destacado = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((data) => {
      setItems(
        seleccionarProductosAleatorios(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      );
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container">
      <div className="row">
        {items.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};
