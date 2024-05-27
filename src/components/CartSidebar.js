import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CartProduct } from "./CartProduct";

const CartSidebar = ({
  cartProducts = [],
  setCartProducts,
  removeFromCart,
}) => {
  console.log(cartProducts);
  return (
    <Box sx={{ maxHeight: "100vh", width: "430px", p: 2 }}>
      <Box sx={{ height: "10vh", display: "flex" }}>
        <ShoppingCart />
        <Typography variant="h6" align="center">
          Cart
        </Typography>
      </Box>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {cartProducts.length !== 0 ? (
          cartProducts.map((product) => (
            <CartProduct
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <Typography variant="h6" align="center">
            Carrito vacio
          </Typography>
        )}
      </Box>
      <Box sx={{ height: "10vh", display: "flex" }}>
        <ShoppingCart />
        <Typography variant="h6" align="center">
          Total:{" "}
          {cartProducts.reduce(
            (acc, product) => acc + parseInt(product.price),
            0
          )}
        </Typography>
        <Button sx={{}} onClick={() => setCartProducts([])}>Buy</Button>
      </Box>
    </Box>
  );
};

export default CartSidebar;
