/* eslint-disable react/prop-types */
import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
  }

  _handleMovieClick(movie) {
    this.setState({
      activeCard: movie
    });
  }

  _renderMain() {
    const {films} = this.props;
    return (
      <Main films={films}
        onTitleClick={this._handleMovieClick}
        onPosterClick={this._handleMovieClick}
      />
    );
  }

  _renderMoviePage() {
    const {films} = this.props;
    return (
      <MoviePage
        movie={films[0]}
      />
    );
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/movie">
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
