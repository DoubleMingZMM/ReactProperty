import React from 'react';
import PropTypes from 'prop-types';

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextTypes = {
    msg: PropTypes.string
  }

  render() {
    return (
      <div>
        son {this.context.msg}
      </div>
    );
  }
}

export default Son;