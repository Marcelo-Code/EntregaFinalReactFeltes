/* eslint-disable react/prop-types */
import "./itemListContainer.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import "./itemListContainer.css";

const ItemList = ({ items }) => {
  //Obtiene las props del archivo contenedor y renderiza los productos
  //------------------------------------------------------------------
  return (
    <div className="muiCard">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            sx={{
              maxWidth: 300,
              boxShadow: "0 0 10px black",
              marginTop: "25px",
              filter: item.stock === 0 ? "grayscale(100%)" : "none",
            }}
          >
            <CardContent>
              <CardMedia component="img" height="194" image={item.imgUrl} />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center", height: "70px" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  height: "70px",
                  textAlign: "justify",
                }}
              >
                {item.description}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  textAlign: "center",
                  height: "20px",
                }}
              >
                {Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(item.price)}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.stock > 0 ? (
                <Link to={`/productDetail/${item.id}`}>
                  <Button size="small">Ver más detalles</Button>
                </Link>
              ) : (
                <Button size="big">Producto sin stock</Button>
              )}
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
