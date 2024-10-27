import { useContext, useState } from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Cart } from "./Cart";

export const CartContainer = () => {
  const [isPaneOpen, setIspaneOpen] = useState(false);
  const {
    cart,
    deleteAllProducts,
    deleteProductById,
    getTotalQuantityById,
    getTotalAmmount,
  } = useContext(CartContext);

  const togglePane = () => {
    setIspaneOpen(!isPaneOpen);
  };

  const props = {
    cart,
    deleteAllProducts,
    deleteProductById,
    getTotalQuantityById,
    getTotalAmmount,
    isPaneOpen,
    setIspaneOpen,
    togglePane,
  };

  return (
    <div>
      <Link onClick={togglePane}>
        <CartWidget />
      </Link>
      <Cart {...props} />
    </div>
  );
};
