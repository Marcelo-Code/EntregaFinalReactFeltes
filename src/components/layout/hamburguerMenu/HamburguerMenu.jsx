import { slide as Menu } from "react-burger-menu";
import { categories } from "../navbar/categories";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./hamburguerMenu.css";
import { products } from "../../../productsMock";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../fireBaseConfig";
import Swal from "sweetalert2";
import { useState } from "react";

export const HamburguerMenu = () => {
  //Función para agregar masivamente los productos a fireBase desde productsMock.js
  //-------------------------------------------------------------------------------
  const addProductsToDB = () => {
    products.forEach((product) => {
      addDoc(collection(db, "productsDB"), product);
    });
  };

  // Función para reestablecer los stocks a los valores originales
  // -------------------------------------------------------------
  const reloadStocks = async () => {
    const updatePromises = products.map((product) => {
      return updateDoc(doc(db, "productsDB", product.id), {
        stock: product.stock,
      });
    });
    try {
      closeMenu();
      await Promise.all(updatePromises);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se recargaron los stocks correspondientes",
        showConfirmButton: false,
        timer: 1500,
        color: "black",
      });
      console.log("Todos los stocks se han actualizado correctamente.");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error al actualizar stocks",
        showConfirmButton: false,
        timer: 1500,
        color: "black",
      });
      console.error("Error actualizando los stocks:", error);
    }
  };

  //Lógica para cerrar el menú luego de hacer click en algunas de las opciones
  //--------------------------------------------------------------------------
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Menu
      isOpen={menuOpen}
      onStateChange={handleStateChange}
      customBurgerIcon={<MenuRoundedIcon sx={{ color: "white" }} />}
    >
      <h2 className="bm-menu-title">CATEGORÍAS</h2>
      <div className="bm-menu-sub-title">Deco Design</div>
      <div className="bm-menu">
        <li className="bm-item-list">
          {categories.map(({ title, path }) => (
            <Link onClick={closeMenu} className="bm-item" key={title} to={path}>
              <ul>{title}</ul>
            </Link>
          ))}
          <br />
          {/* <Link onClick={addProductsToDB} className="reloadProducts"> */}

          <Link onClick={reloadStocks} className="reloadProducts">
            <ul
              style={{
                borderTop: "2px solid white",
                borderBottom: "2px solid white",
              }}
            >
              Reload Stocks
            </ul>
          </Link>
        </li>
      </div>
    </Menu>
  );
};
