/* eslint-disable react/prop-types */
import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({
  onAdd,
  stock,
  totalQuantityById,
  handleGoBack,
}) => {
  //Archivo contenedor, cuenta (suma o resta) la cantidad de productos que serán agregados al carrito
  //Llama al presentacional Counter
  //-------------------------------------------------------------------------------------------------

  const [contador, setContador] = useState(totalQuantityById);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  let childProps = {
    contador,
    sumar,
    restar,
    onAdd,
    stock,
    handleGoBack,
  };

  return <Counter {...childProps} />;
};
