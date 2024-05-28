import React, { useState, useCallback } from "react";
import { Box } from "@mui/material";
import CartSidebar from "./components/CartSidebar";
import ProductList from "./components/ProductList";

const INITIAL_QUANTITY = 1;

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
    { id: "9", name: "Banana", price: "30" },
    { id: "10", name: "Kiwi", price: "100" },
    { id: "11", name: "Tomate", price: "10" },
    { id: "12", name: "Pera", price: "30" },
    { id: "13", name: "Mandarina", price: "30" },
    { id: "14", name: "Toronja", price: "100" },
    { id: "15", name: "Sandia", price: "10" },
    { id: "16", name: "Pera", price: "30" },
  ];

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = useCallback((product, quantity) => {
    setCartProducts((prevCart) => {
      const cartObj = prevCart.reduce((acc, curr) => {
        acc[curr.id] = { ...curr, quantity: curr.quantity || 0 };
        return acc;
      }, {});

      if (quantity === undefined && cartObj[product.id]) {
        cartObj[product.id].quantity += 1;
      } else {
        cartObj[product.id] = {
          ...product,
          quantity: quantity || INITIAL_QUANTITY,
        };
      }

      return Object.values(cartObj);
    });
  }, []);

  const removeFromCart = useCallback(
    (productId) => {
      setCartProducts(
        cartProducts.filter((product) => product.id !== productId)
      );
    },
    [cartProducts]
  );

  return (
    <div className="App">
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <ProductList addToCart={addToCart} products={products} />
        <CartSidebar
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </Box>
    </div>
  );
};

export default App;
