/* eslint-disable react/jsx-no-undef */
import React from 'react';
// import PropTypes from 'prop-types';
import ContextProvider from './context'

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ContextProvider.Consumer>
          {
            context => {
              return <span>son {context.msg}</span>
            }
          }
        </ContextProvider.Consumer>
      </div>
    );
  }
}

export default Son;