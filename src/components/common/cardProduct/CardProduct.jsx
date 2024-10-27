/* eslint-disable react/prop-types */
import "./cardProduct.css";
import { CounterContainer } from "../counter/CounterContainer";

//Cards para renderizar los productos en el ItemDetail
//----------------------------------------------------

export const CardProduct = ({
  item,
  onAdd,
  totalQuantityById,
  handleGoBack,
}) => {
  const { title, imgUrl, description, price, stock } = item;

  const props = {
    onAdd,
    stock,
    totalQuantityById,
    handleGoBack,
  };

  return (
    <div className="productCard">
      <div>
        <h2>{title}</h2>
      </div>
      <br />
      <img src={imgUrl} alt="" />
      <br />
      <div>
        {Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
        }).format(price)}{" "}
      </div>

      <br />
      <div>{description}</div>
      <br />
      <div>Stock disponible {stock}</div>
      <br />
      <CounterContainer {...props} />
    </div>
  );
};
