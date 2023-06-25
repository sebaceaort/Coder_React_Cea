
import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../assets/context/CartContext";
import { Loading } from "../Loading";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const{addItem}=useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    
    useEffect(() => {
        setItem(producto);
        setIsLoading(false);
    }, [producto]);

    return (
        isLoading ? (
            <Loading />
        ): (
            
        
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.imagen} alt={item.descripcion} className="img-fluid h-50" />
                </div>
                <div className="col-md-5">
                    <h1>{item.descripcion}</h1>
                    <p className="mt-3 fs-3"><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
        ))
}

export default ItemDetail;