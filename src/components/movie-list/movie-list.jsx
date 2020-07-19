/* eslint-disable react/prop-types */
import React, {PureComponent} from 'react';
import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
    this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
  }

  _handleMovieCardMouseEnter(movie) {
    this.setState({
      activeCard: movie
    });
  }

  render() {
    const {films, onPosterClick, onTitleClick} = this.props;

    return (
      films.map((it, i) =>
        <div key={it.name + i} className="catalog__movies-list">
          <MovieCard movie={it}
            onTitleClick={onTitleClick}
            onMouseEnter={this.handleMovieCardMouseEnter}
            onPosterClick={onPosterClick}
          />
        </div>
      )
    );
  }
}

export default MovieList;
