import React from 'react';
// import PropTypes from 'prop-types';
import MiddleClass from './middleClass.js';
// const ContextProvider = React.createContext('zmm');
import ContextProvider from './context'

class Dad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '给儿子的信',
      name: 'who knows'
    };
  }

  handleClick = () => {
    this.setState({
      msg: '我改变了'
    });
  }


  render() {
    return (
      <div>
        dad
        <ContextProvider.Provider value={this.state}>
          <button onClick={this.handleClick}>点我改变</button>
          <MiddleClass />
        </ContextProvider.Provider>
      </div>
    );
  }
}

export default Dad;