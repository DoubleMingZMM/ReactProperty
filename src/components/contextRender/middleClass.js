import React from 'react';
import SonClass from './sonClass.js'

class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        middle
        <SonClass componentComposite={this.props.componentComposite} />
      </div>
    );
  }
}

export default Middle;