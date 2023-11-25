import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query';
import { getLatestMovie } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const LatestMoviePage = (props) => {
  const { data: movies = [] } = useQuery('latestMovie', getLatestMovie, {
    staleTime: 30000
  });

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default LatestMoviePage;