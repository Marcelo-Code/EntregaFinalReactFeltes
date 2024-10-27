/* eslint-disable react/prop-types */

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IoClose } from "react-icons/io5";
import ReactSlidingPane from "react-sliding-pane";
import "./cart.css";
import { Button, IconButton } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import emptyCart from "../../../assets/imgs/emptyCart.png";
import { Link } from "react-router-dom";
export const Cart = ({
  cart,
  deleteAllProducts,
  deleteProductById,
  getTotalQuantityById,
  getTotalAmmount,
  isPaneOpen,
  setIspaneOpen,
}) => {
  return (
    <>
      <ReactSlidingPane
        className="slide-pane"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        width="320px"
        onRequestClose={() => {
          setIspaneOpen(false);
        }}
        hideHeader
      >
        <span>
          <button className="close-btn" onClick={() => setIspaneOpen(false)}>
            <IoClose />
          </button>
        </span>
        <br />
        <br />
        <div className="cartTitle">CARRITO DE COMPRAS</div>
        {getTotalAmmount() > 0 ? (
          <>
            <div className="cartTableContainer">
              <table className="cartTable">
                <tbody>
                  {cart.map((product) => {
                    return (
                      <React.Fragment key={product.id}>
                        <tr>
                          <td rowSpan={3}>
                            <img
                              src={product.imgUrl}
                              style={{ width: "150px" }}
                              alt=""
                            />
                          </td>
                          <td>{product.title}</td>
                          <td rowSpan={3} className="deleteColumn">
                            <IconButton
                              className="deleteBtn"
                              aria-label="delete"
                              onClick={() => {
                                deleteProductById(product.id);
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {Intl.NumberFormat("es-AR", {
                              style: "currency",
                              currency: "ARS",
                            }).format(product.price)}
                          </td>
                        </tr>
                        <tr>
                          <td>{product.quantity}</td>
                        </tr>
                        <tr>
                          <td style={{ fontWeight: "bold" }}>SUB TOTAL:</td>
                          <td>
                            {Intl.NumberFormat("es-AR", {
                              style: "currency",
                              currency: "ARS",
                            }).format(
                              getTotalQuantityById(product.id) * product.price
                            )}
                          </td>
                        </tr>
                        <tr style={{ height: "15px" }}></tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="totalContainer">
              <span style={{ fontWeight: "bold" }}>TOTAL:</span>
              <span>
                {Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(getTotalAmmount())}{" "}
              </span>
            </div>
            <div className="btnContainer">
              <Button
                className="allDeleteBtn"
                startIcon={<DeleteIcon />}
                onClick={() => deleteAllProducts()}
              >
                Borrar Todo
              </Button>
              <Link to="/checkOut">
                <Button
                  className="allDeleteBtn"
                  startIcon={<ShoppingCartCheckoutIcon />}
                  onClick={() => setIspaneOpen(false)}
                >
                  Checkout
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="imgContainer">
            <div>Nada por aquí...</div>
            <img src={emptyCart} width="150px" alt="" />
            <div>Carrito vacío...</div>
          </div>
        )}
      </ReactSlidingPane>
    </>
  );
};
