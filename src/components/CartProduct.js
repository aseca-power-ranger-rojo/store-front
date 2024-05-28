import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const CartProduct = ({
  id,
  name,
  price,
  quantity,
  removeFromCart,
  addToCart,
}) => {
  return (
    <Card
      id={id}
      sx={{
        height: "68px",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#92A863",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "max-content",
            gap: "20px",
            margin: "0",
          }}
        >
          <Typography variant="h7" component="div">
            ${price}
          </Typography>
          <Box sx={{ display: "flex", alignItems: 'center' }}>
            <Button
              onClick={() =>
                quantity === 1
                  ? removeFromCart(id)
                  : addToCart({ id, name, price }, quantity - 1)
              }
            >
              <ArrowLeft sx={{ color: 'black', fontSize: 30 }} />
            </Button>
            <Typography variant="h7" component="div">
              {quantity}
            </Typography>
            <Button
              onClick={() => addToCart({ id, name, price }, quantity + 1)}
            >
              <ArrowRight sx={{ color: 'black', fontSize: 30 }} />
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export { CartProduct };
