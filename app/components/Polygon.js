import React from 'react';
import PropTypes from 'prop-types';

class Polygon extends React.Component {

  handleClick() {

  }

  render () {
    return (
      <div>
        <canvas id="stage"
          width="300px"
          height="300px"
        ></canvas>
        <p id="inc" onClick={this.handleClick()}>🆙</p>
        <p id="score"></p>
      </div>
    );
  }
}

export default Polygon;
