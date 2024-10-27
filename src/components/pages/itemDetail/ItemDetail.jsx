/* eslint-disable react/prop-types */
import { CardProduct } from "../../common/cardProduct/CardProduct";

export const ItemDetail = ({
  item,
  onAdd,
  totalQuantityById,
  handleGoBack,
}) => {
  const props = {
    item,
    onAdd,
    totalQuantityById,
    handleGoBack,
  };

  return (
    <div>
      <br />
      <CardProduct {...props} />
      <div
        style={{
          width: "50%",
          minWidth: "300px",
          margin: "0 auto",
          marginTop: "100px",
          borderTop: "2px solid black",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            padding: "10px",
            background: "rgba(255, 255, 255, 0.7)",
          }}
        >
          Políticas de devolución
        </h2>
        <div
          style={{
            fontSize: "0.8em",
            textAlign: "justify",
            background: "rgba(255, 255, 255, 0.7)",
            padding: "10px",
          }}
        >
          Desde la empresa aceptamos devoluciones dentro de los 30 días
          posteriores a la entrega. El producto debe estar en su empaque
          original, sin uso y en buen estado. No se aceptan devoluciones de
          productos personalizados o en oferta, salvo por defectos. Para iniciar
          la devolución, contacta a nuestro servicio al cliente con el
          comprobante de compra. Los reembolsos se procesan en 7-10 días
          hábiles. Los costos de envío son cubiertos por la tienda si hay
          defectos; de lo contrario, son responsabilidad del cliente. No se
          realizan cambios directos, solo devoluciones.
        </div>
      </div>
    </div>
  );
};
