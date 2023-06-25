import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore,doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const db= getFirestore();
        const producto=doc(db,"items",id);
        getDoc(producto).then((data) => {
            setItem({...data.data(), id: data.id});
        })
    }, [id]);

    return (
        <>
            <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailContainer;