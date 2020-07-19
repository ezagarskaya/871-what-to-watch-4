/* eslint-disable react/prop-types */
import React from 'react';

const MovieCard = (props) => {
  const {movie, onTitleClick, onPosterClick, onMouseEnter} = props;
  const {name, img} = movie;

  return (
    <article className="small-movie-card catalog__movies-card" onClick={() => {
      console.log(1111, movie)
      return onPosterClick(movie)
    }
    }
    onMouseEnter={() => onMouseEnter(movie)}>
      <div className="small-movie-card__image">
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={() => onTitleClick(movie)}>
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};


export default MovieCard;
