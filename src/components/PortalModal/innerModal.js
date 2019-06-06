import React from 'react';

class InnerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div style={{ width: '100%', height: '45vh', background: 'black', opacity: 0.3, position: 'absolute', top: 0 }}>
        这是innerModal
      </div>
    )
  }
}

export default InnerModal;