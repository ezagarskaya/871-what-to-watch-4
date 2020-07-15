import React from 'react';
import MovieCard from '../movie-card/movie-card.jsx';

const MovieList = (props) => {
  return (
    props.films.map((it, i) =>
      <div key={it.name + i} className="catalog__movies-list">
        <MovieCard name={it.name} img={it.img}/>
      </div>
    )
  );
};

export default MovieList;
