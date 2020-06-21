import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const init = () => {
  const film = {
    name: [`The Grand Budapest Hotel`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
    genre: `Drama`,
    date: 2014,
    img: [`img/bohemian-rhapsody.jpg`],
  };

  ReactDOM.render(
      <App name={film.name}
        genre={film.genre}
        date={film.date}></App>,
      document.getElementById(`root`)
  );
};

init();

