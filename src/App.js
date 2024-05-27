import { Paper, Typography } from "@mui/material";
import { Product } from "./components/Product";

function App() {
  return (
    <div className="App">
      <Paper
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          minHeight: "100vh",
          padding: "40px",
          backgroundColor: "slategray",
        }}
        elevation={1}
      >
        <Typography variant="h2" component="div">
          Power Ranger Rojo's STORE
        </Typography>
        <Product id="1" name="Manzana" price="10" />
        <Product id="2" name="Manzana" price="10" />
        <Product id="3" name="Manzana" price="10" />
        <Product id="4" name="Manzana" price="10" />
        <Product id="5" name="Manzana" price="10" />
        <Product id="6" name="Manzana" price="10" />
        <Product id="7" name="Manzana" price="10" />
      </Paper>
    </div>
  );
}

export default App;
