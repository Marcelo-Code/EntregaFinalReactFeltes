import "./footer.css";
import logoCoder from "../../../assets/imgs/logoCoder.png";
import logoReact from "../../../assets/imgs/logoReact.png";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const Footer = () => {
  const { darkMode } = useContext(CartContext);
  return (
    <div className={darkMode ? "darkFooter" : "lightFooter"}>
      <div>
        <img className="imgFooter" src={logoCoder} width="150px" alt="" />
      </div>
      <h2 className="footerTitle">Entrega Final</h2>
      <div>
        <img className="imgFooter" src={logoReact} width="70px" alt="" />
      </div>
      <div className="name">Marcelo Feltes</div>
      <h2 className="footerTitle">2024</h2>
    </div>
  );
};
