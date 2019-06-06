import React from 'react';
import PropTypes from 'prop-types';
import MiddleClass from './middleClass.js';

class Dad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '给儿子的信'
    };
  }

  handleClick = () => {
    this.setState({
      msg: '我改变了'
    })
  }

  static childContextTypes = {
    msg: PropTypes.string
  }

  getChildContext() {
    return {
      msg: this.state.msg
    }
  }

  render() {
    return (
      <div>
        dad <button onClick={this.handleClick}>点我改变</button>
        <MiddleClass />
      </div>
    );
  }
}

export default Dad;