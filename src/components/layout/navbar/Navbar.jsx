import { useContext } from "react";
import logoEmpresa from "../../../assets/imgs/logoEmpresa.png";
import { MaterialUISwitch } from "../../layout/Switch/Switch";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HamburguerMenu } from "../hamburguerMenu/HamburguerMenu";
import { CartContainer } from "../../pages/cart/CartContainer";
import { CartContext } from "../../../context/CartContext";

export const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(CartContext);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "darkNavbar" : "lightNavBar"}>
      <HamburguerMenu />

      <Link id="page-wrap" className="logoEmpresa" to="/">
        <table>
          <tbody>
            <tr>
              <td>
                <img src={logoEmpresa} width="80px" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="logoEmpresa">Deco Design</span>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>

      <MaterialUISwitch onChange={cambiarModo} />
      <CartContainer />
    </div>
  );
};
