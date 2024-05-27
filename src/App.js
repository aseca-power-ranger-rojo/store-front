import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CartSidebar from "./components/CartSidebar";
import ProductList from "./components/ProductList";

const App = () => {
  const products = [
    { id: "1", name: "Manzana Roja", price: "10" },
    { id: "2", name: "Manzana Verde", price: "30" },
    { id: "3", name: "Manzana Golden", price: "100" },
    { id: "4", name: "Naranja", price: "10" },
    { id: "5", name: "Mandarina", price: "30" },
    { id: "6", name: "Toronja", price: "100" },
    { id: "7", name: "Sandia", price: "10" },
    { id: "8", name: "Pera", price: "30" },
  ];

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeFromCart = (productId) => {
    setCartProducts(cartProducts.filter(product => product.id!== productId));
  };

  return (
    <div className="App">
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <ProductList addToCart={addToCart} products={products} />
        <CartSidebar
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          removeFromCart={removeFromCart}
        />
      </Box>
    </div>
  );
};

export default App;
