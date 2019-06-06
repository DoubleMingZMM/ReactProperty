import React from 'react';
import PortalModal from './index.js';
import InnerModal from './innerModal.js';

class TestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleHide() {
    this.setState({
      show: false
    });
  }

  render() {
    const modal = this.state.show && (
      <PortalModal>
        <InnerModal />
      </PortalModal>
    );
    return (
      <div style={{ height: '100vh', background: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={this.handleShow}>点击显示</button>
        <button onClick={this.handleHide}>点击隐藏</button>
        {modal}
      </div>
    )
  }
}

export default TestModal;