import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Product = ({ id, name, price }) => {
  return (
    <Card id={id} sx={{ width: 205, height: 140, justifyContent:'center' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          ${price}
        </Typography>
        <Button>Buy</Button>
        <Button>Add to cart</Button>
      </CardContent>
    </Card>
  );
}

export { Product };
