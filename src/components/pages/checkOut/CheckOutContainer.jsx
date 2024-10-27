import CircularProgress from "@mui/joy/CircularProgress";
import { useContext, useState } from "react";
import "./checkOut.css";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../fireBaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Footer } from "../../layout/footer/Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { PurchaseOrder } from "./PurchaseOrder";
import { CheckOut } from "./CheckOut";

export const CheckOutContainer = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [showPurchase, setShowPurchase] = useState({});

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, setCart, getTotalAmmount, isLoading, setIsLoading } =
    useContext(CartContext);

  let totalAmmount = getTotalAmmount();

  const purchaseOrder = {
    buyer: user,
    items: cart,
    totalAmmount,
  };

  const navigate = useNavigate();

  //Función para volver a la pantalla anterior
  //------------------------------------------

  const handleGoBack = () => {
    navigate(-1);
  };

  //Función para generar la orden de compra
  //---------------------------------------

  const generatePurchaseOrder = () => {
    setIsLoading(true);

    //Guarda la orden de compra en DB
    const purchaseOrdersCollection = collection(db, "purchaseOrdersDB");
    addDoc(purchaseOrdersCollection, purchaseOrder)
      .then((res) => {
        //Devuelve el id de la operación
        setOrderId(res.id);
        setShowPurchase(purchaseOrder);
        setCart([]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setTimeout(() => setIsLoading(false), 1000));
    //Actualiza Stock en DB
    purchaseOrder.items.forEach((element) => {
      updateDoc(doc(db, "productsDB", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };

  //Función para manejar el evento submit
  //---------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      name: false,
      phone: false,
      email: false,
    };

    //Verifica ausencia de símbolos y longitud mayor a cero en nombre
    const regularExpressionName = /^[A-Za-z\s]+$/;
    const isValidName = regularExpressionName.test(user.name);

    if (user.name.length === 0 || !isValidName) {
      newErrors.name = true;
    }

    //Verifica el formato del email y longitud mayor a cero en email
    const regularExpressionEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = regularExpressionEmail.test(user.email);
    if (user.email.length === 0 || !isValidEmail) {
      newErrors.email = true;
    }

    //Verifica que solamente se ingresen números y longitud mayor a cero en teléfono
    const regularExpressionPhone = /^[0-9]+$/;
    const isValidPhone = regularExpressionPhone.test(user.phone);
    if (user.phone.length === 0 || !isValidPhone) {
      newErrors.phone = true;
    }

    setErrors(newErrors);

    //Para generar la orden de compra no debe haber errores en los inputs
    if (
      newErrors.name === false &&
      newErrors.email === false &&
      newErrors.phone === false
    ) {
      if (getTotalAmmount() > 0) {
        generatePurchaseOrder();
      } else {
        //Si el carrito está vacío no deja generar orden de compra
        Swal.fire({
          icon: "warning",
          title: "Oops... Carrito vacío!",
          text: "Necesitas agregar productos para generar orden de compra, volvé a la pantalla principal",
          showConfirmButton: true,
          confirmButtonText: "Ok",
          color: "black",
        });
      }
    } else {
      console.log("hay errores en los inputs");
    }
  };

  //Función para detectar cambios en los inputs
  //-------------------------------------------

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (isLoading) {
    return (
      <>
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20%",
          }}
        >
          <CircularProgress size="lg" />
        </div>
        <Footer />
      </>
    );
  }

  const props = {
    user,
    orderId,
    showPurchase,
    handleSubmit,
    handleChange,
    errors,
    handleGoBack,
  };

  return orderId ? <PurchaseOrder {...props} /> : <CheckOut {...props} />;
};
