import React, { useState } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorsList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors, title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  const displayedActors = actors.filter((actor) => {
    return actor.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  const handleChange = (value) => {
    setNameFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        {displayedActors.length > 0 ? (
          <ActorList actors={displayedActors} action={action} />
        ) : (
          <Grid item xs={12}>
            <p>No actors found</p>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default ActorListPageTemplate;