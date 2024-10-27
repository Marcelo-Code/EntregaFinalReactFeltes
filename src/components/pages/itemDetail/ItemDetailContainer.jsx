import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../fireBaseConfig";
import CircularProgress from "@mui/joy/CircularProgress";
import { Footer } from "../../layout/footer/Footer";
import Swal from "sweetalert2";
import "./ItemDetail.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addToCart, getTotalQuantityById, isLoading, setIsLoading } =
    useContext(CartContext);

  const { id } = useParams();

  const navigate = useNavigate();

  //Función para volver a la pantalla anterior
  //------------------------------------------

  const handleGoBack = () => {
    navigate(-1);
  };

  let totalQuantityById = getTotalQuantityById(id);

  useEffect(() => {
    //Lleva a 0 el scroll vertical y horizontal
    window.scrollTo(0, 0);
    setIsLoading(true);
    let productCollection = collection(db, "productsDB");
    let refDoc = doc(productCollection, id);

    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .catch((error) => console.log(error))
      .finally(
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
      );
  }, [id, setIsLoading]);

  const onAdd = (quantity) => {
    let newProduct = { ...item, quantity };

    //Mensage de confirmación para agregar producto a carrito
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado a Carrito",
      html: '<p class="secondaryMessage">Deco Design</p>',
      showConfirmButton: false,
      timer: 1500,
      color: "black",
      customClass: {
        title: "confirmMessage",
      },
    });
    addToCart(newProduct);
  };

  const props = {
    item,
    onAdd,
    totalQuantityById,
    handleGoBack,
  };

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size="lg" />
      </div>
    );
  }

  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <ItemDetail {...props} />
      </div>
      <Footer />
    </>
  );
};

export default ItemDetailContainer;
