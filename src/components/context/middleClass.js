import React from 'react';
import SonClass from './sonClass.js'

class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        middle
        <SonClass />
      </div>
    );
  }
}

export default Middle;