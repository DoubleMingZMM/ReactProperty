import React from 'react';

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.componentComposite}
      </div>
    );
  }
}

export default Son;