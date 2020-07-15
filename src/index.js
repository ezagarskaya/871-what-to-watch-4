import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import films from './mocs/films.js';

const init = () => {

  ReactDOM.render(
      <App films={films}></App>,
      document.getElementById(`root`)
  );
};

init();

