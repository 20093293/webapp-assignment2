import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CreditsCard = ({ actor }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {actor.name}
        </Typography>
        <Typography color="textSecondary">
          Character: {actor.character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreditsCard;