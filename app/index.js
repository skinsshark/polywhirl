import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Grid } from 'react-bootstrap';

class App extends React.Component {
  constructor( props ) {
    super(props);
  }

  render() {
    return (
      <Grid className="page-wrapper">
        <h1>POLYWHIRL 🌀</h1>
        <canvas id="stage"
          width="300px"
          height="300px"
        ></canvas>
        <p id="inc">🆙</p>
      </Grid>
    );
  }
}

render(
  <App />,
  document.getElementById('poly')
);
