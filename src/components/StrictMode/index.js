import React from 'react';

class StrictMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <React.StrictMode>
        {this.props.children}
      </React.StrictMode>
    )
  }
}

export default StrictMode;