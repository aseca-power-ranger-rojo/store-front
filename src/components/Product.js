import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";

const Product = ({ id, name, price, addToCart }) => {
  return (
    <Card
      id={id}
      sx={{
        width: "60%",
        height: 68,
        justifyContent: "center",
        backgroundColor: "#C2D39E",
      }}
    >
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
          <Button
            variant="contained"
            color="success"
            onClick={() => addToCart({ id, name, price })}
          >
            Add to cart
          </Button>
        </Container>
      </CardContent>
    </Card>
  );
};

export { Product };
