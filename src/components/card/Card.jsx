import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body2">
        We are a small family operated vet. We started out in Adelaide, Austrlia
        in 1986 and have been here ever since. We welcome all types of pets but
        specialise in dogs and cats. Here at Wooffurs we also offer a social
        network for pet owners.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
