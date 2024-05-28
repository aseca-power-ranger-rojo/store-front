// MainContent.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import { Product } from "./Product";

const ProductList = ({ addToCart, products }) => {
  return (
    <Paper
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#F7F8F5",
      }}
      elevation={1}
    >
      <Typography variant="h2" component="div">
        Power Ranger Rojo's STORE
      </Typography>
      {products.map((product) => (
        <Product key={product.id} {...product} addToCart={addToCart} />
      ))}
    </Paper>
  );
};

export default ProductList;
