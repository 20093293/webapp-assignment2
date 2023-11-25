import React from "react";
import ActorListPageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import { getTopActors } from "../api/tmdb-api";

const TopRatedActorsPage = () => {
  const { data: actors = [] } = useQuery('topRatedActors', getTopActors, {
    staleTime: 30000
  });

  return (
    <ActorListPageTemplate
      title='Discover Top Actors'
      actors={actors}
      action={(actor) => {
      }}
    />
  );
};

export default TopRatedActorsPage;