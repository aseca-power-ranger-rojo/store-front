import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import CartSidebar from "./components/CartSidebar";
import ProductList from "./components/ProductList";
import { getProducts, addOrders } from "./services";

const INITIAL_QUANTITY = 1;

const App = () => {
  const [products, setProducts] = useState([]);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

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

  const handleBuy = (totalPrice) => {
    if(totalPrice === 0) return
    const products = cartProducts.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
    }));
    addOrders(products, `${totalPrice}`).then(() => setCartProducts([]))
  }

  return (
    <div className="App">
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <ProductList addToCart={addToCart} products={products} />
        <CartSidebar
          cartProducts={cartProducts}
          handleBuy={handleBuy}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </Box>
    </div>
  );
};

export default App;
