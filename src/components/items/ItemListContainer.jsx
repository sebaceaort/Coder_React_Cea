import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import Item from "./Item";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = category
      ? query(itemsCollection, where("categoria", "==", category))
      : itemsCollection;
    getDocs(q).then((data) => {
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    });
  }, [category]);

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
