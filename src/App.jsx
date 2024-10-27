import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import "./App.css";
import { CartContext } from "./context/CartContext";
import { CheckOutContainer } from "./components/pages/checkOut/CheckOutContainer";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(CartContext);
  return (
    <BrowserRouter>
      <div className={darkMode ? "darkMode" : "ligthMode"}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route
            path={"/category/:categoryName"}
            element={<ItemListContainer />}
          />
          <Route
            path={"/productDetail/:id"}
            element={<ItemDetailContainer />}
          />
          <Route path={"/checkOut"} element={<CheckOutContainer />} />
          <Route path={"*"} element={<h1>not found</h1>} />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
