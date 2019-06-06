import React from 'react';
// import PropTypes from 'prop-types';
import MiddleClass from './middleClass.js';

class Dad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '给儿子的信'
    };
  }

  render() {
    const componentComposite = (
      <div>
        son {this.state.msg}
      </div>
    )

    return (
      <div>
        dad
        <MiddleClass componentComposite={componentComposite} />
      </div>
    );
  }
}

export default Dad;