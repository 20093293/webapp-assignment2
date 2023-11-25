import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'; 
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

export default function ActorCard({ actor }) {

  const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === actor.id)) {
    actor.favorite = true;
  } else {
    actor.favorite = false;
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(actor);
  };

  return (
    <Grid item xs={12} style={{ marginTop: '30px' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actor.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 400 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img 
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Grid>
  );
}