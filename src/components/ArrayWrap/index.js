import React from 'react';

class ArrayWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }


  render() {
    return (
      [<div>1</div>,
      <div>2</div>,
      <div>3</div>,
      <div>4</div>]
    )
  }
}

export default ArrayWrap;