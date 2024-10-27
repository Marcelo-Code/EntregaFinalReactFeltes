import "./itemListContainer.css";
import { useEffect, useState, useContext } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../fireBaseConfig";
import { CartContext } from "../../../context/CartContext";
import { Footer } from "../../layout/footer/Footer";
import { SkeletonList } from "./SkeletonList";

export const ItemListContainer = () => {
  //Adquiere los productos desde FireBase y pasa las props al presentacional
  //Mientras se están cargando muestra los Skeletons
  //------------------------------------------------------------------------

  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const { isLoading, setIsLoading } = useContext(CartContext);

  useEffect(() => {
    let productCollection = collection(db, "productsDB");
    let queryDB = productCollection;
    setIsLoading(true);

    if (categoryName) {
      let productsCollectionFiltered = query(
        productCollection,
        where("category", "==", categoryName)
      );
      queryDB = productsCollectionFiltered;
    }

    getDocs(queryDB)
      .then((res) => {
        let array = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setItems(array);
      })
      .catch((error) => console.log(error))
      .finally(
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
      );
  }, [categoryName, setIsLoading]);

  if (isLoading) {
    return <SkeletonList />;
  } else {
    return (
      <>
        <ItemList items={items} />
        <Footer />
      </>
    );
  }
};
