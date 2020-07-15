import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <Main films={props.films}></Main>
  );
};

export default App;
