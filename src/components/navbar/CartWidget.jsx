import { GiShoppingCart } from "react-icons/gi";

export const CartWidget = ({number}) => {
  return (
    <div className="me-3">     
      <span className="fs-5 ">
      <GiShoppingCart size={'1.75em'}/>
        {number}
      </span>
    </div>
  );
};
