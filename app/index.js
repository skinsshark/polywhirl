import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Polygon from './components/Polygon.js';

class App extends React.Component {

  render() {
    return (
      <Grid className="page-wrapper">
        <h1>POLYWHIRL 🌀</h1>
        <Polygon />
      </Grid>
    );
  }
}

render(
  <App />,
  document.getElementById('poly')
);
