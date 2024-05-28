import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CartProduct } from "./CartProduct";

const CartSidebar = ({
  cartProducts = [],
  setCartProducts,
  removeFromCart,
  addToCart,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "0 0 0 18px",
        top: "0px",
        position: "sticky",
        maxHeight: "90vh",
        width: "430px",
        p: 2,
        backgroundColor: "#C2D39E",
      }}
    >
      <Box sx={{ display: "flex", gap: "4px", height: "5vh" }}>
        <Box sx={{ height: "32px", display: "flex", alignItems: "center" }}>
          <ShoppingCart />
          <Typography variant="h6" align="center">
            Cart
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "80vh",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
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
                quantity={product.quantity}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            ))
          ) : (
            <Typography variant="h6" align="center">
              Empty cart
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" align="center">
          Total: ${" "}
          {cartProducts.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          )}
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ height: 36 }}
          onClick={() => setCartProducts([])}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
};

export default CartSidebar;
