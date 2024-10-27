/* eslint-disable react/prop-types */
import { Footer } from "../../layout/footer/Footer";

//Presenta la tabla con el nro de orden de compra y el detalle de la misma
//------------------------------------------------------------------------

export const PurchaseOrder = ({ user, orderId, showPurchase }) => {
  const { name, phone, email } = user;
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100vw",
            margin: "0 auto",
            justifyContent: "center",
            overflowX: "auto",
          }}
        >
          <div
            style={{ minWidth: "600px", maxWidth: "700px" }}
            className="checkOutMessage"
          >
            <div>
              <div className="title">Deco Design</div>
              <div style={{ textAlign: "left", lineHeight: "30px" }}>
                <div>
                  <span style={{ fontWeight: "bold" }}>Nombre: </span>
                  {name}
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Teléfono: </span>
                  {phone}{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>e-mail: </span>
                  {email}{" "}
                </div>
              </div>
            </div>
            <br />
            <div>Gracias por su compra, su nro de orden es {orderId}</div>
            <table className="descriptionTable">
              <tbody>
                <th
                  style={{
                    borderBottom: "1px solid white",
                    borderTop: "1px solid white",
                  }}
                >
                  Producto
                </th>
                <th
                  style={{
                    borderBottom: "1px solid white",
                    borderTop: "1px solid white",
                  }}
                >
                  Precio
                </th>
                <th
                  style={{
                    borderBottom: "1px solid white",
                    borderTop: "1px solid white",
                  }}
                >
                  Cantidad
                </th>
                <th
                  style={{
                    borderBottom: "1px solid white",
                    borderTop: "1px solid white",
                  }}
                >
                  Sub - Total
                </th>
                {showPurchase.items.map((item) => (
                  <tr key={item.id} style={{ height: "50px" }}>
                    <td
                      style={{
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                      }}
                    >
                      {item.title}
                    </td>
                    <td>
                      {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      }).format(item.price)}{" "}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      }).format(item.quantity * item.price)}{" "}
                    </td>
                  </tr>
                ))}
                <tr style={{ borderTop: "1px solid white", height: "30px" }}>
                  <td colSpan={3} style={{ fontWeight: "bold" }}>
                    Total
                  </td>
                  <td>
                    {Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(
                      showPurchase.items.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )
                    )}{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer style={{ position: "absolute", bottom: "0" }} />
    </>
  );
};
