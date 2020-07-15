/* eslint-disable react/prop-types */
import React from 'react';

const MovieCard = (props) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={props.img} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{props.name}</a>
      </h3>
    </article>
  );
};


export default MovieCard;
