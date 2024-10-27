import { BsCart } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  //Desectructura función getTotalQuantity de CartContext
  //Obtiene el total de items en el carrito
  //Lo asigna a la burbuja del carrito
  //-----------------------------------------------------

  const { getTotalQuantity } = useContext(CartContext);

  const totalQuantity = getTotalQuantity();

  return (
    <div style={{ fontSize: "30px" }}>
      <Badge
        badgeContent={totalQuantity}
        color="primary"
        style={{ zIndex: 3, position: "relative" }}
        showZero
      >
        <BsCart color="white" />
      </Badge>
    </div>
  );
};
