import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { Close } from "@mui/icons-material";

const CartProduct = ({ id, name, price, removeFromCart }) => {
  return (
    <Card id={id} sx={{ width: "100%", height: 100, justifyContent: "center" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Container
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
          <Button onClick={() => removeFromCart(id)}>
            <Close />
          </Button>
        </Container>
      </CardContent>
    </Card>
  );
};

export { CartProduct };
