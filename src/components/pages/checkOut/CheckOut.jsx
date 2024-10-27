/* eslint-disable react/prop-types */
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { Footer } from "../../layout/footer/Footer";

//Presenta el formulario donde el usuario adjunta sus datos
//---------------------------------------------------------

export const CheckOut = ({
  handleSubmit,
  handleChange,
  errors,
  handleGoBack,
}) => {
  const { name, phone, email } = errors;
  return (
    <div>
      <form style={{ minHeight: "50vh" }} onSubmit={handleSubmit} action="">
        <Box
          className="formContainer"
          sx={{
            paddingTop: "40px",
            paddingBottom: "40px",
            margin: "10% auto 0",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "49vw",
            minWidth: "300px",
          }}
        >
          {/* Input nombre */}

          <TextField
            label="Nombre"
            type="text"
            name="name"
            onChange={handleChange}
            error={name}
            helperText={name ? "caracteres inválidos o campo vacío" : ""}
            placeholder="máximo 20 caracteres"
            id="outlined-start-adornment"
            variant="outlined"
            sx={{
              m: 1,
              width: "25ch",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& label": {
                color: "white",
              },
              "&.Mui-focused label": {
                color: "white",
              },
              "& input": {
                color: "white",
              },
            }}
            slotProps={{
              htmlInput: {
                maxLength: 20,
              },
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
          />

          {/*Input email */}

          <TextField
            label="email"
            type="email"
            name="email"
            onChange={handleChange}
            error={email}
            helperText={email ? "formato inválido o campo vacío" : ""}
            placeholder="máximo 30 caracteres"
            id="outlined-start-adornment"
            sx={{
              m: 1,
              width: "25ch",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& label": {
                color: "white",
              },
              "&.Mui-focused label": {
                color: "white",
              },
              "& input": {
                color: "white",
              },
            }}
            slotProps={{
              htmlInput: {
                maxLength: 30,
              },
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
          />

          {/*Input telefono */}

          <TextField
            label="Teléfono"
            type="tel"
            name="phone"
            onChange={handleChange}
            error={phone}
            helperText={phone ? "caracteres inválidos o campo vacío" : ""}
            placeholder="máximo 20 caracteres"
            id="outlined-start-adornment"
            sx={{
              m: 1,
              width: "25ch",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& label": {
                color: "white",
              },
              "&.Mui-focused label": {
                color: "white",
              },
              "& input": {
                color: "white",
              },
            }}
            slotProps={{
              htmlInput: {
                maxLength: 20,
              },
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ width: "95%", marginTop: "30px" }}
          >
            Finalizar Compra
          </Button>
          <Button sx={{ color: "white" }} onClick={handleGoBack}>
            Volver
          </Button>
        </Box>
      </form>
      <Footer
        style={{ position: "relative", bottom: "0", marginTop: "600px" }}
      />
    </div>
  );
};
