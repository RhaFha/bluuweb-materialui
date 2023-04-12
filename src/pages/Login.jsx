import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;


function Login() {

  const [city, setCity] = useState("");
  const [error1, setError1] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError1({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }

      console.log(data);

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      console.log(error);
      setError1({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
    maxWidth="xs"
    sx={{ mt: 2 }}
  >
    <Typography
      variant="h3"
      component="h1"
      align="center"
      gutterBottom
    >
      Weather App
    </Typography>
    <Box
      sx={{ display: "grid", gap: 2 }}
      component="form"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="city"
        label="Ciudad"
        variant="outlined"
        size="small"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        error={error1.error}
        helperText={error1.message}
      />

      <LoadingButton
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Buscando..."
      >
        Buscar
      </LoadingButton>
    </Box>
    </Container>
  )
}

export default Login
