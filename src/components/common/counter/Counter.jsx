/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import "./counter.css";

export const Counter = ({
  contador,
  sumar,
  restar,
  onAdd,
  stock,
  handleGoBack,
}) => {
  //Es llamado por el contendor y solemante renderiza el componente
  //---------------------------------------------------------------
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          margin: "auto",
          border: "3px solid black",
          borderRadius: "24px",
          padding: "0",
          width: "150px",
          height: "48px",
          gap: 0,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            minWidth: "40px",
            minHeight: "40px",
            margin: 0,
            padding: 0,
          }}
          onClick={restar}
          disabled={contador === 1 ? true : false}
        >
          -
        </Button>
        <h1 className="number">{String(contador).padStart(2, "0")}</h1>
        <Button
          variant="contained"
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            minWidth: "40px",
            minHeight: "40px",
            magin: 0,
            padding: 0,
          }}
          onClick={sumar}
          disabled={contador === stock ? true : false}
        >
          +
        </Button>
      </Box>

      <Button
        className="plusMinusBtn"
        variant="contained"
        sx={{ width: "200px", marginBottom: "0" }}
        onClick={() => {
          onAdd(contador);
        }}
      >
        Agregar al carrito
      </Button>
      <br />
      <Button sx={{ marginTop: "0" }} onClick={handleGoBack}>
        Volver
      </Button>
    </div>
  );
};
